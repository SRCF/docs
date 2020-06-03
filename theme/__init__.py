from collections import Counter
from docutils import nodes
import os.path
import subprocess

from jinja2 import Undefined

from sphinx.jinja2glue import BuiltinTemplateLoader
from sphinx.locale import admonitionlabels
from sphinx.writers.html import HTMLTranslator


ALERTS = {
    "attention": "primary",
    "caution": "warning",
    "danger": "danger",
    "error": "danger",
    "example": "info",
    "hint": "info",
    "important": "primary",
    "note": "info",
    "seealso": "info",
    "tip": "primary",
    "todo": "info",
    "warning": "warning",
}


class Jinja2TemplateBridge(BuiltinTemplateLoader):

    def init(self, builder, *args, **kwargs):
        super(Jinja2TemplateBridge, self).init(builder, *args, **kwargs)
        self._srcdir = builder.srcdir
        self.environment.globals["contributors"] = self.contributors

    def contributors(self, path, meta):
        abspath = os.path.join(self._srcdir, "{}.rst".format(path))
        authors = []
        if os.path.exists(abspath):
            out = subprocess.check_output(("git", "log", "--follow", "--format=%an", abspath))
            counts = Counter(out.decode("utf-8").splitlines())
            authors.extend(author for author, _ in counts.most_common())
        if meta and meta["contributors"]:
            authors.extend(author for author in meta["contributors"].split(", ")
                           if author not in authors)
        return authors


class BootstrapHTMLTranslator(HTMLTranslator, object):

    def visit_table(self, node):
        node.attributes["classes"].extend(["table", "table-bordered"])
        super(BootstrapHTMLTranslator, self).visit_table(node)

    def visit_row(self, node):
        if node.parent.tagname == "thead":
            node.attributes["classes"].append("thead-light")
        super(BootstrapHTMLTranslator, self).visit_row(node)

    def visit_admonition(self, node, name=""):
        cls = None
        if name:
            cls = ALERTS.get(name)
        elif any("admonition-" in cls for cls in node.attributes["classes"]):
            names = node.attributes.get("name")
            if names:
                name = names[0]
                cls = ALERTS.get(name)
            else:
                cls = "info"
        if cls:
            classes = ["alert", "alert-{}".format(cls)]
            self.body.append(self.starttag(node, "div", CLASS=" ".join(classes)))
            if name in ("seealso", "todo"):
                node.insert(0, nodes.title(name, "{}:".format(admonitionlabels[name])))
        else:
            super(BootstrapHTMLTranslator, self).visit_admonition(node, name)


def setup(app):
    app.set_translator("html", BootstrapHTMLTranslator)

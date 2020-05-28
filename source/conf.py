import sys

sys.path.append("..")

import theme


project = "SRCF"
author = "The Student-Run Computing Facility"

extensions = ['sphinx.ext.autosectionlabel']

master_doc = "index"

html_theme = "theme"
html_theme_path = [".."]
html_title = "SRCF docs"
html_sidebars = {"**": ["localtoc.html", "relations.html", "searchbox.html"]}
html_theme_options = {
    "footer_contributors": True,
}
template_bridge = "theme.Jinja2TemplateBridge"


def setup(app):
    theme.setup(app)

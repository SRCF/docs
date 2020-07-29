import sys

sys.path.append("..")

import theme


project = "SRCF"
author = "The Student-Run Computing Facility"

extensions = []

master_doc = "index"

html_theme = "theme"
html_theme_path = [".."]
html_extra_path = [".htaccess"]
html_title = "SRCF docs"
html_sidebars = {"**": ["localtoc.html", "relations.html", "searchbox.html"]}
html_theme_options = {
    "footer_contributors": True,
}
html_use_opensearch = "https://docs.srcf.net/"
template_bridge = "theme.Jinja2TemplateBridge"


def setup(app):
    theme.setup(app)

import sys
sys.path.append("..")

import theme


project = "SRCF"
author = "The Student-Run Computing Facility"
copyright = "2020, {}".format(author)

extensions = []

master_doc = "index"

html_theme = "theme"
html_theme_path = [".."]
html_title = "SRCF docs"
html_sidebars = {"**": ["localtoc.html", "relations.html", "searchbox.html"]}


def setup(app):
    theme.setup(app)

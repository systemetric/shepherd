const fs = require("fs");
const path = require("path");
const fm = require("front-matter");
const docsCategories = require("./categories");

function makeSidebar(dirPath, categories = []) {
  const sidebar = [
    {
      collapsable: false,
      children: [
        {
          name: "",
          position: -1
        }
      ]
    }
  ].concat(
    categories.map(category => ({
      title: category,
      collapsable: false,
      children: []
    }))
  );

  // noinspection JSCheckFunctionSignatures
  fs.readdirSync(dirPath)
    .filter(item => item.endsWith(".md") && item !== "README.md")
    .map(item => ({
      name: item.substring(0, item.length - 3),
      frontmatter: fm(
        fs.readFileSync(path.resolve(dirPath, item), { encoding: "utf-8" })
      ).attributes
    }))
    .forEach(item => {
      // noinspection JSUnresolvedVariable
      const category =
        item.frontmatter.category === "None"
          ? sidebar[0]
          : sidebar.find(group => group.title === item.frontmatter.category);
      if (category) {
        category.children.push({
          name: item.name,
          position: item.frontmatter.position
        });
      }
    });
  sidebar.forEach(group => {
    group.children.sort((a, b) => a.position - b.position);
    group.children = group.children.map(item => item.name);
  });

  return sidebar;
}

const docsSidebar = makeSidebar(path.resolve(__dirname, ".."), docsCategories);

module.exports = {
  title: "Robocon",
  base: "/docs/",
  themeConfig: {
    nav: [
      { text: "Shepherd", link: "http://robot.go" },
      { text: "Editor", link: "http://robot.go/editor" }
    ],
    sidebar: {
      "/": docsSidebar
    }
  }
};

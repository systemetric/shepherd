const fs = require("fs");
const path = require("path");

// noinspection JSCheckFunctionSignatures
fs.readdirSync(__dirname)
  .filter(file => file.endsWith(".md"))
  .map(file => path.join(__dirname, file))
  .forEach(file => {
    let data = fs.readFileSync(file, { encoding: "utf8" });

    // Gets rid of docs prefix for internal links
    data = data.replace(/]\(\/docs\//g, "](/");

    fs.writeFileSync(file, data, { encoding: "utf8" });
  });

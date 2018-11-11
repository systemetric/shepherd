const fs = require("fs");
const path = require("path");

// noinspection JSCheckFunctionSignatures
fs.readdirSync(__dirname)
  .filter(file => file.endsWith(".md"))
  .forEach(file => {
    console.log(`Transforming ${file}...`);

    const filePath = path.join(__dirname, file);

    let data = fs.readFileSync(filePath, { encoding: "utf8" });

    // Gets rid of docs prefix for internal links
    data = data.replace(/]\(\/docs\//g, "](/");

    // Make image urls relative
    data = data.replace(/]\(\/images\//g, "](./images/");

    fs.writeFileSync(filePath, data, { encoding: "utf8" });
  });

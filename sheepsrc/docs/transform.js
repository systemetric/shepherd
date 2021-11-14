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

    // Remove PI_REMOVE sections
    data = data.replace(/<!--PI_REMOVE-->[\s\S]*<!--END_PI_REMOVE-->/g, "");

    // Add PI_EXTERNAL_LINK_WARNING
    data = data.replace(
      /<!--PI_EXTERNAL_LINK_WARNING-->/g,
      [
        ":::danger",
        "These links won't work when you're connected to your Robot.",
        ":::"
      ].join("\n")
    );

    // Transform PDF links
    data = data.replace(/]\(\/(.*)\.pdf\)/g, "](/docs/$1.pdf)");

    // Transform ZIP links
    data = data.replace(/]\(\/(.*)\.zip\)/g, "](/docs/$1.zip)");

    // Transform PY links
    data = data.replace(/]\(\/(.*)\.py\)/g, "](/docs/$1.py)");

    fs.writeFileSync(filePath, data, { encoding: "utf8" });
  });

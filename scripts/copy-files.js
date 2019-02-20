const path = require("path");
const fs = require("fs-extra");

const SRC = path.resolve(__dirname, "../");
const DEST = path.resolve(__dirname, "../dist/");

async function run() {
  // Take package.json, modify it's content and put it into the dist folder
  const packageJSON = await fs.readJSON(`${SRC}/package.json`);
  await fs.createFile(`${DEST}/package.json`);
  await fs.writeJSON(
    `${DEST}/package.json`,
    {
      ...packageJSON,
      private: false,
      main: "index.js",
      module: "index.es.js",
      "jsnext:main": "index.es.js"
    },
    { spaces: 2 }
  );

  // Copy the license and the readme files
  await fs.copy(`${SRC}/LICENSE`, `${DEST}/LICENSE`);
  await fs.copy(`${SRC}/README.md`, `${DEST}/README.md`);
}

run();

const path = require("path");
const fs = require("fs-extra");

// Take package.json and modify it's content to put into the dist folder
const SRC = path.resolve(__dirname, "../package.json");
const DEST = path.resolve(__dirname, "../dist/package.json");

async function run() {
  const packageJSON = await fs.readJSON(SRC);

  await fs.createFile(DEST);
  await fs.writeJSON(
    DEST,
    {
      ...packageJSON,
      main: "./index.js",
      private: false
    },
    { spaces: 2 }
  );
}

run();

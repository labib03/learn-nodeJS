const fs = require("fs");

const __dirPath = "./data";
const __dataPath = "./data/data.json";

const checkDirPath = () => {
  if (!fs.existsSync(__dirPath)) {
    fs.mkdirSync(__dirPath);
  }
};

const checkDataPath = () => {
  if (!fs.existsSync(__dataPath)) {
    fs.writeFileSync(__dataPath, "[]", "utf-8");
  }
};

function generateContact() {
  checkDirPath();
  checkDataPath();

  const contacts = fs.readFileSync("./data/data.json", "utf-8");
  return contacts;
}

module.exports = { generateContact };

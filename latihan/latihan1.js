const { user } = require("../utils/user");
const os = require("os");
const fs = require("fs");

// root variable
const __rootDirPath = "./data";

const checkDirPath = () => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(__rootDirPath)) {
      setTimeout(() => {
        console.log(`Direktori ${__rootDirPath} belum ada`);
        fs.mkdirSync(__rootDirPath);
        setTimeout(() => {
          resolve(`Direktori ${__rootDirPath} berhasil dibuat`);
        }, 2000);
      }, 1000);
    } else {
      resolve(`Direktori ${__rootDirPath} sudah ada`);
    }
  });
};

const checkDataPath = (fileName) => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(`${__rootDirPath}/${fileName}.txt`)) {
      setTimeout(() => {
        console.log(`File ${fileName}.txt belum ada`);
        fs.writeFileSync(
          `${__rootDirPath}/${fileName}.txt`,
          `isi dari file ${fileName}.txt`,
          "utf-8"
        );
        setTimeout(() => {
          resolve("File berhasil dibuat");
        }, 2000);
      }, 1000);
    } else {
      resolve("File sudah ada");
    }
  });
};

async function latihan1() {
  console.log("Check direktori apakah sudah ada atau belum");
  const dirCheck = await checkDirPath();
  console.log(dirCheck + "\n");

  console.log("Check data apakah sudah ada atau belum");
  const dataSatuCheck = await checkDataPath("satu");
  console.log(dataSatuCheck);

  const dataDuaCheck = await checkDataPath("dua");
  console.log(dataDuaCheck);

  const getData = fs.readFileSync(`${__rootDirPath}/satu.txt`, "utf-8");

  fs.writeFileSync(
    `${__rootDirPath}/data-write.txt`,
    `ini hasil data yang dibuat : ${getData}`
  );
}

module.exports = latihan1;
// export default latihan1;

const readline = require("readline");
const fs = require("fs");
const { setTimeout } = require("timers");

const { access, constants } = fs;
const __dirPath = "./data";
const __dataPath = "./data/data.json";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const latihan2 = () => {
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

  const check = () => {
    checkDirPath();

    checkDataPath();
  };

  const makeQuestion = (question) => {
    return new Promise((res, _rej) => {
      rl.question(question, (answer) => {
        res(answer);
      });
    });
  };

  const getAnswer = async () => {
    check();
    const nama = await makeQuestion("Masukan Nama Anda : ");
    const email = await makeQuestion("Masukan Email Anda : ");
    const alamat = await makeQuestion("Masukan Alamat Anda : ");

    const user = { nama, email, alamat };
    // read disini kita nge get data dari data.json atau nge copy data dari data.json
    const readData = fs.readFileSync("./data/data.json", "utf-8");
    // convert dari string ke json, supaya bisa pake method push nya array
    const toJson = JSON.parse(readData);
    toJson.push(user);

    // disini ke nge write data atau nginput data ke data.json, dan kita convert menggunakan stringify, agar bentuk nya berubah menjadi json atau string
    fs.writeFileSync("./data/data.json", JSON.stringify(toJson));

    rl.close();

    console.log("Data berhasil disimpan");
  };

  getAnswer();
};

module.exports = latihan2;
// export default latihan2;

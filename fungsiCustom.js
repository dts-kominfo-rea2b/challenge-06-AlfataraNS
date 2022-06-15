// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

const proccessData = (data) => {
  let msg = "";
  
  if (data?.message != undefined) {
    msg = data?.msg;
  } else if (data?.length) {
    data.forEach((item) => {
      if (item?.msg != undefined) {
        msg = item?.msg;
      }
      if (item?.data?.msg != undefined) {
        msg = item?.data?.msg;
      }
    })
  }
  return msg.split(" ")[1];
}

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallBack) => {
  let result = [];
  fs.readFile(file2, {encoding: "utf8"}, (err, data) => {
    if (err) {
      fnCallBack(err, null);
      return;
    }
    result.push(proccessData(JSON.parse(data)));

    fs.readFile(file2, {encoding: "utf8"}, (err, data) => {
      if (err) {
        fnCallBack(err, null);
        return;
      }
      result.push(proccessData(JSON.parse(data)));

      fs.readFile(file3, {encoding: "utf8"}, (err, data) => {
        if (err) {
          fnCallBack(err, null);
          return;
        }
        result.push(proccessData(JSON.parse(data)));
        
        fnCallBack(err, result);
      })
    })
  })
}

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};

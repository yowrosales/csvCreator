import { appendFileSync } from "fs";
import list from "./list.js";

const numRows = 1000;

class Row {
  constructor(firstName = "", lastName = "", phone = "", email = "") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
  }

  saveAsCSV() {
    const csv = `${this.firstName},${this.lastName},${this.phone},${this.email}\n`;
    try {
      appendFileSync("./CSV_TEST_DATA.csv", csv);
    } catch (err) {
      console.error(err);
    }
  }
}

const getRandom = (max) => {
  return Math.floor(Math.random() * max);
};

const generateNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const generateEmail = (fName, lName, count) => {
  return `${count}_${fName}${lName}@test.com`;
};

const generateCSVFile = () => {
  const { names } = list;

  const header = new Row("firstName", "lastName", "phone", "email");
  header.saveAsCSV();

  let rowCount = 0;
  while (rowCount < numRows) {
    const firstName = names[getRandom(50)];
    const lastName = names[getRandom(50)];
    const phone = generateNumber(10000000);
    const email = generateEmail(firstName, lastName, rowCount + 1);
    console.log({ firstName, lastName, phone, email });
    const csvRow = new Row(firstName, lastName, phone, email);
    csvRow.saveAsCSV();
    rowCount++;
  }
};

generateCSVFile();

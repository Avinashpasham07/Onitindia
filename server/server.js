import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";
import XLSX from "xlsx";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const FILE_PATH = "./subscribers.xlsx";

function saveEmailToExcel(email) {
  let workbook;
  let worksheet;

  if (fs.existsSync(FILE_PATH)) {
    workbook = XLSX.readFile(FILE_PATH);
    worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(worksheet);
    data.push({ Email: email, Date: new Date().toLocaleString() });
    worksheet = XLSX.utils.json_to_sheet(data);
    workbook.Sheets[workbook.SheetNames[0]] = worksheet;
  } else {
    const data = [{ Email: email, Date: new Date().toLocaleString() }];
    worksheet = XLSX.utils.json_to_sheet(data);
    workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Subscribers");
  }

  XLSX.writeFile(workbook, FILE_PATH);
}

app.post("/api/subscribe", (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  try {
    saveEmailToExcel(email);
    res.status(200).json({ message: "Email saved successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving email" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

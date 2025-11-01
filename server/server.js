import express from "express";
import cors from "cors";
import xlsx from "xlsx";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Excel file path
const filePath = path.join(__dirname, "subscribers.xlsx");

// ✅ Ensure file & sheet exist before using
const ensureExcelFile = () => {
  if (!fs.existsSync(filePath)) {
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet([]);
    xlsx.utils.book_append_sheet(wb, ws, "Subscribers");
    xlsx.writeFile(wb, filePath);
  }
};

// ✅ API to handle email subscriptions
app.post("/api/subscribe", (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  console.log("📩 New email received:", email);

  ensureExcelFile(); // make sure file exists

  // Read existing data
  const workbook = xlsx.readFile(filePath);
  const sheetName = "Subscribers";
  const worksheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(worksheet);

  // Check for duplicates
  const alreadyExists = data.some(
    (entry) => entry.Email && entry.Email.toLowerCase() === email.toLowerCase()
  );
  if (alreadyExists) {
    console.log("⚠️ Email already exists:", email);
    return res.status(200).json({ message: "Email already exists" });
  }

  // Append new record
  data.push({ Email: email, Date: new Date().toLocaleString() });

  // Rewrite updated sheet
  const newSheet = xlsx.utils.json_to_sheet(data);
  workbook.Sheets[sheetName] = newSheet;
  workbook.SheetNames = [sheetName];
  xlsx.writeFile(workbook, filePath);

  console.log("✅ Email saved to Excel:", email);
  res.status(200).json({ message: "Email saved successfully!" });
});

// ✅ Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

import express from "express";
import mongoose from "mongoose";
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

/* --------------------------- 🔹 MONGODB CONNECTION --------------------------- */
mongoose
  .connect("mongodb://127.0.0.1:27017/onit_blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

/* --------------------------- 🔹 BLOG MODEL UPDATED (3 IMAGES) --------------------------- */
const Blog = mongoose.model("Blog", {
  title: String,
  author: String,
  category: String,
  description: String,
  image: String,
  image2: String,
  image3: String,
  keywords: [String],
  date: { type: Date, default: Date.now },
});

/* --------------------------- 🔹 ADD BLOG ROUTE (UPDATED) --------------------------- */
app.post("/api/add-blog", async (req, res) => {
  try {
    const blog = new Blog({
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      description: req.body.description,
      image: req.body.image,
      image2: req.body.image2,
      image3: req.body.image3,
      keywords: req.body.keywords || [],
    });

    await blog.save();
    res.json({ message: "✅ Blog saved successfully!" });
  } catch (error) {
    console.error("❌ Error adding blog:", error);
    res.status(500).json({ error: "Failed to save blog" });
  }
});

/* --------------------------- 🔹 GET ALL BLOGS --------------------------- */
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 });
    res.json(blogs);
  } catch (error) {
    console.error("❌ Error fetching blogs:", error);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

/* --------------------------- 🔹 DELETE BLOG --------------------------- */
app.delete("/api/delete-blog/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.json({ message: "Blog deleted successfully!" });
  } catch (error) {
    console.error("❌ Error deleting blog:", error);
    res.status(500).json({ error: "Failed to delete blog" });
  }
});

/* --------------------------- 🔹 EMAIL SUBSCRIBER EXCEL --------------------------- */
const filePath = path.join(__dirname, "subscribers.xlsx");

const ensureExcelFile = () => {
  if (!fs.existsSync(filePath)) {
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet([]);
    xlsx.utils.book_append_sheet(wb, ws, "Subscribers");
    xlsx.writeFile(wb, filePath);
  }
};

app.post("/api/subscribe", (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  ensureExcelFile();

  const workbook = xlsx.readFile(filePath);
  const worksheet = workbook.Sheets["Subscribers"];
  const data = xlsx.utils.sheet_to_json(worksheet);

  const exists = data.some(
    (entry) => entry.Email?.toLowerCase() === email.toLowerCase()
  );

  if (exists) return res.json({ message: "Email already exists" });

  data.push({ Email: email, Date: new Date().toLocaleString() });

  workbook.Sheets["Subscribers"] = xlsx.utils.json_to_sheet(data);
  xlsx.writeFile(workbook, filePath);

  res.json({ message: "Email saved successfully!" });
});

/* --------------------------- 🔹 ADMIN LOGIN --------------------------- */
const Admin = mongoose.model("Admin", {
  email: String,
  password: String,
});

app.post("/api/admin-login", async (req, res) => {
  try {
    const admin = await Admin.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (!admin) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

/* --------------------------- 🔹 START SERVER --------------------------- */
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);

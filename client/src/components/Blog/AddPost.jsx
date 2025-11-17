import React, { useState } from "react";

function AddPost() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    image: "",
    image2: "",
    image3: "",
    keywords: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/add-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: form.title,
          author: form.author,
          category: form.category,
          description: form.description,
          image: form.image,
          image2: form.image2,
          image3: form.image3,
          keywords: form.keywords
            .split(",")
            .map((k) => k.trim().toLowerCase()),
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Blog added successfully!");
        setForm({
          title: "",
          author: "",
          category: "",
          description: "",
          image: "",
          image2: "",
          image3: "",
          keywords: "",
        });
      } else {
        alert("❌ Error: " + data.error);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6fff4] via-[#f8faff] to-[#eaf8ff] flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-10 w-full max-w-3xl space-y-5"
      >
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Add New Blog Post
        </h1>

        <input type="text" placeholder="Title" required
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full border border-gray-300 rounded-xl p-3"
        />

        <input type="text" placeholder="Author" required
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
          className="w-full border border-gray-300 rounded-xl p-3"
        />

        <input type="text" placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="w-full border border-gray-300 rounded-xl p-3"
        />

        <input type="text" placeholder="Main Image URL" required
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="w-full border border-gray-300 rounded-xl p-3"
        />

        <input type="text" placeholder="Second Image URL (optional)"
          value={form.image2}
          onChange={(e) => setForm({ ...form, image2: e.target.value })}
          className="w-full border border-gray-300 rounded-xl p-3"
        />

        <input type="text" placeholder="Third Image URL (optional)"
          value={form.image3}
          onChange={(e) => setForm({ ...form, image3: e.target.value })}
          className="w-full border border-gray-300 rounded-xl p-3"
        />

        <textarea placeholder="Description" required
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full border border-gray-300 rounded-xl p-3 h-32"
        ></textarea>

        <input type="text" placeholder="Keywords (comma-separated)"
          value={form.keywords}
          onChange={(e) => setForm({ ...form, keywords: e.target.value })}
          className="w-full border border-gray-300 rounded-xl p-3"
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded-xl font-semibold"
        >
          🚀 Publish Post
        </button>
      </form>
    </div>
  );
}

export default AddPost;

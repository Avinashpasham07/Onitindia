import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../Footer";
import { Trash2 } from "react-feather";
import { API_BASE } from "../../config";

function BlogList() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");
  const isAdmin = localStorage.getItem("onit_admin") === "true";

  // Fetch blogs with pagination
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/blogs?page=${page}`);
        const data = await res.json();
        setBlogs((prev) => [...prev, ...data]); // Append new blogs
      } catch (err) {
        console.error("❌ Error fetching blogs:", err);
      }
    };
    fetchBlogs();
  }, [page]);

  const loadMore = () => setPage((p) => p + 1);

  const handleDelete = async (id) => {
    if (!window.confirm("⚠️ Delete this blog?")) return;
    try {
      const res = await fetch(`${API_BASE}/api/delete-blog/${id}`, { method: "DELETE" });
      if (res.ok) setBlogs((prev) => prev.filter((b) => b._id !== id));
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  };

  const cloudImg = (url) =>
    url?.includes("/upload/")
      ? url.replace("/upload/", "/upload/f_auto,q_auto,w_900/") // optimized
      : url;

  const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));

  const featuredBlog = sortedBlogs[0];
  const remainingBlogs = sortedBlogs.slice(1);

  const categories = ["All", ...new Set(blogs.map((b) => b.category))];

  const filtered =
    activeCategory === "All"
      ? remainingBlogs
      : remainingBlogs.filter((b) => b.category === activeCategory);

  return (
    <>
      <div className="bg-white min-h-screen w-full flex justify-center">
        <div className="w-full max-w-6xl px-6 md:px-12 py-20 text-gray-800">

          {/* FEATURED BLOG */}
          {featuredBlog && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative flex flex-col md:flex-row justify-between items-start gap-10 mb-20 border-b border-gray-200 pb-16"
            >
              <div className="flex-1 space-y-5">
                <p className="text-sm font-semibold text-green-600">
                  {featuredBlog.category}
                </p>

                <h2
                  onClick={() => navigate(`/blog/${featuredBlog._id}`)}
                  className="text-4xl md:text-5xl font-extrabold cursor-pointer hover:text-green-600"
                >
                  {featuredBlog.title}
                </h2>

                <p className="text-gray-500 text-sm">
                  by{" "}
                  <span className="text-green-600">{featuredBlog.author}</span>{" "}
                  • {new Date(featuredBlog.date).toLocaleDateString()}
                </p>

                <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
                  {featuredBlog.description?.slice(0, 250) + "..."}
                </p>

                <p
                  onClick={() => navigate(`/blog/${featuredBlog._id}`)}
                  className="text-green-600 font-semibold text-sm hover:underline cursor-pointer"
                >
                  Read More →
                </p>

                {isAdmin && (
                  <button
                    onClick={() => handleDelete(featuredBlog._id)}
                    className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition-all"
                  >
                    Delete Post
                  </button>
                )}
              </div>

              <div className="relative w-full md:w-[480px] h-[280px] rounded-2xl overflow-hidden">
                <img
                  loading="lazy"
                  src={cloudImg(featuredBlog.image)}
                  className="w-full h-full object-cover rounded-2xl"
                  alt={featuredBlog.title}
                />
              </div>
            </motion.div>
          )}

          {/* CATEGORY FILTER */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Browse by Category</h3>

            <div className="flex flex-wrap gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm border transition ${
                    activeCategory === cat
                      ? "bg-green-500 text-white"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* BLOG LIST */}
          <motion.div className="space-y-20">
            {filtered.map((post) => (
              <div
                key={post._id}
                className="group grid grid-cols-1 md:grid-cols-[1.8fr_1.2fr] gap-8 border-b border-gray-200 pb-12 cursor-pointer"
                onClick={() => navigate(`/blog/${post._id}`)}
              >
                <div className="pl-4 border-l-2 border-transparent group-hover:border-green-500 transition">

                  <p className="text-sm font-semibold text-green-600 uppercase">
                    {post.category}
                  </p>

                  <h2 className="text-3xl font-bold mt-2 group-hover:text-green-600">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 text-lg mt-4 max-w-md leading-relaxed">
                    {post.description?.slice(0, 220) + "..."}
                  </p>

                  <p
                    className="mt-5 text-green-600 font-semibold text-sm cursor-pointer hover:underline"
                  >
                    Read More →
                  </p>

                  {isAdmin && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(post._id);
                      }}
                      className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition-all"
                    >
                      Delete Post
                    </button>
                  )}
                </div>

                <div className="flex flex-col items-end gap-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <img
                      loading="lazy"
                      src={
                        post.authorImage ||
                        "https://api.dicebear.com/7.x/avataaars/svg?seed=" + post.author
                      }
                      className="w-10 h-10 rounded-full border"
                      alt={post.author}
                    />
                    <div className="text-right">
                      <p className="font-semibold">{post.author}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="w-full md:w-[350px] h-[220px] rounded-xl border border-gray-200 overflow-hidden">
                    <img
                      loading="lazy"
                      src={cloudImg(post.image)}
                      className="w-full h-full object-cover"
                      alt={post.title}
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* LOAD MORE BUTTON */}
          
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BlogList;

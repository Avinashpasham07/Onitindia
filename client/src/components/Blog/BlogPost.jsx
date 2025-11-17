import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUp } from "react-feather"; // ✅ Feather icons

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/blogs`);
        const data = await res.json();
        const selected = data.find((p) => p._id === id);
        setPost(selected);
      } catch (err) {
        console.error("❌ Error fetching post:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();

    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#e6fff4] to-[#eaf8ff]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-600 text-lg font-semibold"
        >
          Loading your story ✨...
        </motion.p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#e6fff4] via-[#f8faff] to-[#eaf8ff]">
        <h1 className="text-3xl font-semibold text-gray-700 mb-4">
          Post not found ❌
        </h1>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white bg-gradient-to-r from-green-400 to-blue-500 px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all"
        >
          <ArrowLeft size={18} /> Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#e6fff4] via-white to-[#eaf8ff] text-gray-800 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-green-300/25 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-300/25 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold text-black leading-tight drop-shadow-lg">
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-4 text-gray-600">
            <p>
              ✍️{" "}
              <span className="text-green-600 font-semibold">
                {post.author || "Admin"}
              </span>
            </p>
            <span className="hidden sm:block">•</span>
            <p>{new Date(post.date).toLocaleDateString()}</p>
            {post.category && (
              <>
                <span className="hidden sm:block">•</span>
                <span className="text-white bg-green-500 px-3 py-1 rounded-full text-xs">
                  {post.category}
                </span>
              </>
            )}
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl mb-12"
        >
          <img
            src={
              post.image ||
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            }
            alt={post.title}
            className="w-full h-[480px] object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-lg p-8 md:p-10 border border-white/50"
        >
          <p className="text-lg sm:text-xl leading-relaxed text-gray-800 mb-8">
            {post.description}
          </p>

          {post.keywords && post.keywords.length > 0 && (
            <div>
              <h3 className="text-green-600 font-semibold mb-3">🔥 Tags</h3>
              <div className="flex flex-wrap gap-3">
                {post.keywords.map((word, i) => (
                  <span
                    key={i}
                    className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm  transition"
                  >
                    #{word}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-14"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
          >
            <ArrowLeft size={20} /> Back to Blogs
          </button>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      {showScroll && (
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-green-400 text-white p-3 rounded-full shadow-lg hover:shadow-2xl transition-all"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </div>
  );
}

export default BlogPost;










 
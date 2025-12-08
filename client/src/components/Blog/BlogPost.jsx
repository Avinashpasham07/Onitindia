import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUp, User, Calendar, Tag, Clock, AlertCircle } from "react-feather";
import { API_BASE } from "../../config";

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showScroll, setShowScroll] = useState(false);
  const [readingTime, setReadingTime] = useState(0);

  // Calculate reading time based on word count
  const calculateReadingTime = (text) => {
    const wordsPerMinute = 200;
    const words = text?.trim().split(/\s+/).length || 0;
    return Math.ceil(words / wordsPerMinute);
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        // Note: Ideally, fetch by ID directly: `${API_BASE}/api/blogs/${id}`
        // Keeping your logic of fetching all and filtering:
        const res = await fetch(`${API_BASE}/api/blogs`);
        
        if (!res.ok) throw new Error("Failed to fetch data");

        const data = await res.json();
        const selected = data.find((p) => p._id === id);

        if (!selected) {
          setError("Post not found");
        } else {
          setPost(selected);
          setReadingTime(calculateReadingTime(selected.description));
        }
      } catch (err) {
        console.error("❌ Error fetching post:", err);
        setError("Something went wrong. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();

    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  // --- LOADING STATE ---
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#e6fff4] to-[#eaf8ff]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-12 h-12 border-4 border-green-200 border-t-green-600 rounded-full mb-4"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-500 font-medium tracking-wide animate-pulse"
        >
          Loading your story...
        </motion.p>
      </div>
    );
  }

  // --- ERROR / NOT FOUND STATE ---
  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#e6fff4] via-[#f8faff] to-[#eaf8ff] px-4 text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white/50 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/60"
        >
          <div className="text-red-400 mb-4 flex justify-center">
             <AlertCircle size={48} />
          </div>
          <h1 className="text-2xl font-bold text-gray-700 mb-2">
            {error || "Post not found"}
          </h1>
          <p className="text-gray-500 mb-6 max-w-md">
            We couldn't find the article you were looking for. It may have been removed or the link is incorrect.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 text-white bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-green-500/30 transition-all duration-300 w-full sm:w-auto"
          >
            <ArrowLeft size={18} /> Go Back
          </button>
        </motion.div>
      </div>
    );
  }

  // --- MAIN CONTENT ---
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#e6fff4] via-[#f5fbff] to-[#eaf8ff] text-gray-800 overflow-hidden font-sans">
      
      {/* Decorative Background Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-300/20 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[100px] animate-pulse pointer-events-none delay-1000"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          {/* Category Pill */}
          {post.category && (
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-wider text-green-700 uppercase bg-green-100/80 backdrop-blur-sm rounded-full border border-green-200"
            >
              {post.category}
            </motion.span>
          )}

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.15] mb-8 tracking-tight">
            {post.title}
          </h1>

          {/* Metadata Bar */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-2">
              <User size={16} className="text-green-500" />
              <span>{post.author || "Admin"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-blue-500" />
              <span>{new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-orange-400" />
              <span>{readingTime} min read</span>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 border-[6px] border-green-500"
        >
          <img
            src={post.image || "https://images.unsplash.com/photo-1499750310159-5b5f38e31638"}
            alt={post.title}
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"; }} // Fallback image
            className="w-full h-[300px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
        </motion.div>

        {/* Content Container - Glassmorphism */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Description / Content */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-8 w-1.5 bg-green-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-800">Key Highlights</h2>
            </div>

            <div className="space-y-4">
              {post.description
                ?.split("\n")
                .filter((line) => line.trim() !== "")
                .map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-5 bg-white/70 backdrop-blur-md rounded-2xl shadow-sm border border-white/50 hover:shadow-md hover:bg-white/90 transition-all duration-300"
                  >
                     <div className="shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs">
                           {index + 1}
                        </div>
                     </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {line}
                    </p>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Tags Section */}
          {post.keywords?.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-4 text-gray-400 uppercase text-xs font-bold tracking-widest">
                <Tag size={14} />
                <span>Related Topics</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {post.keywords.map((word, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white/80 border border-green-100 text-green-700 rounded-xl text-sm font-medium shadow-sm hover:shadow hover:bg-green-50 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                  >
                    #{word.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.article>

        {/* Footer / Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center border-t border-gray-200/60 pt-12"
        >
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-3 bg-green-500 text-white px-8 py-3.5 rounded-full font-semibold shadow-md hover:shadow-xl hover:text-green-500 hover:bg-white transition-all duration-300 border border-black"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to All Blogs
          </button>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 bg-green-500/90 backdrop-blur text-white p-3.5 rounded-2xl shadow-lg hover:shadow-green-500/40 hover:bg-green-600 transition-all"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default BlogPost;
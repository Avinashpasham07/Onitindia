import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Check, ArrowUp, Share2, Copy, Twitter, Linkedin, ChevronRight } from "react-feather";
import { API_BASE } from "../../config";
import Footer from "../Footer";

/* -------------------------------------------------------------------------- */
/*                            STRIPE-STYLE COMPONENTS                         */
/* -------------------------------------------------------------------------- */

// The "Blurple" Accent: #635bff
const AccentText = ({ children, className = "" }) => (
  <span className={`text-[#635bff] font-semibold ${className}`}>{children}</span>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#f6f9fc] text-[#425466] border border-[#e3e8ee]">
    {children}
  </span>
);

const SectionHeading = ({ children }) => (
  <h3 className="text-[11px] font-bold text-[#425466] uppercase tracking-widest mb-4 border-b border-[#e3e8ee] pb-2">
    {children}
  </h3>
);

const AuthorCard = ({ author, date }) => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-[#f6f9fc] border border-[#e3e8ee] overflow-hidden">
      <img
        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${author}`}
        alt={author}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-bold text-[#0a2540] leading-tight">{author}</span>
      <span className="text-xs font-medium text-[#425466]">{date}</span>
    </div>
  </div>
);

const Callout = ({ children }) => (
  <div className="my-10 p-6 bg-[#f6f9fc] border-l-4 border-green-500 rounded-r-lg">
    <h4 className="flex items-center gap-2 text-sm font-bold text-[#0a2540] mb-3 uppercase tracking-wide">
      <Check size={14} className="text-green-500" strokeWidth={3} />
      Key Highlight
    </h4>
    <div className="text-[#425466] font-medium leading-relaxed">
      {children}
    </div>
  </div>
);

/* -------------------------------------------------------------------------- */
/*                                MAIN SCREEN                                 */
/* -------------------------------------------------------------------------- */

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchPost = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/blog/${id}`);
        if (!res.ok) throw new Error("Article not found");
        const data = await res.json();
        setPost(data);
        // Calc reading time
        const words = data?.description?.split(/\s+/).length || 0;
        setReadingTime(Math.ceil(words / 225));
      } catch (err) {
        // Fallback fetch
        try {
          const all = await fetch(`${API_BASE}/api/blogs`).then(r => r.json());
          const found = all.find(p => p._id === id);
          if (found) {
            setPost(found);
            const words = found.description?.split(/\s+/).length || 0;
            setReadingTime(Math.ceil(words / 225));
          } else throw err;
        } catch (finalErr) {
          setError("We couldn't find that article.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const formattedDate = useMemo(() => post?.date ? new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : "", [post]);

  // Loading / Error
  if (loading || error) return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      {loading ? (
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-xs font-bold uppercase tracking-widest text-green-500">Loading Article</p>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-xl font-bold text-green-500 mb-4">{error}</h1>
          <button onClick={() => navigate("/blogs")} className="text-green-500 font-bold hover:underline">Return to Journal</button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-[#0a2540] font-sans selection:bg-[#635bff] selection:text-white">

      {/* NAV BAR */}


      <main className="max-w-[1040px] mx-auto px-6 py-12 lg:py-20">

        {/* HEADER GRID */}
        <header className="mb-16">
          <div className="flex flex-col gap-6 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3">
              <Pill>{post.category}</Pill>
              <span className="text-xs font-bold text-green-500 uppercase tracking-wider">{readingTime} min read</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-[#0a2540]"
            >
              {post.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-[#425466] leading-relaxed max-w-2xl font-medium"
            >
              {post.description?.slice(0, 150)}...
            </motion.p>
          </div>
        </header>

        {/* HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="w-full aspect-[2/1] md:aspect-[2.4/1] bg-[#f6f9fc] rounded-xl overflow-hidden mb-16 border border-[#e3e8ee]"
        >
          <img
            src={post.image?.replace("/upload/", "/upload/f_auto,q_auto,w_1200/") || "https://images.unsplash.com/photo-1556761175-5973dc0f32e7"}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">

          {/* SIDEBAR (METADATA) */}
          <aside className="lg:col-span-3 lg:sticky lg:top-32 h-fit space-y-8 order-2 lg:order-1">
            <div>
              <SectionHeading>Written By</SectionHeading>
              <AuthorCard author={post.author} date={formattedDate} />
            </div>

            <div>
              <SectionHeading>Share</SectionHeading>
              <div className="flex flex-col gap-2 items-start">
                <button onClick={() => navigator.clipboard.writeText(window.location.href)} className="flex items-center gap-2 text-sm font-bold text-green-500 hover:text-[#0a2540] transition-colors">
                  <Copy size={14} /> Copy Link
                </button>
                <button className="flex items-center gap-2 text-sm font-bold text-green-500 hover:text-[#0a2540] transition-colors">
                  <Share2 size={14} /> Share Article
                </button>
              </div>
            </div>

            {post.keywords && (
              <div>
                <SectionHeading>Topics</SectionHeading>
                <div className="flex flex-wrap gap-2">
                  {post.keywords.map((kw, i) => (
                    <span key={i} className="text-xs font-bold text-[#425466] bg-[#f6f9fc] px-2 py-1 rounded hover:bg-[#e3e8ee] transition-colors cursor-pointer">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>

          {/* MAIN CONTENT */}
          <article className="lg:col-span-9 lg:pl-12 order-1 lg:order-2">
            {/* Intro Paragraph */}
            <div className="prose prose-lg prose-slate max-w-none 
                    prose-headings:text-[#0a2540] prose-headings:font-bold prose-headings:tracking-tight
                    prose-p:text-[#425466] prose-p:leading-8 prose-p:font-medium
                    prose-a:text-[#635bff] prose-a:no-underline prose-a:font-semibold hover:prose-a:underline
                    prose-img:rounded-lg prose-img:border prose-img:border-[#e3e8ee]
                 ">
              {/* Render Highlights First */}
              {post.description?.length > 300 && (
                <Callout>
                  {post.description.split("\n").find(l => l.length > 50 && l.length < 200) || "The Stripe platform helps you build and scale your business online."}
                </Callout>
              )}

              {post.description?.split("\n").map((para, i) => (
                para.length > 0 && <p key={i}>{para}</p>
              ))}
            </div>
          </article>

        </div>

      </main>

      {/* FOOTER CTA */}
      <section className="bg-[#f3f4f6] border-t border-[#e3e8ee] py-20 mt-20">
        <div className="max-w-[1040px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0a2540] mb-6">Ready to get started?</h2>
          <p className="text-[#425466] mb-8 max-w-xl mx-auto">Explore more insights and stories from our team to help you navigate your journey.</p>
          <div className="flex justify-center gap-4">
            <button onClick={() => navigate("/blog")} className="px-6 py-3 bg-green-500 text-white rounded-full font-bold text-sm hover:bg-[#0a2540] transition-colors shadow-lg shadow-indigo-200">
              Read More Stories
            </button>
            <button className="px-6 py-3 bg-white text-green-500 border border-[#e3e8ee] rounded-full font-bold text-sm hover:border-[#0a2540] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default BlogPost;

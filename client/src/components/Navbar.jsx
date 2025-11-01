import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "react-feather";
import logoImage from "../assets/logo.png";

function Navbar({ onShowTaskPerformer }) {
  const centerNavItems = [
    { name: "Domain", target: "domain" },
    { name: "About Us", target: "whychooseus" },
    { name: "Contact", target: "footer" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.03 } },
  };

  const letterVariants = {
    hidden: { y: 5, opacity: 1 },
    visible: { y: 1, opacity: 1, transition: { duration: 0.1, ease: "easeOut" } },
  };

  const handleScrollTo = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 sm:px-8 h-20 z-[999]
      transition-all duration-500 ease-in-out
      ${scrolled ? "bg-white shadow-md backdrop-blur-md" : "bg-white/10 backdrop-blur-lg"}`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logoImage}
          alt="OnIT Logo"
          className="w-40 sm:w-60 object-contain cursor-pointer"
          onClick={() => handleScrollTo("home")}
        />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
        {centerNavItems.map((item, index) => (
          <motion.div
            key={index}
            className="relative pb-1 overflow-hidden cursor-pointer inline-block"
            onClick={() => handleScrollTo(item.target)}
            variants={containerVariants}
            initial="hidden"
            whileHover="visible"
          >
            {item.name.split("").map((char, idx) => (
              <motion.span
                key={idx}
                variants={letterVariants}
                className="inline-block text-md font-light text-black"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Right Buttons */}
      <div className="hidden md:flex items-center gap-4 mr-10">
        <button
          onClick={onShowTaskPerformer}
          className="bg-green-500 text-white text-[1rem] px-5 py-2 rounded-full hover:bg-black hover:text-white transition"
        >
          Add as Task Performer
        </button>

     <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSdjLQSxhukM9y99iIDBT8p86_ZLZi3gYuxseIC1kK0FbL31ag/viewform"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 text-white text-[1rem] px-5 py-2 rounded-full hover:bg-black hover:text-white transition"
>
  Become a Tester
</a>

      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden z-[1000]">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} className="text-black" /> : <Menu size={28} className="text-black" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg flex flex-col items-center py-6 space-y-5 md:hidden"
          >
            {centerNavItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleScrollTo(item.target)}
                className="text-lg font-medium text-gray-800 hover:text-green-700 transition"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                onShowTaskPerformer();
              }}
              className="text-lg font-bold text-white text-bold bg-green-600 hover:bg-green-700 px-6 py-2 rounded-full transition"
            >
              Add as Task Performer
            </button>
            
     <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSdjLQSxhukM9y99iIDBT8p86_ZLZi3gYuxseIC1kK0FbL31ag/viewform"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 text-white text-[1rem] px-5 py-2 rounded-full hover:bg-black hover:text-white transition"
>
  Become a Tester
</a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;

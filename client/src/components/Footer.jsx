import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import.meta.env.MODE === "development"
    ? "http://localhost:5000"
    : "https://onitindia.onrender.com";

function Footer({ onShowPrivacyPolicy }) {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    if (!email.trim()) {
      alert("Please enter an email");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      
  };

  return (
    <footer className="w-full bg-[#004d43] text-white px-10 md:px-20 py-16 relative overflow-hidden rounded-t-3xl">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-10 relative z-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-[8vw] md:text-[3vw] font-bold leading-tight mb-6">
            <span className="text-black">On</span>
            <span className="text-green-500">IT</span>
          </h1>

          <p className="text-base md:text-lg text-zinc-300 w-[95%] md:w-[80%] leading-relaxed">
            Simplify your life or start earning from it — all with one click.
            OnIt connects people who need help with those ready to help —
            instantly, locally, and securely.
          </p>

          {/* Input + Button Row */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-6 w-full md:w-[80%]">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-50 sm:flex-1 px-5 py-3 rounded-full bg-white/90 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-zinc-600"
            />

            <button
              onClick={handleSubmit}
              className="group relative px-8 py-3 rounded-full font-semibold 
                        bg-gradient-to-r from-[#0a0a0a] via-black to-[#0a0a0a] 
                        text-white shadow-lg overflow-hidden 
                        transition-all duration-500 ease-out 
                        hover:-translate-y-1 active:translate-y-0 active:scale-95"
            >
              <span className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10 text-white group-hover:text-black transition-colors duration-500 ease-in-out">
                Get Started
              </span>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-wrap justify-between md:justify-end gap-12 md:gap-20">
          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-green-400">Company</h3>
            <ul className="space-y-2 text-zinc-300">
              <li>
                <a href="#whychooseus" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#domain" className="hover:text-white transition">
                  Domains
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-green-400">Support</h3>
 <ul className="space-y-2 text-zinc-300">
    <li>
      <Link to="/privacy-policy" className="hover:text-white transition">
        Privacy Policy
      </Link>
    </li>
    <li>
      <Link to="/terms-and-conditions" className="hover:text-white transition">
        Terms of Use
      </Link>
    </li>
  </ul>

          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-zinc-600 my-10"></div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-zinc-400 gap-6 relative z-10">
        <p className="font-semibold">
          © {new Date().getFullYear()}{" "}
          <span className="text-black font-semibold">On</span>
          <span className="text-green-500 font-semibold">IT</span> Technologies Pvt. Ltd.
        </p>

        <div className="flex gap-5 text-2xl">
          <a
            href="https://www.linkedin.com/company/onitindia/?viewAsMember=true"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/onitplatform/"
            className="hover:text-white transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

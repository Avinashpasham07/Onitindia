import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

function Landingpage() {
  const alternates = [
    ["Task.", "Time."],
    ["Help.", "Fast."],
  ];

  const [activeSet, setActiveSet] = useState(0);
  const [registerCount, setRegisterCount] = useState(0);
  const [pinCount, setPinCount] = useState(0);

  // Alternate text animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSet((prev) => (prev + 1) % alternates.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Counter animations
  useEffect(() => {
    // Registered Users counter (10 → 450)
    let regInterval = setInterval(() => {
      setRegisterCount((prev) => {
        if (prev < 450) return prev + 10;
        clearInterval(regInterval);
        return prev;
      });
    }, 40);

    // Pin Code counter (1 → 4)
    let pinInterval = setInterval(() => {
      setPinCount((prev) => {
        if (prev < 4) return prev + 1;
        clearInterval(pinInterval);
        return prev;
      });
    }, 300);

    return () => {
      clearInterval(regInterval);
      clearInterval(pinInterval);
    };
  }, []);

  const slideVariant = {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
    transition: { duration: 0.85, ease: [0.7, 0, 0.24, 1] },
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.3"
      className="relative w-full pt-2 overflow-hidden bg-[#f3f4f6]"
    >
      {/* ===== HEADLINE AREA ===== */}
      <div className="mt-24 md:mt-36 px-4 sm:px-8 md:px-20">
        <div className="flex flex-col gap-[0.1rem] sm:gap-[0.2rem] md:gap-[0.3rem]">
          {/* --- FIRST LINE --- */}
          <div className="flex items-end gap-3 leading-none">
            <span className="text-[10vw] sm:text-[8vw] md:text-[6.5vw] uppercase font-bold text-zinc-800">
              Any
            </span>
            <div className="overflow-hidden h-[10vw] sm:h-[8vw] md:h-[6.5vw]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeSet + "-any"}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={slideVariant}
                  className="block text-[10vw] sm:text-[8vw] md:text-[6.5vw] uppercase font-bold text-green-400 leading-none"
                >
                  {alternates[activeSet][0]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* --- SECOND LINE --- */}
          <div className="flex items-end gap-3 leading-none">
            <span className="text-[10vw] sm:text-[8vw] md:text-[6.5vw] font-bold text-zinc-800">
              REAL{" "}
              <span className="text-green-400 font-bold">FAST</span>
            </span>
          </div>

          {/* --- THIRD LINE --- */}
          <div className="flex items-end gap-3 leading-none">
            <span className="text-[10vw] sm:text-[8vw] md:text-[6.5vw] font-bold text-zinc-800">
              We’re{" "}
              <span className="text-zinc-800 font-bold">On</span>
              <span className="text-green-400 font-bold leading-none">IT</span>
            </span>
          </div>
        </div>

        {/* --- Description --- */}
        <p className="mt-3 sm:mt-5 text-[3.5vw] sm:text-[2vw] md:text-base text-zinc-600 w-[90%] md:w-[60%] leading-relaxed">
          Connecting people who need help with those ready to help – instantly,
          locally, and with zero commission.
        </p>
      </div>

      {/* ===== RIGHT SIDE LOTTIE (Desktop) ===== */}
      <div className="absolute hidden md:flex justify-center items-center right-36 top-1/2 transform -translate-y-1/2">
        <iframe
          src="https://lottie.host/embed/3909c829-e89e-4a59-8a97-a016a3595327/UvFYMKy71T.lottie"
          style={{ width: "420px", height: "420px", border: "none" }}
          title="Connecting People Animation"
        ></iframe>
      </div>

      {/* ===== MOBILE LOTTIE ===== */}
      <div className="flex md:hidden justify-center mt-8">
        <iframe
          src="https://lottie.host/embed/3909c829-e89e-4a59-8a97-a016a3595327/UvFYMKy71T.lottie"
          style={{ width: "220px", height: "220px", border: "none" }}
          title="Connecting People Animation Mobile"
        ></iframe>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="border-t border-zinc-400 mt-5 md:mt-20 flex flex-col md:flex-row justify-between items-center py-6 px-4 sm:px-8 md:px-20 bg-[#f3f4f6] text-center md:text-left">
        {/* --- COUNTERS --- */}
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
          {/* Registered Users */}
          <div className="flex items-end gap-2">
            <span className="text-green-600 text-4xl sm:text-5xl md:text-6xl font-bold leading-none">
              {registerCount}+
            </span>
            <span className="text-zinc-700 text-sm sm:text-base md:text-lg font-semibold">
              Registered
            </span>
          </div>

          {/* Divider Line */}
          <div className="hidden sm:block w-[2px] h-8 bg-zinc-300 rounded-full"></div>

          {/* Pin Codes */}
          <div className="flex items-end gap-2">
            <span className="text-green-600 text-4xl sm:text-5xl md:text-6xl font-bold leading-none">
              {pinCount}+
            </span>
            <span className="text-zinc-700 text-sm sm:text-base md:text-lg font-semibold">
              Pin Codes
            </span>
          </div>
        </div>

        {/* --- BUTTONS --- */}
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 sm:gap-3 mt-4 md:mt-0">
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 sm:gap-3 mt-4 md:mt-0">

  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSeD90sDCZFts-uu_g_FgfVfG4Qmb1Ixyf0rJI7f-I4y9L6hgA/viewform"
    target="_blank"
    rel="noopener noreferrer"
    className="group border border-zinc-700 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm md:text-base 
               font-medium bg-zinc-900 text-white flex items-center gap-2 transition-all duration-300 
               hover:bg-green-500 hover:text-white"
  >
    Post a Task
  </a>

  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSdjLQSxhukM9y99iIDBT8p86_ZLZi3gYuxseIC1kK0FbL31ag/viewform"
    target="_blank"
    rel="noopener noreferrer"
    className="group border border-zinc-700 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm md:text-base 
               font-medium bg-zinc-900 text-white flex items-center gap-2 transition-all duration-300 
               hover:bg-green-500 hover:text-white"
  >
    Start Earning
  </a>

</div>


          <div className="w-8 h-8 sm:w-9 sm:h-9  rounded-full flex justify-center items-center bg-green-500 text-white transition-all duration-300 hover:bg-zinc-900 hover:text-white">
            <FaArrowUpLong className="rotate-45" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;

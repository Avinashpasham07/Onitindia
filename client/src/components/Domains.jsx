import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "react-feather";

const domains = [
  {
    title: "Home Help",
    description: "Get expert help for home chores, cleaning, and organizing tasks.",
    animation: "https://lottie.host/embed/01142de6-3381-4036-931d-0194c55a466b/Qd6XYrJ9lh.lottie",
  },
  {
    title: "Car & Driver",
    description: "Find trusted drivers or get your car serviced without hassle.",
    animation: "https://lottie.host/embed/f9e6ef44-bed5-47ae-9cec-c352383d9ac4/H93E4LWF2A.lottie",
  },
  {
    title: "Food & Grocery",
    description: "Order groceries, food delivery, or get quick local errands done.",
    animation: "https://lottie.host/embed/ccb7e519-73a8-450a-9b77-f20ff00c49ca/QqPoV5IXZj.lottie",
  },
  {
    title: "Project",
    description: "Get your projects done — from ideas to execution.",
    animation: "https://lottie.host/embed/4320ba84-f6e1-49ca-9b18-e8966671a74c/92fI0PG82n.lottie",
  },
  {
    title: "Tutoring",
    description: "Find local tutors for any subject or skill you want to learn.",
    animation: "https://lottie.host/embed/4908c437-499b-4a65-b634-fe8d846032c3/U6s9eSwRWD.lottie",
  },
];


function Domains() {
  return (
    <div className="w-full px-4 mt-0 sm:px-6 md:px-12 lg:px-20 py-14 sm:py-16 bg-[#f3f4f6]">
      {/* Heading */}
      <div className="text-center mb-10 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-800 font-['Neue Montreal'] mb-2">
          Explore Domains on <span className="text-black">On<span className="text-green-600">IT</span></span>
        </h1>
        <p className="text-zinc-800 mt-3 text-base sm:text-lg">
          Discover your opportunities and start working smartly.
        </p>
      </div>

      {/* Cards Section */}
      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-5
        gap-2 sm:gap-3 md:gap-3
        justify-items-center
      "
      >
        {domains.map((domain, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1, y: -2 }}
            transition={{ duration: 0.3 }}
            className="
              relative rounded-2xl sm:rounded-3xl shadow-md
              bg-gradient-to-br from-[#e3eafc] via-[#e3eafc] to-[#D9EEE3]
              flex flex-col justify-between
              w-[70%] sm:w-[80%] md:w-[90%] lg:w-full
              h-[240px] sm:h-[280px] md:h-[320px] lg:h-[370px]
              p-4 sm:p-5 md:p-6
              hover:shadow-xl
            "
          >
            {/* Subtle Background Accent */}
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-green-100 to-transparent rounded-3xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-['Neue Montreal']">
                    {domain.title}
                  </h2>
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-500" />
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-2 sm:mb-3">
                  {domain.description}
                </p>
              </div>

              {/* Animation or Image */}
              {domain.animation ? (
                <div className="w-full h-24 sm:h-28 md:h-32 lg:h-36 rounded-2xl overflow-hidden">
                  <iframe
                    src={domain.animation}
                    className="w-full h-full border-0 scale-110"
                    title={domain.title}
                  ></iframe>
                </div>
              ) : (
                <img
                  src={domain.img}
                  alt={domain.title}
                  className="w-full h-24 sm:h-28 md:h-32 lg:h-36 object-cover rounded-2xl"
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subtext */}
    
    </div>
  );
}

export default Domains;

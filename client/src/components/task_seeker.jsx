import React from "react";
import { motion } from "framer-motion";
import { Send, Search, MessageCircle, CheckCircle } from "react-feather";

const cards = [
  {
    number: "1",
    title: "Post",
    description: "Quickly post your task or request in just a few taps.",
    icon: <Send size={40} className="text-[#1a1a1a]" />,
  },
  {
    number: "2",
    title: "Find",
    description: "Nearby helpers instantly see and accept your request.",
    icon: <Search size={40} className="text-[#1a1a1a]" />,
  },
  {
    number: "3",
    title: "Connect",
    description: "Chat, track progress, and stay updated in real time.",
    icon: <MessageCircle size={40} className="text-[#1a1a1a]" />,
  },
  {
    number: "4",
    title: "Complete",
    description: "Task done on time with secure payment and feedback.",
    icon: <CheckCircle size={40} className="text-[#1a1a1a]" />,
  },
];

function Task_see() {
  return (
    <div className="w-full min-h-screen  px-4 sm:px-10 md:px-20  flex flex-col items-center justify-center">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-800 font-['Neue Montreal']">
          Find Tasker Nearby You!
        </h1>
        <p className="text-gray-600 mt-3 sm:mt-4 text-base sm:text-lg">
          Get Anything Done. Just Ask.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-3xl p-5 sm:p-6 md:p-8 shadow-md 
                       bg-gradient-to-br from-[#e3eafc] to-[#D9EEE3]
                       flex flex-col justify-between
                       w-[45%] sm:w-[45%] md:w-[22%]
                       h-[230px] sm:h-[270px] md:h-[320px]"
          >
            {/* Background Number */}
            <span className="absolute text-[5rem] sm:text-[6rem] md:text-[8rem] font-bold text-black/15 top-24 left-6 select-none">
              {card.number}
            </span>

            {/* Card Content */}
            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-black font-['Neue Montreal']">
                  {card.title}
                </h2>
                <motion.div transition={{ type: "spring", stiffness: 200 }}>
                  {card.icon}
                </motion.div>
              </div>
              <p className="text-gray-700 mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Task_see;

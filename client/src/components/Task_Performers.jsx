import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { UserPlus, Briefcase, Search, DollarSign, ArrowLeft } from "react-feather";

const cards = [
  {
    number: "1",
    title: "Register",
    description: "Create your profile and start your journey in minutes.",
    icon: <UserPlus className="text-[#1a1a1a]" />,
  },
  {
    number: "2",
    title: "Choose Domain",
    description: "Select your area of expertise and interests.",
    icon: <Briefcase className="text-[#1a1a1a]" />,
  },
  {
    number: "3",
    title: "Find Work",
    description: "Discover nearby opportunities that fit your skills.",
    icon: <Search className="text-[#1a1a1a]" />,
  },
  {
    number: "4",
    title: "Get Paid",
    description: "Complete tasks and earn securely with instant payout.",
    icon: <DollarSign className="text-[#1a1a1a]" />,
  },
];

function Task_Performers() {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 sm:px-6 md:px-20 bg-[#f3f4f6] py-14 sm:py-20 relative min-h-screen">
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 flex items-center gap-2 bg-black text-white px-3 sm:px-4 py-2 
                  rounded-full text-xs sm:text-sm md:text-base font-semibold hover:bg-green-600 transition duration-300 z-50"
      >
        <ArrowLeft size={16} className="sm:size-18 md:size-20" /> Back
      </button>

      {/* Section Heading */}
      <div className="text-center mb-10 sm:mb-14 mt-12 sm:mt-16">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black font-['Neue Montreal'] leading-snug">
          Find Work Nearby You!
        </h1>
        <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-lg">
          Work When You Want. Earn What You Deserve.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-2xl shadow-md bg-gradient-to-br from-[#e3eafc] to-[#D9EEE3]
                       flex flex-col justify-between p-5 sm:p-6 md:p-8
                       w-full sm:w-[45%] md:w-[22%] h-[200px] sm:h-[250px] md:h-[320px]
                       cursor-pointer hover:shadow-lg transition-all"
          >
            {/* Background Number */}
            <span className="absolute text-[4rem] sm:text-[6rem] md:text-[8rem] font-bold text-black/10 top-6 left-5 select-none leading-none">
              {card.number}
            </span>

            {/* Card Content */}
            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-black font-['Neue Montreal']">
                  {card.title}
                </h2>
                <motion.div
                  className="p-1"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {React.cloneElement(card.icon, {
                    size:
                      window.innerWidth < 640
                        ? 26
                        : window.innerWidth < 1024
                        ? 38
                        : 48,
                  })}
                </motion.div>
              </div>
              <p className="text-gray-700 mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Register Button */}
      <div className="text-center mt-10 sm:mt-14">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdjLQSxhukM9y99iIDBT8p86_ZLZi3gYuxseIC1kK0FbL31ag/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 
                     rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow-md"
        >
          Register
        </a>
      </div>
    </div>
  );
}

export default Task_Performers;

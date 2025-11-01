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
    <div className="w-full px-4 mt-15 sm:px-8 md:px-20 bg-[#f3f4f6] py-14 sm:py-20 relative ">
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 flex items-center gap-2 bg-black text-white px-4 py-2 
                  rounded-full text-sm sm:text-base font-semibold hover:bg-green-600 transition duration-300"
      >
        <ArrowLeft size={18} /> Back
      </button>

      {/* Section Heading */}
      <div className="text-center mb-12 sm:mb-16 mt-10 sm:mt-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black font-['Neue Montreal']">
          Find Work Nearby You!
        </h1>
        <p className="text-gray-600 mt-3 sm:mt-4 text-base sm:text-lg">
          Work When You Want. Earn What You Deserve.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-md 
                       bg-gradient-to-br from-[#e3eafc] to-[#D9EEE3]
                       flex flex-col justify-between p-5 sm:p-6 md:p-8
                       w-[45%] sm:w-[45%] md:w-[22%]
                       h-[220px] sm:h-[260px] md:h-[320px]
                       cursor-pointer -mb-8"
          >
            <span className="absolute text-[5rem] sm:text-[6rem] md:text-[8rem] font-bold text-black/10 top-30 left-5 select-none leading-none">
              {card.number}
            </span>

            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-black font-['Neue Montreal']">
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
                        ? 30
                        : window.innerWidth < 1024
                        ? 40
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
      <div className="text-center -mt-3 sm:mt-14">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdjLQSxhukM9y99iIDBT8p86_ZLZi3gYuxseIC1kK0FbL31ag/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block  -mt-32 bg-green-500 text-white text-[1rem] px-8 py-3 
                     rounded-full hover:bg-black hover:text-white transition-all 
                     duration-300 shadow-md"
        >
          Register
        </a>
      </div>
    </div>
  );
}

export default Task_Performers;

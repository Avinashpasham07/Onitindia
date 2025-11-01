import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Briefcase, Search, DollarSign } from "react-feather";

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
  return (
    <div className="w-full px-4 mt-15 sm:px-8 md:px-20 bg-[#f3f4f6] py-14 sm:py-20">
      {/* Section Heading */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black font-['Neue Montreal']">
          Find Work Nearby You!
        </h1>
        <p className="text-gray-600 mt-3 sm:mt-4 text-base sm:text-lg">
          Work When You Want. Earn What You Deserve.
        </p>
      </div>

      {/* Cards Section */}
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
                       cursor-pointer"
          >
            {/* Background Number */}
            <span className="absolute text-[5rem] sm:text-[6rem] md:text-[8rem] font-bold text-black/10 top-30 left-5 select-none leading-none">
              {card.number}
            </span>

            {/* Card Content */}
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

      {/* Subtext */}
      <div className="text-center mt-10 sm:mt-14">
        <p className="text-base sm:text-lg text-gray-700 italic">
          “Be your own boss. Start earning from the people around you.”
        </p>
      </div>
    </div>
  );
}

export default Task_Performers;

import React from "react";
import { motion } from "framer-motion";

const knowAboutUsCards = [
  {
    seekerQ: "I need someone to fix my leaking tap quickly.",
    performerA: "I’m a local plumber who can help you right away.",
    seekerAvatar: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
    performerAvatar: "https://cdn-icons-png.flaticon.com/512/4333/4333629.png", // plumber avatar
  },
  {
    seekerQ: "I’m shifting apartments and need help with packing.",
    performerA: "I can assist with packing and moving your stuff safely.",
    seekerAvatar: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
    performerAvatar: "https://cdn-icons-png.flaticon.com/512/4333/4333629.png", // mover avatar
  },
  {
    seekerQ: "Can someone help me set up my new smart TV?",
    performerA: "I’ve experience with installing smart devices — I can help!",
    seekerAvatar: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
    performerAvatar: "https://cdn-icons-png.flaticon.com/512/4333/4333629.png", // tech installer
  },
  {
    seekerQ: "I’m busy with work, and my plants need daily watering.",
    performerA: "I live nearby and can take care of your plants every day.",
    seekerAvatar: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
    performerAvatar: "https://cdn-icons-png.flaticon.com/512/4333/4333629.png", // gardener
  },
  {
    seekerQ: "I need a tutor to help my kid with math homework.",
    performerA: "I’m a student teacher and can teach math after school hours.",
    seekerAvatar: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
    performerAvatar: "https://cdn-icons-png.flaticon.com/512/4333/4333629.png", // teacher
  },
  {
    seekerQ: "I have guests coming — can anyone clean my house today?",
    performerA: "I offer same-day house cleaning services in your area.",
    seekerAvatar: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
    performerAvatar: "https://cdn-icons-png.flaticon.com/512/4333/4333629.png", // cleaner
  },
];

const KnowUserSection = () => {
  return (
    <div className="w-full h-screen bg-[#f3f4f6] flex flex-col justify-center items-center px-4">
      {/* Cards container */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-3 
          gap-6 
          w-full 
          max-w-6xl 
          px-4 
          overflow-y-auto
          lg:overflow-hidden
        "
      >
        {knowAboutUsCards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-gradient-to-b from-indigo-100 mb-5 to-blue-200 rounded-3xl p-6 flex flex-col gap-4 items-center"
          >
            {/* Task Seeker */}
            <div className="flex items-start w-full">
              <img
                src={card.seekerAvatar}
                alt="Task Seeker"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="bg-white text-black rounded-2xl px-4 py-2 w-full">
                <p className="font-semibold text-sm mb-1">Task Seeker</p>
                <p>{card.seekerQ}</p>
              </div>
            </div>

            {/* Task Performer */}
            <div className="flex items-start w-full justify-end">
              <div className="bg-green-400 text-white rounded-2xl px-4 py-2 w-full">
                <p className="font-semibold text-sm mb-1">Task Performer</p>
                <p>{card.performerA}</p>
              </div>
              <img
                src={card.performerAvatar}
                alt="Task Performer"
                className="w-10 h-10 rounded-full ml-3"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Flaticon Credit */}
      
    </div>
  );
};

export default KnowUserSection;

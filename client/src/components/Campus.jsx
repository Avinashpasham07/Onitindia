import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  Zap,
  FileText,
  Grid,
  Search,
  Code,
  CheckCircle,
  Users,
  BarChart2,
  ArrowRight,
} from "react-feather";
import { Link } from "react-router-dom";

const Campus = () => {
  // Theme Configuration
  const theme = {
    primary: "#2F7A46", // ONIT Green
    secondary: "#10B981", // Lighter Green for accents
    bg: "#f3f4f6", // Your requested BG
    textMain: "#1F2937",
    textSub: "#4B5563",
  };

  const audienceList = [
    {
      id: 1,
      label: "Students",
      icon: <BookOpen size={32} />,
      color: "bg-green-100 text-green-700",
    },
    {
      id: 2,
      label: "Startups",
      icon: <BarChart2 size={32} />,
      color: "bg-amber-100 text-amber-600",
    }, // Rocket/Energy vibe
    {
      id: 3,
      label: "Professionals",
      icon: <Briefcase size={32} />,
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: 4,
      label: "Freelancers",
      icon: <Users size={32} />,
      color: "bg-orange-100 text-orange-700",
    },
  ];

  const taskList = [
    {
      id: 1,
      label: "PPTs, Notes, Forms",
      desc: "Academic & Corp",
      icon: <FileText size={24} />,
      color: "text-green-600 bg-green-50",
    },
    {
      id: 2,
      label: "Excel / Sheets",
      desc: "Data Entry & Analysis",
      icon: <Grid size={24} />,
      color: "text-green-600 bg-green-50",
    },
    {
      id: 3,
      label: "Research & Ideas",
      desc: "Market & Academic",
      icon: <Search size={24} />,
      color: "text-green-600 bg-green-50",
    },
    {
      id: 4,
      label: "Web Dev & AI",
      desc: "Tech Solutions",
      icon: <Code size={24} />,
      color: "text-green-600 bg-green-50",
    },
  ];

  // Animation Variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 12 },
    },
  };

  return (
    <section className="relative w-full py-24 overflow-hidden bg-[#f3f4f6]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            <span className=" text-black">
              On<span className="text-green-500 font-bold">IT</span>{" "}
              <span className="text-gray-800">CAMPUS</span>
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-8">
            The ultimate hub connecting{" "}
            <span className="text-green-600 font-semibold">talent</span> with{" "}
            <span className="text-green-600 font-semibold">opportunity</span>.
            Post a task, find help, and get things done.
          </p>
        </motion.div>

        {/* ================= SECTION 1: WHO IS IT FOR? (Floating Circles) ================= */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 mb-24 relative"
        >
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-green-300 to-transparent -translate-y-8 -z-10"></div>

          {audienceList.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVars}
              className="flex flex-col items-center group cursor-default"
            >
              {/* Icon Circle */}
              <motion.div
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative mb-4 md:mb-6"
              >
                <div
                  className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-[4px] md:border-[6px] border-white z-10 relative group-hover:shadow-[0_20px_40px_rgb(47,122,70,0.15)] transition-all duration-300`}
                >
                  <div
                    className={`p-3 md:p-4 rounded-full ${item.color} bg-opacity-20`}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Decorative Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-green-500 scale-110 -z-0 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
              </motion.div>

              {/* Text */}
              <h3 className="text-base md:text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors">
                {item.label}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* --- MODIFIED LINK TO SCROLL TO TOP SECTION --- */}
        <Link
          to="/campus-detail#campus"
          onClick={() => window.scrollTo(0, 0)}
          className="flex justify-center" // Centering wrapper
        >
          <motion.button className="inline-flex items-center px-8 py-3 rounded-full mb-12 bg-green-600 text-white font-bold shadow-lg shadow-green-100 hover:bg-black hover:shadow-zinc-100 hover:text-white transition-all">
            Know More <ArrowRight className="ml-2" size={20} />
          </motion.button>
        </Link>

        {/* ================= SECTION 2: TASKS (Glass Cards) ================= */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              Any task you can post
            </h3>
            <p className="text-gray-500">
              From academic help to professional projects
            </p>
          </motion.div>

          <motion.div
            variants={containerVars}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          >
            {taskList.map((task) => (
              <motion.div
                key={task.id}
                variants={itemVars}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-green-100 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
              >
                {/* Top Green Accent Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Icon */}
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-3 md:mb-4 ${task.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}
                >
                  {task.icon}
                </div>

                {/* Content */}
                <h4 className="text-base md:text-lg font-bold text-gray-800 mb-1 group-hover:text-green-700 transition-colors">
                  {task.label}
                </h4>
                <p className="text-xs md:text-sm text-gray-400 font-medium">
                  {task.desc}
                </p>

                {/* Checkmark (Visual decoration) */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <CheckCircle size={16} className="text-green-500 md:w-[18px] md:h-[18px]" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Campus;
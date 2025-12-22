import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Search,
    Briefcase,
    Share2,
    TrendingUp,
    DollarSign,
    ChevronLeft,
    ChevronRight,
} from "react-feather";
import workImage from "../assets/work.png";
import portfolioImage from "../assets/protifilo.png";
import connectionImage from "../assets/connections.png";
import balanceImage from "../assets/studies.png";
import paymentImage from "../assets/money.png";

const challenges = [
    {
        id: "paid-work",
        icon: <Search className="w-5 h-5" />,
        title: "Finding Paid Work",
        heading: "Secure flexible, paid work that fits your schedule",
        desc: "Stop compromising your grades for a paycheck. Find legitimate, short-term academic and professional tasks that respect your timetable.",
        image: workImage
    },
    {
        id: "portfolios",
        icon: <Briefcase className="w-5 h-5" />,
        title: "Building Portfolios",
        heading: "Build a portfolio that employers actually trust",
        desc: "Move beyond theoretical assignments. Gain verifiable experience on real-world projects that prove your skills to future employers.",
        image: portfolioImage
    },
    {
        id: "connections",
        icon: <Share2 className="w-5 h-5" />,
        title: "Limited Connections",
        heading: "Connect directly with industry professionals",
        desc: "Bridge the gap between campus and corporate. Network with startups, alumni, and mentors through active collaboration.",
        image: connectionImage
    },
    {
        id: "balance",
        icon: <TrendingUp className="w-5 h-5" />,
        title: "Work-Study Balance",
        heading: "Work that adapts to your exam schedule",
        desc: "Take on tasks when you're free, pause when you're busy. Complete flexibility designated for the student lifestyle.",
        image: balanceImage
    },
    {
        id: "payment",
        icon: <DollarSign className="w-5 h-5" />,
        title: "Payment Security",
        heading: "Guaranteed payments, every single time",
        desc: "Never worry about getting ghosted. OnIt holds payments in escrow so you get paid instantly upon successful completion.",
        image: paymentImage
    }
];

const StudentChallenge = () => {
    const [activeTab, setActiveTab] = useState("paid-work");

    return (
        <section className="bg-[#f3f4f6] w-full md:min-h-screen flex flex-col justify-center py-4 md:py-16 px-4 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full">

                {/* Heading */}
                <div className="text-center mb-6 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900">
                        Challenges for <span className="text-green-600">Students</span>
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mt-3">
                        Real problems require real solutions. Scroll horizontally to explore.
                    </p>
                </div>

                {/* Horizontal Scrolling Container */}
                <div className="relative group/scroll">
                    {/* Left Scroll Button */}
                    <button
                        onClick={() => {
                            const container = document.getElementById('cards-container');
                            if (container) container.scrollBy({ left: -350, behavior: 'smooth' });
                        }}
                        className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-700 hover:bg-white hover:text-green-600 hover:scale-110 transition-all duration-300 opacity-100 md:opacity-0 md:group-hover/scroll:opacity-100 translate-x-0 md:translate-x-4 md:group-hover/scroll:translate-x-0 cursor-pointer"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                    </button>

                    {/* Right Scroll Button */}
                    <button
                        onClick={() => {
                            const container = document.getElementById('cards-container');
                            if (container) container.scrollBy({ left: 350, behavior: 'smooth' });
                        }}
                        className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-700 hover:bg-white hover:text-green-600 hover:scale-110 transition-all duration-300 opacity-100 md:opacity-0 md:group-hover/scroll:opacity-100 translate-x-0 md:-translate-x-4 md:group-hover/scroll:translate-x-0 cursor-pointer"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                    </button>

                    <div id="cards-container" className="overflow-x-auto overflow-y-hidden scrollbar-hide px-2 sm:px-4 md:px-12 lg:px-24 py-4 scroll-smooth">
                        <div className="flex gap-4 sm:gap-6 pb-8 pt-4">
                            {challenges.map((challenge, index) => {
                                // Responsive width and varied heights for visual interest
                                const width = 'w-[220px] sm:w-[350px] md:w-[450px]';
                                const heights = [
                                    'h-[300px] sm:h-[420px] md:h-[480px]',  // Medium
                                    'h-[240px] sm:h-[320px] md:h-[380px]',  // Small
                                    'h-[300px] sm:h-[420px] md:h-[480px]',  // Tall
                                    'h-[240px] sm:h-[320px] md:h-[380px]',  // Small
                                    'h-[300px] sm:h-[420px] md:h-[480px]'   // Medium
                                ];
                                const height = heights[index % heights.length];

                                return (
                                    <motion.div
                                        key={challenge.id}
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        whileHover={{
                                            y: -12,
                                            scale: 1.03,
                                            transition: { duration: 0.4, ease: "easeOut" }
                                        }}
                                        onClick={() => setActiveTab(challenge.id)}
                                        className={`
                                            relative ${width} ${height} flex-shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden 
                                            shadow-xl hover:shadow-2xl
                                            cursor-pointer group
                                            transition-shadow duration-500
                                        `}
                                    >
                                        {/* Background Image */}
                                        <div className="absolute inset-0">
                                            <motion.img
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.6, ease: "easeOut" }}
                                                src={challenge.image}
                                                alt={challenge.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                                        </div>

                                        {/* Content Card */}
                                        <div className="absolute inset-0 p-3 sm:p-5 md:p-6 flex flex-col justify-end">
                                            {/* Icon Badge */}
                                            <motion.div
                                                transition={{ duration: 0.6, ease: "easeOut" }}
                                                className="mb-2 sm:mb-4 inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-2xl bg-gradient-to-br from-green-400 to-green-600 shadow-2xl"
                                            >
                                                <div className="text-white scale-75 sm:scale-90 md:scale-100">
                                                    {challenge.icon}
                                                </div>
                                            </motion.div>

                                            {/* Title Badge */}
                                            <div className="inline-flex items-center gap-2 px-2.5 py-1 sm:px-4 sm:py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/30 mb-2 sm:mb-4 w-fit">
                                                <span className="text-[9px] sm:text-xs font-bold text-white uppercase tracking-wider">
                                                    {challenge.title}
                                                </span>
                                            </div>

                                            {/* Text Content */}
                                            <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-black text-white mb-1.5 sm:mb-3 leading-tight drop-shadow-2xl">
                                                {challenge.heading}
                                            </h3>
                                            <p className="text-white/95 text-[10px] sm:text-sm leading-relaxed mb-2 sm:mb-5 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                                                {challenge.desc}
                                            </p>

                                            {/* CTA Button - Always Visible */}
                                            <div className="flex items-center gap-2 text-white font-bold text-xs sm:text-sm opacity-100 group-hover:opacity-100">
                                                <motion.span
                                                    whileHover={{ y: -2 }}
                                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                                >
                                                    Explore Solution
                                                </motion.span>
                                                <motion.svg
                                                    animate={{ x: [0, 5, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                                    className="w-4 h-4 sm:w-5 sm:h-5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </motion.svg>
                                            </div>
                                        </div>

                                        {/* Border Glow */}
                                        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent group-hover:border-green-400/70 transition-all duration-400" />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Scroll Indicator Dots */}
                    <div className="flex justify-center mt-4 sm:mt-6 gap-1.5 sm:gap-2">
                        {challenges.map((_, index) => (
                            <div
                                key={index}
                                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-300"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Custom Scrollbar Styles */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default StudentChallenge;

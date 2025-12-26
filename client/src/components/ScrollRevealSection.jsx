import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Briefcase,
    Zap,
    Shield,
    Users,
    CheckCircle
} from "lucide-react";
import realTasksImage from "../assets/realtask.png";

import verifiedImage from "../assets/securepayment.png";
import inter from "../assets/interaction.png";

// Content adapted for the "OnIT Campus" intro, but in the requested tabbed format
const features = [
    {
        id: "real-tasks",
        icon: <Zap className="w-5 h-5" />,
        title: "Real Tasks & Internships",
        heading: "Real Tasks & Internships",
        desc: "Students complete short-term tasks and find internship roles across various domains.",
        image: realTasksImage
    },
    {
        id: "industry",
        icon: <Users className="w-5 h-5" />,
        title: "Industry Connection",
        heading: "Industry Connection",
        desc: "Startups, freelancers, and professionals post their needs directly to the campus talent pool.",
        image: inter
    },
    {
        id: "verified",
        icon: <Shield className="w-5 h-5" />,
        title: "Seamless Process",
        heading: "Seamless Process",
        desc: "Simple task briefs, clear budget expectations, and realistic timelines for every project.",
        image: verifiedImage
    }
];

const ScrollRevealSection = () => {
    const [activeTab, setActiveTab] = useState("real-tasks");
    const activeContent = features.find(c => c.id === activeTab) || features[0];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((current) => {
                const currentIndex = features.findIndex(c => c.id === current);
                const nextIndex = (currentIndex + 1) % features.length;
                return features[nextIndex].id;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [activeTab]);

    return (
        <section id="introduction" className="bg-[#f3f4f6] mb-5 min-h-[500px] sm:min-h-screen flex flex-col justify-center py-8 sm:py-10 px-4 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full">

                {/* Section Heading */}
                <div className="text-center mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 mb-2 sm:mb-3 leading-tight">
                        Introducing <span className="text-green-600">OnIT Campus</span>
                    </h2>
                    <p className="text-xs sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
                        Learn-by-doing. Earn-as-you-grow.
                    </p>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-nowrap overflow-x-auto sm:overflow-visible justify-start sm:justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-1 pb-2 sm:pb-0 scrollbar-hide">
                    {features.map((feature) => (
                        <button
                            key={feature.id}
                            onClick={() => setActiveTab(feature.id)}
                            className={`
                                flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-[5px] sm:text-xs md:text-sm font-bold tracking-wide transition-all duration-300 border whitespace-nowrap flex-shrink-0
                                ${activeTab === feature.id
                                    ? "bg-green-600 text-white border-green-600 shadow-md scale-105"
                                    : "bg-white text-slate-500 border-slate-200 hover:bg-green-50 hover:text-green-700 hover:border-green-200"}
                            `}
                        >
                            <span className="scale-75 sm:scale-80">{feature.icon}</span>
                            <span className="uppercase">{feature.title}</span>
                        </button>
                    ))}
                </div>

                {/* Content Display - Split Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 mb-6 gap-0 md:gap-0 items-stretch">

                    {/* Left Column: Text Content */}
                    <div className="bg-white rounded-t-2xl rounded-b-none md:rounded-3xl md:rounded-r-none p-6 md:p-12 shadow-xl border border-slate-100 flex flex-col justify-center relative overflow-hidden group min-h-[300px]">
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                            <motion.div
                                key={activeContent.id + "-bg-icon"}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                {React.cloneElement(activeContent.icon, { size: 120 })}
                            </motion.div>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeContent.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="z-10"
                            >
                                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-green-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-green-600 shadow-inner">
                                    {React.cloneElement(activeContent.icon, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
                                </div>

                                <h3 className="text-lg sm:text-2xl md:text-3xl font-black text-slate-900 mb-2 sm:mb-4 leading-tight">
                                    {activeContent.heading}
                                </h3>

                                <p className="text-slate-600 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8">
                                    {activeContent.desc}
                                </p>

                                <button className="group/btn flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-slate-900 text-white rounded-lg sm:rounded-xl font-bold hover:bg-green-600 transition-all duration-300 w-fit text-xs sm:text-sm">
                                    <span>Learn more</span>
                                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative rounded-b-2xl rounded-t-none md:rounded-3xl md:rounded-l-none overflow-hidden h-[250px] sm:h-[350px] md:h-auto shadow-2xl bg-slate-900">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeContent.id + "-img"}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <img
                                    src={activeContent.image}
                                    alt={activeContent.title}
                                    className="w-full h-full object-cover opacity-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ScrollRevealSection;

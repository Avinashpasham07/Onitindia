import React from 'react';
import p1 from '../assets/p1.jpeg';

const Partner = () => {
    return (
        <section className="py-20 bg-zinc-100 flex flex-col justify-center items-center px-4">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-zinc-800 mb-12">
                Our <span className="text-black">Partners</span>
            </h2>

            {/* Partner Item */}
            <div className="flex flex-col items-center group cursor-pointer">
                {/* Logo */}
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden mb-4 transition-transform duration-300 group-hover:scale-110 border border-zinc-200">
                    <img
                        src={p1}
                        alt="TechSpace Solutions"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Company Name */}
                <h3 className="text-sm md:text-base font-semibold text-zinc-600 tracking-wide text-center group-hover:text-green-600 transition-colors">
                    TECH VISTAR
                </h3>
            </div>
        </section>
    );
};

export default Partner;

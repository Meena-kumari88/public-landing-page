import React from "react";

export default function PublicHero({landingPage}: any) {



    return (
        <section className="relative w-full bg-[#95C3FB] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-12 pb-32 md:pb-40 relative z-10">
                {/* Top bar */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-lg sm:text-xl md:text-3xl font-bold text-black">
                        EventEase
                    </h1>
                </div>

                {/* Center content */}
                <div className="text-center max-w-2xl mx-auto relative">
                    {/*image Above heading */}
                    <img
                        src="/landing1/event3.png"
                        alt="above-heading"
                        className="mx-auto mb-4 sm:mb-6 w-14 sm:w-20 md:w-28"
                    />

                    {/* Heading */}
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#020816] mb-3 sm:mb-4">
                        {landingPage?.title || "Plan Your Perfect Event"}
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 sm:mb-10 leading-relaxed">
                        {landingPage?.tagLine || "Transform your special moments into extraordinary" + <br className="hidden sm:block" /> +
                            "memories with our expert event planning services"}
                    </p>
                </div>
            </div>

            {/*2nd & 3rd Images */}
            <img
                src="/landing1/event1.png"
                alt="left-mid"
                className="absolute w-12 sm:w-16 md:w-20 lg:w-28 
                   top-[40%] sm:top-[35%] md:top-[32%] 
                   left-[5%] sm:left-[8%] md:left-[12%]"
            />
            <img
                src="/landing1/event2.png"
                alt="right-mid"
                className="absolute w-12 sm:w-16 md:w-20 lg:w-28 
                   top-[40%] sm:top-[35%] md:top-[32%] 
                   right-[5%] sm:right-[8%] md:right-[12%]"
            />

            {/* 4th & 5th Images */}
            <img
                src="/landing1/event4.png"
                alt="left-lower"
                className="absolute w-12 sm:w-16 md:w-20 lg:w-28 
                   top-[65%] sm:top-[60%] md:top-[55%] 
                   left-[14%] sm:left-[18%] md:left-[24%]"
            />
            <img
                src="/landing1/event5.png"
                alt="right-lower"
                className="absolute w-12 sm:w-16 md:w-20 lg:w-28 
                   top-[65%] sm:top-[60%] md:top-[55%] 
                   right-[14%] sm:right-[18%] md:right-[24%]"
            />

            {/* Bottom arc */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                <svg
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-[70px] sm:h-[90px] md:h-[100px]"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 C720,320 720,320 1440,0 L1440,320 L0,320 Z"
                        fill="#ffffff"
                    />
                </svg>
            </div>
        </section>
    );
}

export default function ServicesSection({landingPage}: any) {
    const whyUsItems = [
  landingPage?.whyUs1,
  landingPage?.whyUs2,
  landingPage?.whyUs3
];
const hasAnyWhyUs = whyUsItems.some(item => item && item.trim() !== "");

const testimonialItems = [
  landingPage?.testimonial1,
  landingPage?.testimonial2,
  landingPage?.testimonial3
];
const hasAnyTestimonial = testimonialItems.some(item => item && item.trim() !== "");

    return (
        <section className="relative w-full bg-white overflow-hidden">
            {/* Our Services */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 pb-0 relative z-0">
                {/* Top Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl mb-2 font-semibold text-[#171717]">
                        Our Services 
                    </h2>
                    <p className="text-[#464646] md:text-lg">
                        Explore our comprehensive event planning solutions 
                    </p>
                </div>

                {/* 3 Service Cards with Images */}
                <div className="relative flex flex-col md:flex-row justify-center items-end gap-6 md:gap-12">
                    {/* Left Tilted */}
                    <div className="relative transform -rotate-6 w-64 h-80 rounded-xl overflow-hidden mb-0">
                        <img src="/landing1/1.jpg" alt="Wedding" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-start p-4 bg-black/20">
                            <div className="text-left text-white">
                                <h3 className="text-md font-semibold">Weddings</h3>
                                <p className="text-xs">Your dream wedding, perfectly planned</p>
                            </div>
                        </div>
                    </div>

                    {/* Middle */}
                    <div className="relative w-64 h-80 rounded-xl overflow-hidden mb-4">
                        <img src="/landing1/2.jpg" alt="Corporate" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-start justify-center p-4 bg-black/20">
                            <div className="text-center text-white">
                                <h3 className="text-md font-semibold">Corporate</h3>
                                <p className="text-xs">Professional business events</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Tilted */}
                    <div className="relative transform rotate-6 w-64 h-80 rounded-xl overflow-hidden mb-0">
                        <img src="/landing1/3.jpg" alt="Social" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-start justify-end p-4 bg-black/20">
                            <div className="text-right text-white">
                                <h3 className="text-md font-semibold">Social</h3>
                                <p className="text-xs">Elegant social gatherings</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Why Choose Us Section with Reversed Arc at Top */}
            <div className="relative bg-[#fff0f5]  mt-4 z-10">
                {/* Reversed Arc ON TOP of images */}
                <svg
                    className="absolute -top-[100px] left-0 w-full h-[100px] rotate-180 z-20"
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path d="M0,64 C720,320 720,320 1440,64 L1440,0 L0,0 Z" fill="#fff0f5" />
                </svg>

                {hasAnyWhyUs && (
    <div className="relative z-30 max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-20">
        <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-semibold text-[#171717]">
                Why Choose Us
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

            {/* Box 1 */}
            {(landingPage?.whyUs1) && (
                <div className="bg-[#F7F7F7] p-8 rounded-2xl shadow-lg">
                    <h3 className="text-lg font-semibold mb-3">Expert Planning</h3>
                    <p className="text-[#5d5d5d] text-sm md:text-base">
                        {landingPage?.whyUs1}
                    </p>
                </div>
            )}

            {/* Box 2 */}
            {(landingPage?.whyUs2) && (
                <div className="bg-[#F7F7F7] p-8 rounded-2xl shadow-lg">
                    <h3 className="text-lg font-semibold mb-3">Personalized Service</h3>
                    <p className="text-[#5d5d5d] text-sm md:text-base">
                        {landingPage?.whyUs2}
                    </p>
                </div>
            )}

            {/* Box 3 */}
            {(landingPage?.whyUs3) && (
                <div className="bg-[#F7F7F7] p-8 rounded-2xl shadow-lg">
                    <h3 className="text-lg font-semibold mb-3">Transparent Pricing</h3>
                    <p className="text-[#5d5d5d] text-sm md:text-base">
                        {landingPage?.whyUs3}
                    </p>
                </div>
            )}

        </div>
    </div>
)}

               {hasAnyTestimonial && (
    <div className="relative z-30 max-w-7xl bg-[#E4DBFF] mx-auto px-4 md:px-8 pt-10 pb-10">
        
        <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-semibold text-[#171717]">
                What Our Clients Say
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

            {/* Testimonial 1 */}
            {landingPage?.testimonial1 && (
                <div className="bg-[#F7F7F7] p-8 rounded-2xl shadow-lg">
                    <p className="text-[#5d5d5d] text-sm md:text-base">
                        {landingPage?.testimonial1}
                    </p>
                    <p className=" text-left mt-4">- Client</p>
                </div>
            )}

            {/* Testimonial 2 */}
            {landingPage?.testimonial2 && (
                <div className="bg-[#F7F7F7] p-8 rounded-2xl shadow-lg">
                    <p className="text-[#5d5d5d] text-sm md:text-base">
                        {landingPage?.testimonial2}
                    </p>
                    <p className=" text-left mt-4">- Client</p>
                </div>
            )}

            {/* Testimonial 3 */}
            {landingPage?.testimonial3 && (
                <div className="bg-[#F7F7F7] p-8 rounded-2xl shadow-lg">
                    <p className="text-[#5d5d5d] text-sm md:text-base">
                        {landingPage?.testimonial3}
                    </p>
                    <p className=" text-left mt-4">- Client</p>
                </div>
            )}

        </div>

    </div>
)}

                {/* Spacer to show main background color */}
                <div className="h-10 md:h-10"></div>
            </div>
        </section>
    );
}

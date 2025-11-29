import { useState } from "react";
import Pagination from "./Pagination";
import { FaLink } from "react-icons/fa";


type Item = {
    title: string;
    desc: string;
    image: string;
    price?: string;
};
export default function EventItemSelector({landingPage}: any) {
    const data = landingPage;
    console.log("EventItemSelector landingPage:", data);
    // Item data
    const allItems: Item[] = [
        {
            title: "Luxury Banquet Chair",
            desc: "Ergonomic cushioned chair, ideal for weddings & conferences.",
            image: "/itemlist/furniture.png",
            price: "₹2000",
        },
        {
            title: "Studio Lighting Set",
            desc: "Complete lighting kit with 3 softboxes and stands",
            image: "/itemlist/studio.png",
            price: "₹2000",
        },
        {
            title: "Catering",
            desc: "Delight your guests with a lavish buffet experience.",
            image: "/itemlist/catering1.png",
            price: "₹2000",
        },

        {
            title: "Luxury Banquet Chair",
            desc: "Ergonomic cushioned chair, ideal for weddings & conferences.",
            image: "/itemlist/furniture.png",
            price: "₹2000",
        },
        {
            title: "Studio Lighting Set",
            desc: "Complete lighting kit with 3 softboxes and stands",
            image: "/itemlist/studio.png",
            price: "₹2000",
        },
        {
            title: "Catering",
            desc: "Delight your guests with a lavish buffet experience.",
            image: "/itemlist/catering1.png",
            price: "₹2000",
        },
        {
            title: "Luxury Banquet Chair",
            desc: "Ergonomic cushioned chair, ideal for weddings & conferences.",
            image: "/itemlist/furniture.png",
            price: "₹2000",
        },
        {
            title: "Studio Lighting Set",
            desc: "Complete lighting kit with 3 softboxes and stands",
            image: "/itemlist/studio.png",
            price: "₹2000",
        },
        {
            title: "Catering",
            desc: "Delight your guests with a lavish buffet experience.",
            image: "/itemlist/catering1.png",
            price: "₹2000",
        },
        {
            title: "Luxury Banquet Chair",
            desc: "Ergonomic cushioned chair, ideal for weddings & conferences.",
            image: "/itemlist/furniture.png",
            price: "₹2000",
        },
        {
            title: "Studio Lighting Set",
            desc: "Complete lighting kit with 3 softboxes and stands",
            image: "/itemlist/studio.png",
            price: "₹2000",
        },
        {
            title: "Catering",
            desc: "Delight your guests with a lavish buffet experience.",
            image: "/itemlist/catering1.png",
            price: "₹2000",
        },
    ];
    // state for each item's quantity
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

    const handleEditClick = (index: number) => {
        setQuantities((prev) => ({
            ...prev,
            [index]: 1, // start at 1 when "Edit" is clicked
        }));
    };

    const handleIncrease = (index: number) => {
        setQuantities((prev) => ({
            ...prev,
            [index]: (prev[index] || 1) + 1,
        }));
    };

    const handleDecrease = (index: number) => {
        setQuantities((prev) => {
            const newQty = (prev[index] || 1) - 1;
            if (newQty <= 0 || newQty === 1) {
                // back to "Edit" mode
                const { [index]: _, ...rest } = prev;
                return rest;
            }
            return {
                ...prev,
                [index]: newQty,
            };
        });
    };

    // pagination
    const pageSizeOptions = [3, 6, 12];
    const [itemsPerPage, setItemsPerPage] = useState(pageSizeOptions[2]); // default 12
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(allItems.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    const paginatedItems = allItems.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <section className="bg-white px-4 md:px-8 lg:px-16 py-10">
            {/* Form Section */}
            <div className="max-w-[76rem] mx-auto">
                <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-[#171717]">
                    Select items for event
                </h2>

                <form className="space-y-5">
                    {/* Name Input */}
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-1 text-sm font-medium text-[#171717]">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Name"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {/* Contact Input */}
                    <div className="flex flex-col">
                        <label htmlFor="contact" className="mb-1 text-sm font-medium text-[#171717]">
                            Contact Number / Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="contact"
                            type="text"
                            placeholder="Number or Email"
                            required
                            pattern="^([0-9]{10}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$"
                            title="Enter a valid 10-digit phone number or email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Event Name Input */}
                    <div className="flex flex-col">
                        <label htmlFor="event" className="mb-1 text-sm font-medium text-[#171717]">
                            Event Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="event"
                            type="text"
                            placeholder="Event"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {/* Event Date */}
                    <div className="flex flex-col">
                        <label htmlFor="eventDate" className="mb-1 text-sm font-medium text-[#171717]">
                            Event Date <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="eventDate"
                            type="date"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {/* Event location optional section */}
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-xl font-semibold mb-2 text-[#171717]">
                            Event Location (optional)
                        </h2>

                        {/* Venue */}
                        <div className="flex flex-col">
                            <label htmlFor="venue" className="mb-1 text-sm font-medium text-[#171717]">
                                Venue
                            </label>
                            <input
                                id="venue"
                                type="text"
                                placeholder="venue name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* City & Pin Code */}
                        <div className="flex flex-col md:flex-row md:space-x-4 gap-4">
                            {/* City */}
                            <div className="flex-1 flex flex-col">
                                <label htmlFor="city" className="mb-1 text-sm font-medium text-[#171717]">
                                    City
                                </label>
                                <input
                                    id="city"
                                    type="text"
                                    placeholder="city name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Pin Code */}
                            <div className="flex-1 flex flex-col">
                                <label htmlFor="pincode" className="mb-1 text-sm font-medium text-[#171717]">
                                    Pin Code
                                </label>
                                <input
                                    id="pincode"
                                    type="text"
                                    placeholder="pin code"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Google Map Link */}
                        <div className="flex flex-col relative">
                            <label htmlFor="map" className="mb-1 text-sm font-medium text-[#171717]">
                                Google Map Link
                            </label>
                            <div className="relative w-full">
                                <input
                                    id="map"
                                    type="text"
                                    placeholder="Add link here"
                                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <FaLink className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>

                    </div>

                </form>
            </div>

            {/* Items List Section */}
            <div className="max-w-[76rem] mx-auto mt-12">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
                    <h3 className="text-2xl md:text-4xl font-semibold text-[#171717]">
                        items list for event
                    </h3>
                    <button
                        type="submit"
                        className="bg-[#2827AA] text-white px-10 py-2 rounded-md shadow-md  transition"
                    >
                        Request for Quotation
                    </button>
                </div>

                {/* Search Bar */}
                <div className="relative w-full">
                    {/* Search Icon */}
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-[#8885AC]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1011.25 3a7.5 7.5 0 005.4 13.65z"
                            />
                        </svg>
                    </div>

                    {/* Input Field */}
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-12 pr-4 py-3 border text-[#8885AC] border-[#8885AC] rounded-full focus:outline-none focus:ring-2"
                    />
                </div>


                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6 text-sm">
                    {[
                        "All Categories",
                        "Furniture & Seating",
                        "catering",
                        "Furniture & Seating",
                        "catering",
                    ].map((tag, index) => (
                        <span
                            key={index}
                            className="bg-white text-[#5E5E5E] text-sm px-4 py-2 rounded-full border border-gray-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="p-10 space-y-6 bg-white ">
                {/* Items Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {paginatedItems.map((item, index) => {
                        const qty = quantities[index] || 0;
                        const isEditing = qty > 0;

                        return (
                            <div
                                key={index}
                                className="rounded-xl p-[10px] shadow-md h-[240px] lg:h-[200px]"
                                style={{
                                    background: "linear-gradient(to right, #95C3FB 20%, white 40%)",
                                }}
                            >
                                <div className="flex w-full h-full bg-white rounded-xl overflow-hidden">
                                    {/* Image */}
                                    <div className="w-[35%] flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Right content */}
                                    <div className="flex flex-col flex-1 px-4 py-3 justify-between">
                                        {/* Title + Delete */}
                                        <div>
                                            <div className="flex justify-between items-start gap-2 mb-1">
                                                <h2 className="text-base sm:text-md font-semibold text-gray-900 leading-snug">
                                                    {item.title}
                                                </h2>
                                                
                                            </div>

                                            <p className="text-[12px] text-gray-600 line-clamp-3 leading-snug">
                                                {item.desc}
                                            </p>
                                        </div>

                                        {/* Price + Edit Button */}
                                        <div className="flex justify-between items-center gap-3 flex-wrap lg:flex-nowrap">
                                            <span className="text-lg font-bold text-black whitespace-nowrap">
                                                {item.price || "—"}
                                            </span>

                                            {!isEditing ? (
                                                <button
                                                    type="button"
                                                    onClick={() => handleEditClick(index)}
                                                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm"
                                                >
                                                    Add
                                                </button>
                                            ) : (
                                                <div className="flex items-center bg-blue-500 text-white rounded-full px-4 py-1">
                                                    <button
                                                        type="button"
                                                        onClick={() => handleDecrease(index)}
                                                        className="px-2 text-lg font-bold"
                                                    >
                                                        −
                                                    </button>
                                                    <span className="px-2 text-base">{qty}</span>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleIncrease(index)}
                                                        className="px-2 text-lg font-bold"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* Pagination */}
                <div className="mt-2 flex justify-end">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        itemsPerPage={itemsPerPage}
                        pageSizeOptions={pageSizeOptions}
                        onPageSizeChange={(value) => {
                            setItemsPerPage(value);
                            setCurrentPage(1);
                        }}
                    />
                </div>

            </div>
        </section>
    );
};


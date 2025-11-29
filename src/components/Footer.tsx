
import { FaInstagram, FaTelegramPlane, FaFacebookF } from "react-icons/fa";

export default function Footer({ landingPage, profile }: any) {
    return (
        <footer className="bg-[#F2F6FE] text-[#333] px-4 md:px-8 lg:px-16 py-8 text-sm">
            {/* Top Section: 3 Columns */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                {/* About Us */}
                <div>
                    <h4 className="font-semibold text-base mb-3 text-black">About us</h4>
                    <ul className="space-y-1 text-[#555]">
                        <li>{profile?.description || "Premier event planning"}</li>
                        <li>{landingPage?.yearOfEstablished || "Since 2010"}</li>
                        {/* <li>Award winning service</li> */}
                    </ul>
                </div>

                {/* Follow Us */}
                {(profile?.instagram || profile?.facebook || profile?.telegram) && (
                    <div>
                        <h4 className="font-semibold text-base text-center mb-3 text-black">
                            Follow us
                        </h4>

                        <div className="flex justify-center gap-4 text-3xl">

                            {/* Instagram */}
                            {profile?.instagram && (
                                <a
                                    href={profile.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#333] hover:text-gray-600"
                                >
                                    <FaInstagram />
                                </a>
                            )}

                            {/* Telegram */}
                            {profile?.telegram && (
                                <a
                                    href={profile.telegram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#0088cc] hover:text-blue-500"
                                >
                                    <FaTelegramPlane />
                                </a>
                            )}

                            {/* Facebook */}
                            {profile?.facebook && (
                                <a
                                    href={profile.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#1877F2] hover:text-blue-700"
                                >
                                    <FaFacebookF />
                                </a>
                            )}
                        </div>
                    </div>
                )}


                {/* Contact Info */}
                <div className="flex justify-end">
                    <div className="text-left">
                        <h4 className="font-semibold text-base mb-3 text-black">Contact info</h4>
                        <ul className="space-y-1 text-[#555]">
                            <li>{profile?.phone || "+91 9876543210"}</li>
                            <li>{profile?.email || "info@eventexpert.com"}</li>
                            <li>{profile?.address || "Bangalore, India"}</li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Divider */}
            <div className="border-t border-[#A1A1A1] my-6"></div>

            {/* Bottom Copyright */}
            <div className="text-center text-[#3B3B3B] font-semibold text-sm">
                © 2025 Event Expert. All rights reserved.
            </div>
        </footer>

    );
};



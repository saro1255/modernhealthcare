import { Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-800 text-white py-12 px-6 md:px-16" id="about">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold text-white font-prompt">Modern Health Care</h1>
                    <p className="text-gray-300 text-sm font-prompt">
                        Modern Healthcare delivers trusted medical solutions with decades of expertise, cutting-edge technology, and a commitment to quality care.
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-lg font-semibold font-prompt">Information</span>
                    <a href="about" className="hover:underline text-gray-300 font-prompt">About Us</a>
                    <a href="#terms" className="hover:underline text-gray-300 font-prompt">Terms & Conditions</a>
                    <a href="#privacy" className="hover:underline text-gray-300 font-prompt">Privacy Policy</a>
                </div>

                <div className="flex flex-col gap-4">
                    <span className="text-lg font-semibold font-prompt">Stay Connected</span>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Mail size={16} />
                        <span className="font-prompt">modernhealthcare@gmail.com</span>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center text-sm text-gray-500 font-prompt">
                © 2025 Modern Health Care. All rights reserved.
            </div>
        </footer>
    );
}
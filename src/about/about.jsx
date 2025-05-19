export default function ContactAbout() {
    return (
        <div className="w-full bg-white text-emerald-900 py-16 px-6 md:px-20" id="about">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-prata mb-4 text-emerald-800">About Us</h2>
                    <p className="font-inter text-md leading-relaxed">
                        At <span className="font-semibold">Modern Skincare</span>, we believe in enhancing your natural beauty
                        with science-backed treatments and products. Our expert dermatologists in Lahore and Islamabad
                        provide personalized care with a commitment to excellence.
                    </p>
                    <ul className="mt-6 space-y-2 text-sm font-inter text-emerald-700">
                        <li>✓ Trusted dermatologists</li>
                        <li>✓ Advanced aesthetic treatments</li>
                        <li>✓ Premium skincare products</li>
                        <li>✓ Personalized consultation & care</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-3xl font-prata mb-4 text-emerald-800">Contact Us</h2>
                    <form className="flex flex-col gap-4 font-inter">
                        <input type="text" placeholder="Your Name" className="border border-emerald-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                        <input type="email" placeholder="Your Email" className="border border-emerald-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                        <textarea placeholder="Your Message" rows="4" className="border border-emerald-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-400" ></textarea>
                        <button type="submit" className="bg-emerald-700 text-white py-2 rounded-lg hover:bg-emerald-800 transition" >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
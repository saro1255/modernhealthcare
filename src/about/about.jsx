export default function ContactAbout() {
    return (
        <div className="w-full bg-white text-emerald-900 py-16 px-6 md:px-20" id="about">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-prata mb-4 text-emerald-800">About Us</h2>
                    <p className="font-inter text-md text-justify">
                        <span className="font-semibold">Modern Healthcare</span> was incepted in the year <span className="font-semibold">1998</span> by 
                        <span className="font-semibold"> Mr. M. VENKATASUBRAMANIAN</span> as a leading manufacturing unit of a range of 
                        <span className="font-semibold"> Industrial Fabrics, Surgical Dressings, Cotton Fabrics</span>, etc. 
                        With more than <span className="font-semibold">32 years of experience</span>, we have become a reliable name in the domain of 
                        <span className="font-semibold"> surgical dressing items</span> and other product lines.
                        We have a modern and spacious manufacturing unit in <span className="font-semibold">Rajapalayam, Tamil Nadu</span>. 
                        The unit is located over an area of <span className="font-semibold">10,000 sq.ft</span> with 
                        <span className="font-semibold"> world-class production machines and technologies</span>. 
                        These efficient methodologies ensure high-quality and large-scale production with a capacity of 
                        <span className="font-semibold"> 1,000,000 meters</span>.
                        We specialize in <span className="font-semibold">Roller Bandages, Gauze Swabs, Absorbent Gauze, Bandage Cloth, Gauze Roll, 
                        Gamjee Roll, Cut Gauze, Lap Sponges, Gamjee Pad, Combine Dressing Pad</span>, etc.
                    </p>
                   <ul className="mt-6 space-y-2 text-sm font-inter text-emerald-700">
                        <li>✓ Over 32 years of manufacturing excellence</li>
                        <li>✓ ISO-compliant production standards</li>
                        <li>✓ Cutting-edge machinery and facilities</li>
                        <li>✓ Dedicated team of experienced professionals</li>
                        <li>✓ Extensive range of surgical and medical fabrics</li>
                        <li>✓ Customized solutions for bulk orders</li>
                        <li>✓ Strong supply chain and timely delivery</li>
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
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
    const [phoneSearch, setPhoneSearch] = useState("");
    const [searchResults, setSearchResults] = useState(null);
    const [showMoreReviews, setShowMoreReviews] = useState(false);
    const [vendorType, setVendorType] = useState("good");

    const goodVendors = [
        {
            name: "Blessed Pastrie",
            phone: "+237 650-148-156",
            rating: 5,
            review: "Professional vendor, delivered on time with excellent packaging and quality products."
        },
        {
            name: "Fresh Electronics",
            phone: "+237 690-123-456",
            rating: 5,
            review: "Great customer service, authentic products, fast delivery and competitive prices."
        },
        {
            name: "Premium Fabrics Store",
            phone: "+237 670-987-654",
            rating: 5,
            review: "High quality materials, reliable vendor, always fulfills orders exactly as requested."
        },
        {
            name: "Quality Hardware",
            phone: "+237 680-555-999",
            rating: 5,
            review: "Trustworthy supplier with consistent quality and excellent after-sales support."
        },
        {
            name: "Organic Produce Co",
            phone: "+237 695-111-222",
            rating: 5,
            review: "Fresh products, transparent pricing, and committed to customer satisfaction."
        }
    ];

    const badVendors = [
        {
            name: "Cheap Deals Shop",
            phone: "+237 600-111-222",
            rating: 1,
            review: "Poor quality products, doesn't follow order specifications, unreliable delivery."
        },
        {
            name: "Counterfeit Electronics",
            phone: "+237 610-333-444",
            rating: 1,
            review: "Sold fake products, refused refund, very unprofessional customer service."
        },
        {
            name: "Rushed Tailoring",
            phone: "+237 620-555-666",
            rating: 2,
            review: "Incomplete work, poor craftsmanship, missed deadlines repeatedly."
        },
        {
            name: "Shady Imports",
            phone: "+237 630-777-888",
            rating: 1,
            review: "Products don't match descriptions, scamming customers with false advertising."
        },
        {
            name: "Unreliable Services Ltd",
            phone: "+237 640-999-111",
            rating: 2,
            review: "Inconsistent quality, rude staff, worst experience I've had with any vendor."
        }
    ];

    const currentVendors = vendorType === "good" ? goodVendors : badVendors;
    return (
        <>
            {/* Hero Section */}
            <div className="bg-linear-to-r from-blue-600 to-blue-900 text-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-4">REVIEW IT, Building Trust in business</h1>
                    <p className="text-xl mb-8 text-blue-100">Your trusted platform for secure, reliable and transparent business</p>
                    <div className="flex gap-4 justify-center">
                        <Link to="/Signin" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100">Get Started</Link>
                        <button className="border-2 border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600">Learn More</button>
                    </div>
                </div>
            </div>

            {/* Vendor Search Section */}
            <div className="py-16 bg-linear-to-r from-blue-50 to-blue-100">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-8 text-blue-950">Search for Vendors</h2>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <p className="text-center text-gray-600 mb-6">Enter a telephone number to find trusted vendors</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="tel"
                                value={phoneSearch}
                                onChange={(e) => setPhoneSearch(e.target.value)}
                                placeholder="Enter telephone number (e.g., +237 650-148-156)"
                                className="flex-1 border-2 border-gray-300 p-3 rounded-md focus:border-blue-600 focus:outline-none"
                            />
                            <button
                                onClick={() => {
                                    if (phoneSearch.trim()) {
                                        setSearchResults({ phone: phoneSearch, vendors: ["Vendor A", "Vendor B", "Vendor C"] });
                                    } else {
                                        alert("Please enter a telephone number");
                                    }
                                }}
                                className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
                            >
                                Search
                            </button>
                        </div>
                        
                        {searchResults && (
                            <div className="mt-6 p-4 bg-blue-50 border-2 border-blue-300 rounded-lg">
                                <p className="text-gray-700 mb-3"><strong>Search Results for:</strong> {searchResults.phone}</p>
                                <div className="space-y-2">
                                    {searchResults.vendors.map((vendor, index) => (
                                        <div key={index} className="p-3 bg-white border border-gray-300 rounded hover:shadow-md transition">
                                            <p className="font-semibold text-blue-600">{vendor}</p>
                                            <p className="text-sm text-gray-600">Rating: ⭐⭐⭐⭐⭐</p>
                                            <p className="text-sm text-gray-600">Review: i have bought from the vendor twice i can honestly say his cheap and he gives quality</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-4 text-blue-950">How REVIEWIT Has Helped Us</h2>
                    <p className="text-center text-gray-600 mb-12 text-lg">Discover how our platform has transformed businesses and built trust</p>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">CB</div>
                                <div className="ml-4">
                                    <p className="font-semibold text-gray-800">Cho Blaise</p>
                                    <p className="text-sm text-gray-600">Business Owner - Blessed Pastrie</p>
                                </div>
                            </div>
                            <div className="text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
                            <p className="text-gray-700 mb-3">"Life-changing platform"</p>
                            <p className="text-gray-700">"REVIEWIT has transformed my business completely. The platform helped me build credibility with customers by showcasing my reviews and ratings. I've acquired 3x more customers in just 6 months, and the transparency has made people trust my brand instantly."</p>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">MA</div>
                                <div className="ml-4">
                                    <p className="font-semibold text-gray-800">Martins Ande</p>
                                    <p className="text-sm text-gray-600">Business Owner - Martinez Gadget Space</p>
                                </div>
                            </div>
                            <div className="text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
                            <p className="text-gray-700 mb-3">"Trust is my competitive advantage now"</p>
                            <p className="text-gray-700">"I was skeptical at first, but REVIEWIT proved invaluable. My customers can verify my background and see authentic reviews, which significantly reduced buyer hesitation. My sales have increased and I've built a loyal customer base through genuine trust."</p>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">UO</div>
                                <div className="ml-4">
                                    <p className="font-semibold text-gray-800">Uche Obiri</p>
                                    <p className="text-sm text-gray-600">Business Owner - Skin Care Co</p>
                                </div>
                            </div>
                            <div className="text-yellow-400 mb-3">⭐⭐⭐⭐</div>
                            <p className="text-gray-700 mb-3">"Finally, a level playing field"</p>
                            <p className="text-gray-700">"TRUSTLINE leveled the playing field for small businesses like mine. Being able to manage my reputation and respond to feedback has improved my service quality. Customers now feel confident buying from me because of the verified reviews on the platform."</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popular Vendors Section */}
            <div className="py-16 bg-linear-to-r from-blue-50 to-blue-100">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-4 text-blue-950">Popular Vendors</h2>
                    <p className="text-center text-gray-600 mb-12 text-lg">Browse highly-rated vendors or see who to avoid</p>
                    
                    {/* Toggle Buttons */}
                    <div className="flex justify-center gap-4 mb-8">
                        <button
                            onClick={() => setVendorType("good")}
                            className={`px-8 py-3 rounded-md font-semibold transition ${
                                vendorType === "good"
                                    ? "bg-green-600 text-white"
                                    : "bg-white text-green-600 border-2 border-green-600 hover:bg-green-50"
                            }`}
                        >
                            ⭐ Good Vendors
                        </button>
                        <button
                            onClick={() => setVendorType("bad")}
                            className={`px-8 py-3 rounded-md font-semibold transition ${
                                vendorType === "bad"
                                    ? "bg-red-600 text-white"
                                    : "bg-white text-red-600 border-2 border-red-600 hover:bg-red-50"
                            }`}
                        >
                            ⚠️ Vendors to Avoid
                        </button>
                    </div>

                    {/* Vendors Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {currentVendors.slice(0, showMoreReviews ? currentVendors.length : 3).map((vendor, index) => (
                            <div 
                                key={index} 
                                className={`border-l-4 p-6 rounded-lg shadow-md hover:shadow-lg transition ${
                                    vendorType === "good"
                                        ? "bg-white border-green-600"
                                        : "bg-white border-red-600"
                                }`}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <p className="font-semibold text-lg text-gray-800">{vendor.name}</p>
                                        <p className="text-sm text-gray-600">{vendor.phone}</p>
                                    </div>
                                    <div className="text-yellow-400 text-lg">
                                        {'⭐'.repeat(vendor.rating)}
                                    </div>
                                </div>
                                <p className="text-gray-700">{vendor.review}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="text-center">
                        <button
                            onClick={() => setShowMoreReviews(!showMoreReviews)}
                            className={`px-6 py-3 rounded-md font-semibold transition ${
                                vendorType === "good"
                                    ? "bg-green-600 text-white hover:bg-green-700"
                                    : "bg-red-600 text-white hover:bg-red-700"
                            }`}
                        >
                            {showMoreReviews ? "Show Less Reviews" : "See More Reviews"}
                        </button>
                    </div>
                </div>
            </div>

         
            <div className="bg-blue-800 text-white py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-4">Ready to Review</h2>
                    <p className="text-xl mb-8 text-blue-100">Join thousands of satisfied users today</p>
                    <Link to="/Signin" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 inline-block">Sign In Now</Link>
                    <p>OR</p>
                    <Link to="/login" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 inline-block">Login</Link>
                </div>
            </div>
            <div>
                
            </div>
        </>
    );
}
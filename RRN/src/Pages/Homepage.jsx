import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
    const [phoneSearch, setPhoneSearch] = useState("");
    const [searchResults, setSearchResults] = useState(null);
    return (
        <>
            {/* Hero Section */}
            <div className="bg-linear-to-r from-blue-600 to-blue-900 text-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-4">TRUSTLINE, Building Trust in business</h1>
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
                    <h2 className="text-4xl font-bold text-center mb-4 text-blue-950">Real Vendor Experiences</h2>
                    <p className="text-center text-gray-600 mb-12 text-lg">What customers say about the vendors they've worked with</p>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">CB</div>
                                <div className="ml-4">
                                    <p className="font-semibold text-gray-800">Cho Blaise</p>
                                    <p className="text-sm text-gray-600">About: Blessed Pastrie</p>
                                </div>
                            </div>
                            <div className="text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
                            <p className="text-gray-700 mb-3">"Excellent Experience"</p>
                            <p className="text-gray-700">"A very proffesional vendor,I ordered some tarts and it was delivered on time.The packaging was neat and the product quality exceeded my expectations. I will always recommend him the pastries."</p>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">MA</div>
                                <div className="ml-4">
                                    <p className="font-semibold text-gray-800">Martins Ande</p>
                                    <p className="text-sm text-gray-600">About:Martinez gadget space  </p>
                                </div>
                            </div>
                            <div className="text-yellow-400 mb-3">⭐⭐⭐</div>
                            <p className="text-gray-700 mb-3">"quality good but delayed"</p>
                            <p className="text-gray-700">"Quality Materials provides excellent products at competitive rates. They're responsive to inquiries and flexible with orders. Only minor issue was a slight delay once, but overall very reliable!"</p>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">UO</div>
                                <div className="ml-4">
                                    <p className="font-semibold text-gray-800">Uche Obiri</p>
                                    <p className="text-sm text-gray-600">About: skin care Co</p>
                                </div>
                            </div>
                            <div className="text-yellow-400 mb-3">⭐</div>
                            <p className="text-gray-700 mb-3">"poor business"</p>
                            <p className="text-gray-700">"I bought twice from him, it was a mess. Instead of the list of product i commanded this man did not follow my list but did his own.i would never recommend him to someone"</p>
                        </div>
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
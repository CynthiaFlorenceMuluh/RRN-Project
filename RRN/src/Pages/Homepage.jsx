import { Link } from "react-router-dom";
import { useState } from "react";

export default function Homepage() {
    const [phoneSearch, setPhoneSearch] = useState("");
    const [searchResults, setSearchResults] = useState(null);
    return (
        <>
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-900 text-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-4">TRUSTLINE, Building Trust in business</h1>
                    <p className="text-xl mb-8 text-blue-100">Your trusted platform for secure and reliable services</p>
                    <div className="flex gap-4 justify-center">
                        <Link to="/Signin" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100">Get Started</Link>
                        <button className="border-2 border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600">Learn More</button>
                    </div>
                </div>
            </div>

            {/* Vendor Search Section */}
            <div className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-8 text-blue-950">Search for Vendors</h2>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <p className="text-center text-gray-600 mb-6">Enter a telephone number to find trusted vendors</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="tel"
                                value={phoneSearch}
                                onChange={(e) => setPhoneSearch(e.target.value)}
                                placeholder="Enter telephone number (e.g., +1-555-123-4567)"
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
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Features Section 
            <div className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">Why Choose TRUSTLINE?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                            <div className="text-4xl mb-4">�</div>
                            <h3 className="text-2xl font-semibold mb-2">Find Vendors by Phone</h3>
                            <p className="text-gray-600">Easily search and locate trusted vendors using their telephone contact information.</p>
                        </div>

                        
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                            <div className="text-4xl mb-4">⭐</div>
                            <h3 className="text-2xl font-semibold mb-2">Read Real Reviews</h3>
                            <p className="text-gray-600">Access honest reviews and ratings from verified users to make informed decisions.</p>
                        </div>

                        
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                            <div className="text-4xl mb-4">🔒</div>
                            <h3 className="text-2xl font-semibold mb-2">Trust & Security</h3>
                            <p className="text-gray-600">All vendor information is verified and secured to protect your interests.</p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                            <h3 className="font-semibold mb-2">Sign Up</h3>
                            <p className="text-gray-600 text-sm">Create your account in minutes</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                            <h3 className="font-semibold mb-2">Verify</h3>
                            <p className="text-gray-600 text-sm">Complete verification process</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                            <h3 className="font-semibold mb-2">Search Vendor</h3>
                            <p className="text-gray-600 text-sm">Find trusted vendors by phone number</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                            <h3 className="font-semibold mb-2">Rate and Review</h3>
                            <p className="text-gray-600 text-sm">Share your expirience and protect others</p>
                        </div>
                    </div>
                </div>
            </div>

            */}
            <div className="bg-blue-950 text-white py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-4">Ready to Review</h2>
                    <p className="text-xl mb-8 text-blue-100">Join thousands of satisfied users today</p>
                    <Link to="/Signin" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 inline-block">Sign In Now</Link>
                </div>
            </div>
        </>
    );
}
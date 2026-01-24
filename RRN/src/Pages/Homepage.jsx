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
                    <p className="text-xl mb-8 text-blue-100">Your trusted platform for secure,reliable and traansparent business</p>
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
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

         
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
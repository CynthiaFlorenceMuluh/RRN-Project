import { useState } from "react";

export default function Signin() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.phone) {
            console.log("Form submitted:", formData);
            setSubmitted(true);
            setFormData({ name: "", email: "", phone: "" });
            setTimeout(() => setSubmitted(false), 3000);
        } else {
            alert("Please fill in all fields");
        }
    };

    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-md mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-center mb-6 text-blue-950">Sign In</h2>
                    
                    {submitted && (
                        <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                            Successfully signed in!
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Name</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name" 
                                className="border-2 border-gray-300 p-3 rounded-md w-full focus:border-blue-600 focus:outline-none"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email" 
                                className="border-2 border-gray-300 p-3 rounded-md w-full focus:border-blue-600 focus:outline-none"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-2">Telephone Number</label>
                            <input 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your telephone number" 
                                className="border-2 border-gray-300 p-3 rounded-md w-full focus:border-blue-600 focus:outline-none"
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="mt-6 w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
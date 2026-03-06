import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../Lib/Supabase.jsx";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        
        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email address";
        }
        
        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        
        // Simulate API call
        setTimeout(() => {
            const isAuthenticated = login(email, password);
            
            if (isAuthenticated) {
                setIsLoading(false);
                setLoginSuccess(true);
                setEmail("");
                setPassword("");
                
                // Redirect after 2 seconds
                setTimeout(() => {
                    navigate("/review");
                }, 2000);
            } else {
                setIsLoading(false);
                setErrors({ submit: "Invalid email or password. Please check your credentials or sign up." });
            }
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                {/* Logo/Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-blue-600 mb-2">TRUSTLINE</h1>
                    <p className="text-gray-600">Building Trust in Business</p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login to Your Account</h2>

                    {loginSuccess && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-500 rounded-lg text-green-700 text-center">
                            <p className="font-semibold">✓ Login Successful!</p>
                            <p className="text-sm mt-1">Redirecting...</p>
                        </div>
                    )}

                    {errors.submit && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-500 rounded-lg text-red-700 text-center">
                            <p className="font-semibold">✕ Login Failed</p>
                            <p className="text-sm mt-1">{errors.submit}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
                                    errors.email
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                }`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1 flex items-center">
                                    <span className="mr-1">✕</span> {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
                                        errors.password
                                            ? "border-red-500 focus:ring-red-500"
                                            : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                                >
                                    {showPassword ? "🙈" : "👁"}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1 flex items-center">
                                    <span className="mr-1">✕</span> {errors.password}
                                </p>
                            )}
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                                />
                                <span className="ml-2 text-gray-700">Remember me</span>
                            </label>
                            <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                                Forgot Password?
                            </a>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <span className="animate-spin">⚙</span> Logging in...
                                </>
                            ) : (
                                "Login"
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="mt-6 mb-6 flex items-center">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <span className="px-3 text-gray-500 text-sm">OR</span>
                        <div className="flex-1 border-t border-gray-300"></div>
                    </div>

                    {/* Social Login */}
                    <div className="space-y-3">
                        <button className="w-full border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2">
                            <span>🔵</span> Login with Google
                        </button>
                      
                    </div>

                    {/* Sign Up Link */}
                    <p className="text-center text-gray-700 mt-6">
                        Don't have an account?{" "}
                        <Link to="/Signin" className="text-blue-600 font-semibold hover:text-blue-700 underline">
                            Sign Up Here
                        </Link>
                    </p>
                </div>

                {/* Footer Text */}
                <p className="text-center text-gray-600 text-xs mt-6">
                    By logging in, you agree to our{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                        Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                        Privacy Policy
                    </a>
                </p>
            </div>
        </div>
    );
}
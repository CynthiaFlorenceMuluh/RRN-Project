import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signin() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        businessType: "",
        agreedToTerms: false
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [signupSuccess, setSignupSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\+?[\d\s\-()]{10,}$/.test(formData.phone)) {
            newErrors.phone = "Please enter a valid phone number";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
            newErrors.password = "Password must contain uppercase, lowercase, and numbers";
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        if (!formData.businessType) {
            newErrors.businessType = "Please select a business type";
        }

        if (!formData.agreedToTerms) {
            newErrors.agreedToTerms = "You must agree to the terms and conditions";
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

        // Simulate API call for registration
        setTimeout(() => {
            setIsLoading(false);
            setSignupSuccess(true);
            
            // Reset form
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: "",
                businessType: "",
                agreedToTerms: false
            });

            // Redirect after 2 seconds
            setTimeout(() => {
                window.location.href = "/login";
            }, 2000);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
            <div className="max-w-md mx-auto">
                {/* Logo/Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-blue-600 mb-2">TRUSTLINE</h1>
                    <p className="text-gray-600">Create Your Account</p>
                </div>

                {/* Sign Up Card */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign Up</h2>

                    {signupSuccess && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-500 rounded-lg text-green-700 text-center">
                            <p className="font-semibold">✓ Account Created Successfully!</p>
                            <p className="text-sm mt-1">Redirecting to login...</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Full Name */}
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Your full name"
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition text-sm ${
                                    errors.fullName
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                }`}
                            />
                            {errors.fullName && (
                                <p className="text-red-500 text-xs mt-1 flex items-center">
                                    <span className="mr-1">✕</span> {errors.fullName}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition text-sm ${
                                    errors.email
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                }`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1 flex items-center">
                                    <span className="mr-1">✕</span> {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Phone */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+237 650-148-156"
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition text-sm ${
                                    errors.phone
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                }`}
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-xs mt-1 flex items-center">
                                    <span className="mr-1">✕</span> {errors.phone}
                                </p>
                            )}
                        </div>

                        {/* Business Type */}
                        <div>
                            <label htmlFor="businessType" className="block text-sm font-semibold text-gray-700 mb-2">
                                Business Type
                            </label>
                            <select
                                id="businessType"
                                name="businessType"
                                value={formData.businessType}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition text-sm ${
                                    errors.businessType
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                }`}
                            >
                                <option value="">Select your business type</option>
                                <option value="vendor">Vendor</option>
                                <option value="buyer">Buyer</option>
                                <option value="retailer">Retailer</option>
                                <option value="distributor">Distributor</option>
                                <option value="service_provider">Service Provider</option>
                            </select>
                            {errors.businessType && (
                                <p className="text-red-500 text-xs mt-1 flex items-center">
                                    <span className="mr-1">✕</span> {errors.businessType}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="At least 8 characters"
                                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition text-sm ${
                                        errors.password
                                            ? "border-red-500 focus:ring-red-500"
                                            : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-2 text-gray-500 hover:text-gray-700 text-sm"
                                >
                                    {showPassword ? "🙈" : "👁"}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-xs mt-1 flex items-center">
                                    <span className="mr-1">✕</span> {errors.password}
                                </p>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Re-enter your password"
                                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition text-sm ${
                                        errors.confirmPassword
                                            ? "border-red-500 focus:ring-red-500"
                                            : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-2 text-gray-500 hover:text-gray-700 text-sm"
                                >
                                    {showConfirmPassword ? "🙈" : "👁"}
                                </button>
                            </div>
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-xs mt-1 flex items-center">
                                    <span className="mr-1">✕</span> {errors.confirmPassword}
                                </p>
                            )}
                        </div>

                        {/* Terms Agreement */}
                        <div>
                            <label className="flex items-start cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="agreedToTerms"
                                    checked={formData.agreedToTerms}
                                    onChange={handleChange}
                                    className="w-4 h-4 text-blue-600 rounded mt-0.5"
                                />
                                <span className="ml-2 text-gray-700 text-sm">
                                    I agree to the{" "}
                                    <a href="#" className="text-blue-600 hover:underline">
                                        Terms and Conditions
                                    </a>{" "}
                                    and{" "}
                                    <a href="#" className="text-blue-600 hover:underline">
                                        Privacy Policy
                                    </a>
                                </span>
                            </label>
                            {errors.agreedToTerms && (
                                <p className="text-red-500 text-xs mt-1 flex items-center">
                                    <span className="mr-1">✕</span> {errors.agreedToTerms}
                                </p>
                            )}
                        </div>

                        {/* Sign Up Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
                        >
                            {isLoading ? (
                                <>
                                    <span className="animate-spin">⚙</span> Creating Account...
                                </>
                            ) : (
                                "Create Account"
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="mt-6 mb-6 flex items-center">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <span className="px-3 text-gray-500 text-sm">OR</span>
                        <div className="flex-1 border-t border-gray-300"></div>
                    </div>

                    {/* Social Sign Up */}
                    <div className="space-y-2">
                        <button type="button" className="w-full border border-gray-300 text-gray-700 font-semibold py-2 rounded-lg hover:bg-gray-50 transition text-sm">
                            🔵 Sign up with Google
                        </button>
                       
                    </div>

                    {/* Login Link */}
                    <p className="text-center text-gray-700 mt-6 text-sm">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-600 font-semibold hover:text-blue-700 underline">
                            Login Here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
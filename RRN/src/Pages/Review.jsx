import { useState } from "react";

export default function Review() {
    const [reviews, setReviews] = useState([
        {
            id: 1,
            vendor: "Tech Supplies Ltd",
            phone: "+237 650-148-156",
            reviewer: "John Amah",
            rating: 5,
            date: "2024-02-15",
            title: "Excellent Service",
            comment: "Outstanding quality products and very professional service. Highly recommended!",
            helpful: 45
        },
        {
            id: 2,
            vendor: "Quality Materials Co",
            phone: "+237 678-234-890",
            reviewer: "Mariam Kone",
            rating: 4,
            date: "2024-02-10",
            title: "Good but slow delivery",
            comment: "Products are good quality but delivery took longer than expected.",
            helpful: 32
        },
        {
            id: 3,
            vendor: "Fast Distribution",
            phone: "+237 690-456-123",
            reviewer: "David Che",
            rating: 5,
            date: "2024-02-08",
            title: "Best vendor so far",
            comment: "Quick delivery, excellent communication, and competitive pricing. 10/10!",
            helpful: 58
        }
    ]);

    const [formData, setFormData] = useState({
        vendor: "",
        phone: "",
        rating: 5,
        title: "",
        comment: ""
    });

    const [filteredReviews, setFilteredReviews] = useState(reviews);
    const [searchPhone, setSearchPhone] = useState("");
    const [sortBy, setSortBy] = useState("recent");
    const [showForm, setShowForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSearch = (e) => {
        const phone = e.target.value;
        setSearchPhone(phone);
        
        if (phone.trim()) {
            const filtered = reviews.filter(review => 
                review.phone.includes(phone) || review.vendor.toLowerCase().includes(phone.toLowerCase())
            );
            setFilteredReviews(filtered);
        } else {
            setFilteredReviews(reviews);
        }
    };

    const handleSort = (e) => {
        const value = e.target.value;
        setSortBy(value);
        
        let sorted = [...filteredReviews];
        if (value === "recent") {
            sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (value === "highest") {
            sorted.sort((a, b) => b.rating - a.rating);
        } else if (value === "lowest") {
            sorted.sort((a, b) => a.rating - b.rating);
        } else if (value === "helpful") {
            sorted.sort((a, b) => b.helpful - a.helpful);
        }
        setFilteredReviews(sorted);
    };

    const handleSubmitReview = async (e) => {
        e.preventDefault();
        
        if (!formData.vendor || !formData.phone || !formData.title || !formData.comment) {
            alert("Please fill in all fields");
            return;
        }

        setIsSubmitting(true);
        
        // Simulate API call
        setTimeout(() => {
            const newReview = {
                id: reviews.length + 1,
                vendor: formData.vendor,
                phone: formData.phone,
                reviewer: "You",
                rating: formData.rating,
                date: new Date().toISOString().split('T')[0],
                title: formData.title,
                comment: formData.comment,
                helpful: 0
            };
            
            setReviews([newReview, ...reviews]);
            setFilteredReviews([newReview, ...reviews]);
            setFormData({ vendor: "", phone: "", rating: 5, title: "", comment: "" });
            setShowForm(false);
            setIsSubmitting(false);
        }, 1000);
    };

    const renderStars = (rating) => {
        return (
            <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={star <= rating ? "text-yellow-400" : "text-gray-300"}>
                        ★
                    </span>
                ))}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 to-blue-100 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-blue-950 mb-2">Vendor Reviews</h1>
                    <p className="text-gray-600 text-lg">Read and share experiences with vendors</p>
                </div>

                {/* Write Review Button */}
                <div className="mb-8 text-center">
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        {showForm ? "Cancel" : "✍ Write a Review"}
                    </button>
                </div>

                {/* Write Review Form */}
                {showForm && (
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Share Your Experience</h2>
                        <form onSubmit={handleSubmitReview} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Vendor Name</label>
                                    <input
                                        type="text"
                                        name="vendor"
                                        value={formData.vendor}
                                        onChange={handleChange}
                                        placeholder="Enter vendor name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter vendor phone"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Rating</label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                                            className={`text-3xl transition ${star <= formData.rating ? "text-yellow-400" : "text-gray-300"}`}
                                        >
                                            ★
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Review Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="Brief summary of your review"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Review</label>
                                <textarea
                                    name="comment"
                                    value={formData.comment}
                                    onChange={handleChange}
                                    placeholder="Share your detailed experience with this vendor..."
                                    rows="5"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-400"
                            >
                                {isSubmitting ? "Submitting..." : "Submit Review"}
                            </button>
                        </form>
                    </div>
                )}

                {/* Search and Filter Section */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Search Vendor</label>
                            <input
                                type="text"
                                value={searchPhone}
                                onChange={handleSearch}
                                placeholder="Search by vendor name or phone"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Sort By</label>
                            <select
                                value={sortBy}
                                onChange={handleSort}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="recent">Most Recent</option>
                                <option value="highest">Highest Rated</option>
                                <option value="lowest">Lowest Rated</option>
                                <option value="helpful">Most Helpful</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Reviews List */}
                <div className="space-y-6">
                    {filteredReviews.length > 0 ? (
                        filteredReviews.map((review) => (
                            <div key={review.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                                {/* Vendor Info */}
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">{review.vendor}</h3>
                                        <p className="text-gray-600 text-sm">📞 {review.phone}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="mb-2">{renderStars(review.rating)}</div>
                                        <p className="text-gray-500 text-xs">{review.date}</p>
                                    </div>
                                </div>

                                {/* Review Content */}
                                <div className="mb-4">
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{review.title}</h4>
                                    <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                                </div>

                                {/* Reviewer and Helpful */}
                                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                                    <p className="text-sm text-gray-600">
                                        <span className="font-semibold">By:</span> {review.reviewer}
                                    </p>
                                    <button className="text-sm text-blue-600 hover:text-blue-700 font-semibold">
                                        👍 Helpful ({review.helpful})
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                            <p className="text-gray-600 text-lg">No reviews found. Try a different search.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
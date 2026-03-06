import { useState } from "react";
import { Link } from "react-router-dom";

export default function Admin() {
    const [activeTab, setActiveTab] = useState("dashboard");
    const [showAddVendor, setShowAddVendor] = useState(false);
    const [showAddUser, setShowAddUser] = useState(false);

    // Mock data
    const stats = [
        { label: "Total Vendors", value: "1,245", color: "bg-blue-500" },
        { label: "Total Users", value: "8,932", color: "bg-green-500" },
        { label: "Pending Reviews", value: "156", color: "bg-yellow-500" },
        { label: "Reported Issues", value: "24", color: "bg-red-500" }
    ];

    const vendors = [
        { id: 1, name: "Blessed Pastrie", phone: "+237 650-148-156", rating: 5, status: "Active" },
        { id: 2, name: "Fresh Electronics", phone: "+237 690-123-456", rating: 5, status: "Active" },
        { id: 3, name: "Cheap Deals Shop", phone: "+237 600-111-222", rating: 1, status: "Flagged" }
    ];

    const users = [
        { id: 1, name: "John Doe", email: "john@example.com", joinDate: "2026-01-15", status: "Active" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", joinDate: "2026-02-01", status: "Active" },
        { id: 3, name: "Bob Wilson", email: "bob@example.com", joinDate: "2026-01-20", status: "Inactive" }
    ];

    const pendingReviews = [
        { id: 1, reviewer: "Alice", vendor: "Blessed Pastrie", review: "Great service!", status: "Pending" },
        { id: 2, reviewer: "Charlie", vendor: "Fresh Electronics", review: "Poor quality", status: "Pending" },
        { id: 3, reviewer: "Diana", vendor: "Premium Fabrics", review: "Excellent!", status: "Flagged" }
    ];

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-blue-950 text-white p-6 shadow-lg">
                <Link to="/" className="text-2xl font-bold mb-8 block hover:text-blue-300">
                    TRUSTLINE Admin
                </Link>
                <nav className="space-y-4">
                    <button
                        onClick={() => setActiveTab("dashboard")}
                        className={`w-full text-left px-4 py-2 rounded-md transition ${
                            activeTab === "dashboard" ? "bg-blue-600" : "hover:bg-blue-800"
                        }`}
                    >
                        📊 Dashboard
                    </button>
                    <button
                        onClick={() => setActiveTab("vendors")}
                        className={`w-full text-left px-4 py-2 rounded-md transition ${
                            activeTab === "vendors" ? "bg-blue-600" : "hover:bg-blue-800"
                        }`}
                    >
                        🏪 Manage Vendors
                    </button>
                    <button
                        onClick={() => setActiveTab("users")}
                        className={`w-full text-left px-4 py-2 rounded-md transition ${
                            activeTab === "users" ? "bg-blue-600" : "hover:bg-blue-800"
                        }`}
                    >
                        👥 Manage Users
                    </button>
                    <button
                        onClick={() => setActiveTab("reviews")}
                        className={`w-full text-left px-4 py-2 rounded-md transition ${
                            activeTab === "reviews" ? "bg-blue-600" : "hover:bg-blue-800"
                        }`}
                    >
                        ⭐ Review Moderation
                    </button>
                    <button
                        onClick={() => setActiveTab("reports")}
                        className={`w-full text-left px-4 py-2 rounded-md transition ${
                            activeTab === "reports" ? "bg-blue-600" : "hover:bg-blue-800"
                        }`}
                    >
                        📈 Reports
                    </button>
                    <button
                        onClick={() => setActiveTab("settings")}
                        className={`w-full text-left px-4 py-2 rounded-md transition ${
                            activeTab === "settings" ? "bg-blue-600" : "hover:bg-blue-800"
                        }`}
                    >
                        ⚙️ Settings
                    </button>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                <div className="p-8">
                    {/* Dashboard Tab */}
                    {activeTab === "dashboard" && (
                        <div>
                            <h1 className="text-4xl font-bold text-gray-800 mb-8">Dashboard</h1>
                            
                            {/* Stats Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                                {stats.map((stat, index) => (
                                    <div key={index} className="bg-white rounded-lg shadow-md p-6">
                                        <p className="text-gray-600 mb-2">{stat.label}</p>
                                        <p className={`text-4xl font-bold text-white ${stat.color} px-4 py-2 rounded-md inline-block`}>
                                            {stat.value}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
                                    <ul className="space-y-3 text-gray-700">
                                        <li>✓ 45 new reviews submitted</li>
                                        <li>✓ 12 new vendors registered</li>
                                        <li>✓ 3 vendors flagged for investigation</li>
                                        <li>✓ 89 users active today</li>
                                    </ul>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Action Items</h3>
                                    <ul className="space-y-3 text-gray-700">
                                        <li>⚠️ 156 reviews pending moderation</li>
                                        <li>⚠️ 24 reported issues to investigate</li>
                                        <li>⚠️ 5 vendors need verification</li>
                                        <li>⚠️ System health: Good</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Vendors Tab */}
                    {activeTab === "vendors" && (
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-4xl font-bold text-gray-800">Manage Vendors</h1>
                                <button
                                    onClick={() => setShowAddVendor(!showAddVendor)}
                                    className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700"
                                >
                                    + Add Vendor
                                </button>
                            </div>

                            {showAddVendor && (
                                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                                    <h3 className="text-xl font-bold mb-4">Add New Vendor</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input type="text" placeholder="Vendor Name" className="border-2 border-gray-300 p-2 rounded-md" />
                                        <input type="tel" placeholder="Phone Number" className="border-2 border-gray-300 p-2 rounded-md" />
                                        <input type="email" placeholder="Email" className="border-2 border-gray-300 p-2 rounded-md" />
                                        <input type="text" placeholder="Business Type" className="border-2 border-gray-300 p-2 rounded-md" />
                                    </div>
                                    <button className="bg-green-600 text-white px-6 py-2 rounded-md mt-4 hover:bg-green-700">Save Vendor</button>
                                </div>
                            )}

                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <table className="w-full">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="px-6 py-3 text-left">Name</th>
                                            <th className="px-6 py-3 text-left">Phone</th>
                                            <th className="px-6 py-3 text-left">Rating</th>
                                            <th className="px-6 py-3 text-left">Status</th>
                                            <th className="px-6 py-3 text-left">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {vendors.map((vendor) => (
                                            <tr key={vendor.id} className="border-b hover:bg-gray-50">
                                                <td className="px-6 py-3">{vendor.name}</td>
                                                <td className="px-6 py-3">{vendor.phone}</td>
                                                <td className="px-6 py-3">{'⭐'.repeat(vendor.rating)}</td>
                                                <td className="px-6 py-3">
                                                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                                        vendor.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                                    }`}>
                                                        {vendor.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-3 space-x-2">
                                                    <button className="text-blue-600 hover:underline">Edit</button>
                                                    <button className="text-red-600 hover:underline">Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Users Tab */}
                    {activeTab === "users" && (
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-4xl font-bold text-gray-800">Manage Users</h1>
                                <button
                                    onClick={() => setShowAddUser(!showAddUser)}
                                    className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700"
                                >
                                    + Add User
                                </button>
                            </div>

                            {showAddUser && (
                                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                                    <h3 className="text-xl font-bold mb-4">Add New User</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input type="text" placeholder="Full Name" className="border-2 border-gray-300 p-2 rounded-md" />
                                        <input type="email" placeholder="Email" className="border-2 border-gray-300 p-2 rounded-md" />
                                        <input type="tel" placeholder="Phone" className="border-2 border-gray-300 p-2 rounded-md" />
                                        <select className="border-2 border-gray-300 p-2 rounded-md">
                                            <option>User Role</option>
                                            <option>User</option>
                                            <option>Vendor</option>
                                        </select>
                                    </div>
                                    <button className="bg-green-600 text-white px-6 py-2 rounded-md mt-4 hover:bg-green-700">Save User</button>
                                </div>
                            )}

                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <table className="w-full">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="px-6 py-3 text-left">Name</th>
                                            <th className="px-6 py-3 text-left">Email</th>
                                            <th className="px-6 py-3 text-left">Join Date</th>
                                            <th className="px-6 py-3 text-left">Status</th>
                                            <th className="px-6 py-3 text-left">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user) => (
                                            <tr key={user.id} className="border-b hover:bg-gray-50">
                                                <td className="px-6 py-3">{user.name}</td>
                                                <td className="px-6 py-3">{user.email}</td>
                                                <td className="px-6 py-3">{user.joinDate}</td>
                                                <td className="px-6 py-3">
                                                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                                        user.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                                                    }`}>
                                                        {user.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-3 space-x-2">
                                                    <button className="text-blue-600 hover:underline">Edit</button>
                                                    <button className="text-red-600 hover:underline">Ban</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Reviews Tab */}
                    {activeTab === "reviews" && (
                        <div>
                            <h1 className="text-4xl font-bold text-gray-800 mb-6">Review Moderation</h1>
                            <div className="space-y-4">
                                {pendingReviews.map((item) => (
                                    <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <p className="font-semibold text-gray-800">{item.reviewer} reviewed {item.vendor}</p>
                                                <p className="text-gray-600 mt-2">"{item.review}"</p>
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                                item.status === "Pending" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"
                                            }`}>
                                                {item.status}
                                            </span>
                                        </div>
                                        <div className="flex gap-3">
                                            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Approve</button>
                                            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Reject</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Reports Tab */}
                    {activeTab === "reports" && (
                        <div>
                            <h1 className="text-4xl font-bold text-gray-800 mb-6">Reports & Analytics</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Top Vendors by Rating</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between"><span>Blessed Pastrie</span><span>⭐⭐⭐⭐⭐</span></div>
                                        <div className="flex justify-between"><span>Fresh Electronics</span><span>⭐⭐⭐⭐⭐</span></div>
                                        <div className="flex justify-between"><span>Premium Fabrics</span><span>⭐⭐⭐⭐</span></div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Platform Statistics</h3>
                                    <ul className="space-y-3 text-gray-700">
                                        <li>Average Vendor Rating: 4.2 ⭐</li>
                                        <li>User Satisfaction: 92%</li>
                                        <li>Reviews This Month: 1,250</li>
                                        <li>Flagged Items: 24</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Settings Tab */}
                    {activeTab === "settings" && (
                        <div>
                            <h1 className="text-4xl font-bold text-gray-800 mb-6">Settings</h1>
                            <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">General Settings</h3>
                                    <div className="space-y-3">
                                        <label className="flex items-center">
                                            <input type="checkbox" defaultChecked className="mr-3" />
                                            Enable email notifications
                                        </label>
                                        <label className="flex items-center">
                                            <input type="checkbox" defaultChecked className="mr-3" />
                                            Allow new vendor registrations
                                        </label>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="mr-3" />
                                            Maintenance mode
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Security Settings</h3>
                                    <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Change Password</button>
                                </div>
                                <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">Save Settings</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
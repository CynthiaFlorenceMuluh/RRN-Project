export default function Footer() {
    return (
        <footer className="w-full bg-blue-950 text-white mt-10">
            <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">TRUSTLINE</h3>
                        <p className="text-gray-300 text-sm">
                            Your trusted platform for secure, reliable and transparent business.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                            <li><a href="/Signin" className="text-gray-300 hover:text-white">Sign In</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <p className="text-gray-300 text-sm mb-2">Email: info@trustline.com</p>
                        <p className="text-gray-300 text-sm">Phone: + (237 650148156)
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 pt-6">
                    <p className="text-center text-gray-400 text-sm">
                        &copy; 2026 TRUSTLINE. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

import { Link } from "react-router-dom";
import { useState } from "react";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="w-full bg-white border-b">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-blue-950 hover:text-blue-600 transition">REVIEWIT</Link>
                
                {/* Hamburger Icon - visible on mobile */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <div className={`w-6 h-0.5 bg-blue-950 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-blue-950 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-blue-950 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </button>

                {/* Desktop Menu - visible on large screens */}
                <div className="hidden lg:flex gap-6 items-center text-sm">
                    <Link to='/Signin' className="text-gray-700 hover:text-blue-600">SignIn</Link>
                    <Link to='/login' className="text-gray-700 hover:text-blue-600">LogIn</Link>
                </div>

                {/* Mobile Menu - visible when hamburger is clicked */}
                {isOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white border-b lg:hidden shadow-md">
                        <div className="flex flex-col gap-4 px-6 py-4 text-sm">
                            <Link to='/Signin' className="text-gray-700 hover:text-blue-600" onClick={closeMenu}>SignIn</Link>
                            <Link to='/login' className="text-gray-700 hover:text-blue-600" onClick={closeMenu}>LogIn</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

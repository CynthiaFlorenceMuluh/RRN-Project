import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <nav className="w-full bg-white border-b ">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-950">TRUSTLINE</h1>
                <div className="flex gap-6 items-center text-sm">
                    <Link to='/' className="text-gray-700 hover:text-blue-600"> HomePage</Link>
            
                     <Link to='/Sigin' className="text-gray-700 hover:text-blue-600"> SignIn</Link>
                     <Link to='/Sigin' className="text-gray-700 hover:text-blue-600">LogIn</Link>
           
                </div>
             </div>
         
        </nav>
    );
}
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <nav className="w-full bg-white border-b ">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-blue-950 hover:text-blue-600 transition">TRUSTLINE</Link>
                <div className="flex gap-6 items-center text-sm">
                    
            
                   
                     <Link to='/Signin' className="text-gray-700 hover:text-blue-600"> SignIn</Link>
                     <Link to='/login' className="text-gray-700 hover:text-blue-600">LogIn</Link>
                     <Link to='/review' className="text-gray-700 hover:text-blue-600">Review</Link>
                     
           
                </div>
             </div>
         
        </nav>
    );}
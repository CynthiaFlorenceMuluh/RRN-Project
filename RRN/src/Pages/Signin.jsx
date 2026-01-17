import Navbar from "../assets/Component/Navigation";
export default function Signin() {
    return (
        <>
        <div className="min-h-screen bg-white">
            <Navbar/>
            <div>
                <label>Name</label>
                <input type="text" placeholder="Enter your name" className="border-2 border-gray-700 p-2 rounded-md w-full"/>
                <label>Email</label>
                <input type="email" placeholder="Enter your email" className="border-2 border-gray-700 p-2 rounded-md w-full"/>
                <label>Telephone Number</label>
                <input type="tel" placeholder="Enter your telephone number" className="border-2 border-gray-700 p-2 rounded-md w-full"/>
                <button className="">Sign In</button>

            </div>
        </div>
       
        </>
    );
}
 //rafce
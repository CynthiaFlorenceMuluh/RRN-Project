
export default function About(){
    return (
        <>
            {/* Hero Section */}
            <div className="bg-linear-to-r from-blue-600 to-blue-900 text-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-4">About TRUSTLINE</h1>
                    <p className="text-xl mb-8 text-blue-100">We build trust between businesses and their customers by providing transparent vendor reviews and verified contact information.</p>
                    <p className="max-w-3xl mx-auto text-center text-blue-100">TRUSTLINE is a platform created to help small and medium businesses connect with reliable vendors. Our goal is to make commerce safer and more reliable by surfacing honest feedback, ratings and verified contact details.</p>
                </div>
            </div>

            {/* Mission & Values Section */}
            <div className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-blue-950 mb-4">Our Mission</h2>
                    <p className="text-gray-700 mb-6">To empower businesses and consumers with clear, trustworthy information so they can make confident purchasing decisions.</p>

                    <h3 className="text-2xl font-semibold text-blue-950 mb-3">What we do</h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                        <li>Collect and surface vendor reviews and ratings.</li>
                        <li>Verify contact details to reduce fraud and miscommunication.</li>
                        <li>Provide a searchable directory of trusted vendors.</li>
                    </ul>

                    <h3 className="text-2xl font-semibold text-blue-950 mb-3">Meet the Team</h3>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="p-6 border rounded-lg">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-3">AR</div>
                            <p className="font-semibold">Blessing</p>
                            <p className="text-sm text-gray-600">Founder & CEO</p>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-3">MK</div>
                            <p className="font-semibold">Cynthia K.</p>
                            <p className="text-sm text-gray-600">Head of Partnerships</p>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-3">ST</div>
                            <p className="font-semibold">Steve</p>
                            <p className="text-sm text-gray-600">Product Lead</p>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                        <h4 className="text-xl font-semibold text-blue-950 mb-3">Get Involved</h4>
                        <p className="text-gray-700 mb-4">Have a vendor to recommend or a review to share? Sign in to leave feedback or reach out to our team.</p>
                        <div className="flex gap-4">
                            <a href="/Signin" className="bg-blue-600 text-white px-5 py-2 rounded-md">Sign In</a>
                            <a href="/login" className="border border-blue-600 text-blue-600 px-5 py-2 rounded-md">Log In</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
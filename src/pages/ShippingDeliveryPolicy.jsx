import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ShippingPolicy = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 flex flex-col">
                {/* Navbar Links */}
                <div className="bg-white shadow py-4">
                    <div className="container mx-auto px-6 lg:px-12">
                        <nav className="flex justify-center space-x-6 lg:space-x-10 text-sm font-medium text-gray-600">
                            <a href="/terms-and-conditions" className="hover:text-green-500">Terms and Condition</a>
                            <a href="/privacy-policy" className="hover:text-green-500">Privacy Policy</a>
                            <a href="/cancellation-refund" className="hover:text-green-500">Cancellation and Refund Policy</a>
                            <a href="/shipping-delivery" className="hover:text-green-500">Shipping and Delivery</a>
                        </nav>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-6 lg:px-20 flex-grow py-12">
                    {/* Title and Effective Date */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Shipping and Delivery</h1>
                        <hr className="w-1/4 mx-auto border-t-2 border-gray-300" />
                        <p className="text-gray-500 mt-4">Effective: May 27, 2024</p>
                    </div>

                    {/* Shipping and Delivery Policy */}
                    <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Shipping and Delivery Policy</h2>

                        {/* 1. Introduction */}
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Introduction</h3>
                        <p className="text-gray-700 mb-6">
                            At MusiTech, we are dedicated to delivering exceptional services in Digital Marketing, Website Development, Video Production, and our Training and Mentorship Program. Although we do not handle physical products, this Shipping and Delivery Policy outlines how we manage the delivery of our services to ensure timely and efficient execution.
                        </p>

                        {/* 2. Service Delivery */}
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Service Delivery</h3>

                        {/* a. Digital Marketing, Website Development, and Video Production Services */}
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">a. Digital Marketing, Website Development, and Video Production Services</h4>
                        <ul className="list-disc list-inside text-gray-700 mb-6">
                            <li><strong>Project Kickoff:</strong> After the successful confirmation of your service order and receipt of payment, our team will schedule a project kickoff meeting. This is where we discuss your requirements, timelines, and deliverables.</li>
                            <li><strong>Timeline for Delivery:</strong> The delivery timeline for each service will be outlined in the service agreement or project proposal. Typical timelines are as follows:
                                <ul className="list-disc list-inside ml-4">
                                    <li>Digital Marketing: [e.g., 2-4 weeks for initial strategy and campaign setup]</li>
                                    <li>Website Development: [e.g., 4-8 weeks for website design and development]</li>
                                    <li>Video Production: [e.g., 3-6 weeks for video production and post-production]</li>
                                </ul>
                            </li>
                            <li><strong>Progress Updates:</strong> We will provide regular updates on the progress of your project. These updates may include project milestones, drafts, and other relevant information to ensure transparency and client satisfaction.</li>
                            <li><strong>Final Deliverables:</strong> Upon completion of the project, the final deliverables will be provided through digital means, such as email, cloud storage, or direct download links, depending on the nature of the service.</li>
                        </ul>

                        {/* b. Training and Mentorship Program */}
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">b. Training and Mentorship Program</h4>
                        <ul className="list-disc list-inside text-gray-700 mb-6">
                            <li><strong>Program Access:</strong> Once your application is accepted and payment is confirmed, you will receive access to the Training and Mentorship Program materials. This may include online course access, webinar links, and other resources necessary for your training.</li>
                            <li><strong>Schedule and Sessions:</strong> The program schedule, including session timings and dates, will be communicated to you via email or through a dedicated portal. It is essential to adhere to the schedule to benefit fully from the program.</li>
                            <li><strong>Support and Assistance:</strong> Throughout the program, you will have access to support from our mentors and trainers. For any issues or questions, you can contact us through the provided communication channels.</li>
                        </ul>

                        {/* 3. Changes to Service Delivery */}
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Changes to Service Delivery</h3>
                        <ul className="list-disc list-inside text-gray-700 mb-6">
                            <li><strong>Client Requests:</strong> If you need to make changes to the project scope or delivery schedule, please notify us as soon as possible. We will accommodate changes based on our availability and the terms outlined in your service agreement.</li>
                            <li><strong>Service Modifications:</strong> Any modifications to the service delivery will be communicated to you in advance, and any additional costs or adjustments will be discussed and agreed upon before implementation.</li>
                        </ul>

                        {/* 4. Service Quality Assurance */}
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Service Quality Assurance</h3>
                        <p className="text-gray-700 mb-6">
                            MusiTech is committed to delivering high-quality services. If you encounter any issues with the service delivery, please contact us immediately. We will work with you to resolve any concerns and ensure that you are satisfied with the final outcome.
                        </p>

                        {/* 5. Contact Us */}
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Contact Us</h3>
                        <p className="text-gray-700 mb-6">
                            For any inquiries related to service delivery, project updates, or support, please contact us at:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-6">
                            <li>Email: contact@musitech.in</li>
                            <li>Phone: 7822827875</li>
                        </ul>

                        {/* 6. Changes to This Policy */}
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">6. Changes to This Policy</h3>
                        <p className="text-gray-700 mb-6">
                            MusiTech reserves the right to update or modify this Shipping and Delivery Policy at any time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about our service delivery practices.
                        </p>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default ShippingPolicy;
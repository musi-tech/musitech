import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
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
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
                        <hr className="w-1/4 mx-auto border-t-2 border-gray-300" />
                        <p className="text-gray-500 mt-4">Effective: May 27, 2024</p>
                    </div>

                    {/* Privacy Policy Content */}
                    <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">1. Introduction</h2>
                        <p className="text-gray-700 mb-6">
                            At MusiTech, we are committed to protecting the privacy and security of our users' personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you use our website and services, including Digital Marketing Services, Website Development, Video Production, and our Training and Mentorship Program (collectively, the "Services"). By accessing or using our website and Services, you agree to the collection and use of your information in accordance with this Privacy Policy.
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-6">
                            <li>Company Name: MusiTech</li>
                            <li>Contact Information: contact@musitech.in, 7822827875</li>
                            <li>Effective Date: May 27, 2024</li>
                        </ul>
                        <p className="text-gray-700 mb-6">
                            If you do not agree with this Privacy Policy, please refrain from using our website and Services.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">2. Information We Collect</h2>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">a. Personal Information</h3>
                        <ul className="list-disc pl-6 text-gray-700 mb-6">
                            <li>Name: To identify and personalize our communications with you.</li>
                            <li>Email Address: To communicate with you regarding our Services, updates, and promotions.</li>
                            <li>Phone Number: To provide customer support and communicate service-related information.</li>
                            <li>Billing Information: Such as your credit/debit card number, expiry date, billing address, and payment details to process transactions securely via Razorpay or other payment gateways.</li>
                        </ul>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">b. Non-Personal Information</h3>
                        <ul className="list-disc pl-6 text-gray-700 mb-6">
                            <li>Usage Data: Information about how you use our website, such as your IP address, browser type, operating system, pages visited, and the date and time of your visit.</li>
                            <li>Cookies and Tracking Technologies: Small files stored on your device that help us improve user experience by remembering your preferences and settings.</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">3. How We Use Your Information</h2>
                        <p className="text-gray-700 mb-6">
                            We use the information we collect for the following purposes:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-6">
                            <li>To Provide and Improve Our Services: To deliver the services you request, process transactions, and improve our website's functionality and user experience.</li>
                            <li>To Communicate with You: To send you updates, newsletters, promotional materials, and other information related to our Services.</li>
                            <li>To Ensure Security and Prevent Fraud: To monitor and analyze activities on our website to prevent any fraudulent or malicious activities.</li>
                            <li>To Comply with Legal Obligations: To comply with applicable laws, regulations, and legal requests.</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">4. Sharing Your Information</h2>
                        <p className="text-gray-700 mb-6">
                            We do not sell, rent, or trade your personal information to third parties. However, we may share your information in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-6">
                            <li>With Service Providers: We may share your information with third-party service providers who assist us in providing our Services, such as payment processing, data analysis, and marketing.</li>
                            <li>With Legal Authorities: We may disclose your information if required to do so by law or in response to valid legal requests, such as a court order or government regulation.</li>
                            <li>Business Transfers: If MusiTech undergoes a merger, acquisition, or sale of assets, your information may be transferred as part of that business transaction.</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">5. Cookies and Tracking Technologies</h2>
                        <p className="text-gray-700 mb-6">
                            MusiTech uses cookies and similar tracking technologies to enhance user experience and analyze website traffic. Cookies are small text files stored on your device that allow us to remember your preferences and provide a more personalized experience.
                        </p>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Types of Cookies We Use:</h3>
                        <ul className="list-disc pl-6 text-gray-700 mb-6">
                            <li>Essential Cookies: These cookies are necessary for the website to function properly.</li>
                            <li>Analytics Cookies: These cookies help us understand how users interact with our website by collecting information anonymously.</li>
                            <li>Marketing Cookies: These cookies are used to deliver relevant advertisements and track ad performance.</li>
                        </ul>
                        <p className="text-gray-700 mb-6">
                            Managing Cookies: You can control the use of cookies through your browser settings. However, please note that disabling cookies may affect the functionality of our website.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">6. Security of Your Information</h2>
                        <p className="text-gray-700 mb-6">
                            We take the security of your information seriously and implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-6">
                            <li>Data Encryption: We use industry-standard encryption protocols to protect your data during transmission.</li>
                            <li>Access Controls: We limit access to your personal information to authorized personnel only, who are bound by confidentiality obligations.</li>
                        </ul>
                        <p className="text-gray-700 mb-6">
                            While we strive to protect your information, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">7. Your Rights and Choices</h2>
                        <p className="text-gray-700 mb-6">
                            You have the following rights regarding your personal information:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-6">
                            <li>Right to Access: You have the right to request access to the personal information we hold about you.</li>
                            <li>Right to Rectification: You have the right to request corrections to any inaccurate or incomplete information.</li>
                            <li>Right to Erasure: You have the right to request the deletion of your personal information, subject to legal obligations.</li>
                            <li>Right to Object: You have the right to object to the processing of your personal information for direct marketing purposes.</li>
                            <li>Right to Withdraw Consent: If you have provided consent for the processing of your personal information, you have the right to withdraw your consent at any time.</li>
                        </ul>
                        <p className="text-gray-700 mb-6">
                            To exercise any of these rights, please contact us at [Insert Contact Information].
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">8. Third-Party Links</h2>
                        <p className="text-gray-700 mb-6">
                            Our website may contain links to third-party websites that are not operated or controlled by MusiTech. We are not responsible for the privacy practices or content of these third-party websites. We encourage you to review the privacy policies of any third-party websites you visit.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">9. Children's Privacy</h2>
                        <p className="text-gray-700 mb-6">
                            Our Services are not directed towards individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have inadvertently collected personal information from a child under 18, we will take steps to delete such information promptly.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">10. Changes to This Privacy Policy</h2>
                        <p className="text-gray-700 mb-6">
                            MusiTech reserves the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">11. Contact Us</h2>
                        <p className="text-gray-700 mb-6">
                            If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-6">
                            <li>Email: contact@musitech.in</li>
                            <li>Phone: 7822827875</li>
                        </ul>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default PrivacyPolicy;
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfUse = () => {
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
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Terms and Conditions</h1>
                        <hr className="w-1/4 mx-auto border-t-2 border-gray-300" />
                        <p className="text-gray-500 mt-4">Effective: May 27, 2024</p>
                    </div>

                    {/* Terms Content */}
                    <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Thank you for using our services!</h2>

                        <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Introduction</h3>
                        <p className="text-gray-700 mb-4">
                            Welcome to MusiTech! These Terms and Conditions ("Terms") govern your use of our website and the services we provide, including but not limited to Digital Marketing Services, Website Development, Digital Content Creation, and our Training and Mentorship Program (collectively, the "Services"). By accessing or using our website and Services, you agree to comply with and be bound by these Terms.
                        </p>

                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Highlights:</h4>
                        <ul className="list-disc list-inside text-gray-700 mb-6">
                            <li>Company Overview: MusiTech is a service-based company specializing in providing a variety of professional services such as Digital Marketing, Website Development, and Video Production. We also offer comprehensive training and mentorship programs designed to help individuals develop and enhance their skills in various fields.</li>
                            <li>Scope of Services: The details, features, and pricing for each of our Services are outlined separately on our website or through specific agreements provided during the engagement process. We reserve the right to modify, limit, or discontinue any of our Services at any time.</li>
                            <li>Use of Our Website: The use of our website is subject to these Terms, our Privacy Policy, and any other policies or guidelines that we may establish. You agree to use the website for lawful purposes only and not to engage in any activity that could harm MusiTech or its users.</li>
                            <li>Changes to the Terms: MusiTech reserves the right to modify or update these Terms, and such changes will be effective immediately upon posting on our website.</li>
                            <li>Legal Disclaimer: The information provided on this website is for general informational purposes only. While MusiTech aims to provide accurate and up-to-date information, we do not guarantee the accuracy of the information, products, or services provided on this website.</li>
                        </ul>

                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Important Notice:</h4>
                        <ul className="list-disc list-inside text-gray-700 mb-6">
                            <li>Eligibility to Use Services: By using our Services, you represent that you are at least 12 years old or have the legal authority to enter into binding contracts as per applicable laws. MusiTech does not knowingly provide Services to individuals who do not meet these criteria.</li>
                            <li>Limitation of Liability: MusiTech shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of our website or Services. Your use of the website and Services is at your own risk, and you assume full responsibility for any loss or damage that may result from accessing or using our website or Services.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Acceptance of Terms</h3>
                        <p className="text-gray-700 mb-4">
                            By accessing or using our website and Services, you confirm that you have read, understood, and agree to be bound by these Terms.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-6">
                            <li>Modification of Terms: MusiTech reserves the right to amend these Terms at any time. Continued use of the website or Services following any changes constitutes your acceptance of those changes.</li>
                            <li>Binding Agreement: These Terms constitute a binding legal agreement between you and MusiTech. If you are using the Services on behalf of an organization, you represent and warrant that you have the authority to bind the organization to these Terms.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Services Description</h3>
                        <p className="text-gray-700 mb-4">
                            MusiTech offers a range of professional services including Digital Marketing, Website Development, Video Production, and Training and Mentorship Programs.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-6">
                            <li>Service Details: Each service provided by MusiTech is subject to specific terms and conditions, which will be outlined in a separate agreement or on our website. We strive to deliver high-quality services that meet the specific needs of our clients.</li>
                            <li>Changes and Availability: We reserve the right to modify, suspend, or discontinue any of our Services at any time. MusiTech shall not be liable for any modification, suspension, or discontinuation of the Services.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Eligibility Criteria</h3>
                        <p className="text-gray-700 mb-4">
                            To use our Services, you must meet the following criteria:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-6">
                            <li>Age Requirement: You must be at least 12 years old or possess the legal capacity to enter into contracts according to the applicable laws in your jurisdiction.</li>
                            <li>Legal Capacity: By using our Services, you represent and warrant that you have the right, authority, and capacity to enter into these Terms and to abide by all the terms and conditions herein.</li>
                            <li>Prohibited Uses: MusiTech strictly prohibits the use of its Services for any unlawful or unauthorized purpose. Any violation of these Terms may result in immediate termination of your access to our Services.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Payment Terms</h3>
                        <p className="text-gray-700 mb-4">
                            All payments for our Services must be made in accordance with the following terms:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-6">
                            <li>Payment Methods: MusiTech accepts payments through various methods, including Razorpay. All payments must be made in the currency specified in the invoice or payment page.</li>
                            <li>Payment Security: MusiTech ensures that all transactions are processed securely. However, we are not responsible for any loss or damage resulting from unauthorized access to your payment information during the transaction.</li>
                            <li>Non-Refundable Payments: Unless otherwise specified in a separate service agreement, all payments are final and non-refundable. We encourage you to review all details before making a payment.</li>
                            <li>Disputes: Any disputes regarding payments must be raised within 30 days of the transaction date. MusiTech reserves the right to refuse any request for a refund if the dispute is not raised within this period.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-4">6. User Obligations</h3>
                        <p className="text-gray-700 mb-4">
                            As a user of our website and Services, you agree to the following obligations:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-6">
                            <li>Accurate Information: You agree to provide accurate and truthful information during the registration or service engagement process. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</li>
                            <li>Prohibited Activities: You agree not to use the website or Services for any unlawful or prohibited activities, including but not limited to fraud, spamming, and distribution of harmful content. Any violation of these obligations may result in termination of your access to the Services.</li>
                            <li>Intellectual Property: You acknowledge that all content and materials available on the website are the property of MusiTech and are protected by intellectual property laws. You may not use, reproduce, or distribute any content without prior written permission from MusiTech.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-4">7. Intellectual Property Rights</h3>
                        <p className="text-gray-700 mb-4">
                            All content on the MusiTech website, including but not limited to text, graphics, logos, images, and software, is the property of MusiTech or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-6">
                            <li>Use of Content: You may not reproduce, distribute, or create derivative works based on any content on the website without express written consent from MusiTech.</li>
                            <li>Trademarks: All trademarks, service marks, and logos displayed on the website are the exclusive property of MusiTech or their respective owners. Unauthorized use of any trademarks or logos is strictly prohibited.</li>
                            <li>User Content: If you submit any content to MusiTech, you grant us a non-exclusive, royalty-free, perpetual, and irrevocable right to use, reproduce, modify, and distribute that content in connection with the Services.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-4">8. Limitation of Liability</h3>
                        <p className="text-gray-700 mb-4">
                            MusiTech shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or the inability to use our website or Services, even if MusiTech has been advised of the possibility of such damages.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-6">
                            <li>No Guarantee: MusiTech provides the website and Services on an "as is" and "as available" basis without any warranty or guarantee of any kind, either express or implied.</li>
                            <li>Indemnification: You agree to indemnify, defend, and hold harmless MusiTech and its officers, directors, employees, and agents from any claims, liabilities, damages, or expenses arising out of your use of the website or Services.</li>
                        </ul>
                        


                        {/* Add other sections similarly... */}

                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default TermsOfUse;
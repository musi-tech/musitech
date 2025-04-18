import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CancellationandRefund = () => {
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Cancellation and Refund Policy</h1>
            <hr className="w-1/4 mx-auto border-t-2 border-gray-300" />
            <p className="text-gray-500 mt-4">Effective: May 27, 2024</p>
          </div>

          {/* Cancellation and Refund Policy Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">1. General Policy</h2>
            <p className="text-gray-700 mb-6">
              At MusiTech, we strive to provide high-quality services in Digital Marketing, Website Development, Video Production, and our Training and Mentorship Program. We understand that there may be circumstances that require a request for cancellation or refund. This Cancellation and Refund Policy outlines the conditions under which cancellations and refunds may be considered.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6">2. Digital Marketing, Website Development, and Video Production Services</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">a. Cancellation Policy</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Service Cancellation:</strong> Once a service contract is initiated (i.e., upon signing of the agreement and/or payment), it is considered confirmed, and cancellation requests may not be honored. We advise our clients to carefully evaluate our services before committing.
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">b. Refund Policy</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Non-Refundable Payment:</strong> Payments made for Digital Marketing, Website Development, and Video Production Services are non-refundable. This includes, but is not limited to, any fees paid for project consultation, planning, or execution.
              </li>
              <li>
                <strong>Partial Refunds:</strong> In exceptional cases, where MusiTech is unable to fulfill the services as agreed upon in the contract, a partial refund may be provided after a thorough evaluation of the situation.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6">3. Training and Mentorship Program</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">a. Cancellation Policy</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Application Cancellation:</strong> Candidates may choose to withdraw their application for the Training and Mentorship Program before the acceptance of their candidature by MusiTech. In such cases, the application will be canceled without any charges.
              </li>
              <li>
                <strong>Cancellation Post-Acceptance:</strong> Once a candidate's application has been accepted and the mentorship program has commenced, no cancellations will be allowed.
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">b. Refund Policy</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>No Refunds After Payment Confirmation:</strong> MusiTech follows a no-refund policy once a payment is successfully processed for the Training and Mentorship Program. This includes the initial registration fee and any subsequent payments made for the program.
              </li>
              <li>
                <strong>Exception to No Refund Policy:</strong> A full refund will be provided only if MusiTech does not accept the contract or the candidate's application for the mentorship program. In such cases, the refund will be processed within 7-10 business days from the date of cancellation.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6">4. Eligibility for Refund</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li><strong>Service Not Delivered:</strong> If the service contract has not been accepted or initiated by MusiTech.</li>
              <li><strong>Mutual Agreement:</strong> In rare cases where both MusiTech and the client agree that a refund is in the best interest of both parties, a partial or full refund may be processed.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6">5. How to Request a Cancellation or Refund</h2>
            <p className="text-gray-700 mb-6">
              To request a cancellation or refund, please follow the steps below:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Contact Us:</strong> Send an email to [Insert Email Address] with the subject line "Cancellation Request" or "Refund Request" and include your full name, contact information, and details of the service purchased.
              </li>
              <li>
                <strong>Provide Supporting Information:</strong> Include any relevant documentation, such as proof of payment, service agreements, and any correspondence with our team.
              </li>
              <li>
                <strong>Response Time:</strong> We will review your request and respond within 5-7 business days with a decision or further instructions.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6">6. Changes to This Cancellation and Refund Policy</h2>
            <p className="text-gray-700 mb-6">
              MusiTech reserves the right to update or modify this Cancellation and Refund Policy at any time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about our cancellation and refund practices.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6">7. Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions or concerns about this Cancellation and Refund Policy, please contact us at:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li><strong>Email:</strong> contact@musitech.in</li>
              <li><strong>Phone:</strong> 7822827875</li>
            </ul>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default CancellationandRefund;
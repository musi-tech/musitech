import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYouMessage = ({ paymentId, name }) => {
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate('/'); // Change '/' to '/dashboard' or your desired route
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-md transform transition-all animate-fade-in">
        {/* Success Header */}
        <div className="bg-green-600 pt-6 pb-16 relative">
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-16">
              <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
          <div className="text-center px-4">
            <div className="mx-auto bg-white rounded-full h-16 w-16 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-extrabold text-white">Payment Successful!</h2>
            <p className="mt-1 text-indigo-100">Thank you for your purchase</p>
          </div>
        </div>

        {/* Thank You Content */}
        <div className="px-8 py-10 -mt-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Thank you{name ? ', ' + name : ''}!
            </h3>
            <p className="text-gray-600 mb-6">
              Your payment has been processed successfully. We appreciate your trust in MusiTech and look forward to serving you.
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-500">Payment ID</p>
              <p className="font-medium text-gray-800">{paymentId}</p>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleBackToDashboard}
                className="w-full bg-transparent hover:bg-gray-100 text-gray-700 font-medium py-3 px-4 rounded-lg border border-gray-300 transition-colors"
              >
                Back to Dashboard
              </button>
              <a
                href="https://wa.me/917822827875?text=Hello,%20give%20me%20more%20info%20about%20that%20workshop?"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block text-center bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Contact via WhatsApp
              </a>
            </div>
          </div>

          {/* Help section */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Need help? <a href="#" className="text-green-600 hover:text-green-700 font-medium">Contact our support team</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouMessage;

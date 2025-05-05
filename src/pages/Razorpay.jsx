import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ThankYouMessage from './ThankYouMessage';

const RazorpayPayment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [paymentId, setPaymentId] = useState('');

    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handlePayment = async () => {
        if (!name || !email || !contact) {
            alert('Please fill all required fields');
            return;
        }

        setIsProcessing(true);

        const isScriptLoaded = await loadRazorpayScript();

        if (!isScriptLoaded) {
            alert('Razorpay SDK failed to load. Please check your connection.');
            setIsProcessing(false);
            return;
        }

        const options = {
            key: process.env.REACT_APP_RAZORPAY_KEY || 'rzp_live_c3l5GHHFen801a',
            amount: 100*49, // 100 paise = ₹1
            currency: 'INR',
            name: 'MusiTech',
            description: 'Test Transaction',
            image: 'https://www.musitech.in/static/media/logo.142678cffc5139e93730.png',
            handler: function (response) {
                setIsProcessing(false);
                setPaymentId(response.razorpay_payment_id);
                setPaymentSuccess(true);
                console.log('Razorpay response:', response);
            },
            prefill: {
                name: name,
                email: email,
                contact: contact,
            },
            notes: {
                address: 'MusiTech Corporate Office',
            },
            theme: {
                color: '#6366F1',
            },
            modal: {
                ondismiss: function() {
                    setIsProcessing(false);
                }
            }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    const closeThankYouMessage = () => {
        setPaymentSuccess(false);
        // You can redirect or clear form fields here if needed
    };

    return (
        <>
            <Navbar />
            {paymentSuccess && <ThankYouMessage paymentId={paymentId} name={name} onClose={closeThankYouMessage} />}
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                <div className="w-full max-w-lg">
                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                        {/* Header with wave design */}
                        <div className="relative bg-green-600 pt-8 pb-20">
                            <div className="absolute bottom-0 left-0 right-0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-16">
                                    <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                                </svg>
                            </div>
                            <div className="text-center px-4">
                                <div className="inline-block p-4 rounded-full bg-white/20 backdrop-blur-sm mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-extrabold text-white">Secure Payment</h2>
                                <p className="mt-1 text-indigo-100">Complete your transaction securely with Razorpay</p>
                            </div>
                        </div>
                        
                        {/* Form */}
                        <div className="px-8 py-8 -mt-6">
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                                placeholder="john@example.com"
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <input
                                                type="tel"
                                                value={contact}
                                                onChange={(e) => setContact(e.target.value)}
                                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                                placeholder="+91 9876543210"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Order Summary */}
                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                        <h3 className="text-lg font-medium text-gray-900">Order Summary</h3>
                                       
                                        <div className="mt-1 flex justify-between text-sm">
                                            <p className="text-gray-500">Subtotal</p>
                                            <p className="font-medium text-gray-900">₹49.00</p>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <button
                                            type="button"
                                            disabled={isProcessing}
                                            onClick={handlePayment}
                                            className={`w-full flex items-center justify-center px-6 py-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white ${isProcessing ? 'bg-green-400' : 'bg-green-600 hover:bg-green-700'} transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                                        >
                                            {isProcessing ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Processing...
                                                </>
                                            ) : (
                                                <>
                                                    Pay Now • ₹49.00
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                            
                            {/* Trust badges */}
                            <div className="mt-8 flex flex-col items-center">
                                <div className="flex items-center space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-500">Secure Payment</span>
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-500">SSL Encrypted</span>
                                </div>
                                <div className="mt-4 flex items-center justify-center space-x-3">
                                    <img src="/api/placeholder/32/20" alt="Visa" className="h-5" />
                                    <img src="/api/placeholder/32/20" alt="Mastercard" className="h-5" />
                                    <img src="/api/placeholder/32/20" alt="UPI" className="h-5" />
                                    <img src="/api/placeholder/32/20" alt="Net Banking" className="h-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default RazorpayPayment;
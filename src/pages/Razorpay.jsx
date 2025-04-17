
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RazorpayPayment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');

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
        const isScriptLoaded = await loadRazorpayScript();

        if (!isScriptLoaded) {
            alert('Razorpay SDK failed to load. Please check your connection.');
            return;
        }

        const options = {
            key: process.env.REACT_APP_RAZORPAY_KEY || 'rzp_live_c3l5GHHFen801a',
            amount: 100*10, // 100 paise = ₹1
            currency: 'INR',
            name: 'MusiTech',
            description: 'Test Transaction',
            image: 'https://www.musitech.in/static/media/logo.142678cffc5139e93730.png',
            handler: function (response) {
                alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
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
                color: '#3399cc',
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-10 max-w-md p-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-bold text-center mb-6">Payment Details</h2>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-left text-gray-700">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-left text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-left text-gray-700">Contact</label>
                        <input
                            type="tel"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your contact number"
                            required
                        />
                    </div>
                    <div className="text-center mt-6">
                        <button
                            type="button"
                            onClick={handlePayment}
                            className="px-6 py-3 text-white text-lg bg-green-500 rounded-md hover:bg-green-600 transition-colors duration-300 ease-in-out"
                        >
                            Pay Now
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default RazorpayPayment;

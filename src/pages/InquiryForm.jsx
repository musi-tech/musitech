import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {
  Calendar, Clock, Monitor, Award, ArrowRight, Check, Users, Star, AlertCircle
} from "lucide-react";

const WebinarRegistration = () => {
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    interest: "yes"
  });
  
  // Form errors state
  const [errors, setErrors] = useState({});
  // Form submission attempt state
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  // Handle radio button changes
  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      interest: e.target.value
    });
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    
    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }
    
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setAttemptedSubmit(true);
    
    const formErrors = validateForm();
    setErrors(formErrors);
    
    // If no errors, proceed to payment
    if (Object.keys(formErrors).length === 0) {
      // Navigate to payment page
      window.location.href = "/razorpay";
    } else {
      // Scroll to the first error
      const firstErrorField = Object.keys(formErrors)[0];
      const element = document.querySelector(`[name="${firstErrorField}"]`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen font-sans relative text-white">
        {/* Single background image for the entire page */}
        <div className="fixed inset-0 z-0">
          {/* Using placeholder image instead of require() */}
          <img
            src={require("../assets/images/herobg.jpeg")}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>

        {/* Hero Banner */}
        <div className="relative z-10 py-8">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="text-center">
              <span className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wider mb-3">
                FREE LIVE WORKSHOP • ONE DAY ONLY
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
                Career Guidance <span className="text-green-400">Workshop</span>
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Get the clarity you need to make confident decisions for your future
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row py-10 px-5 lg:px-8 relative z-10">
          {/* Left Section */}
          <div className="w-full lg:w-3/5 space-y-8 lg:pr-16">
            <div className="backdrop-blur-sm bg-black bg-opacity-40 rounded-xl p-6 border border-white border-opacity-10">
              <div className="flex items-center mb-6">
                <Calendar className="w-6 h-6 text-green-500 mr-3" />
                <div>
                  <p className="text-green-400 font-medium">Date & Time</p>
                  <p className="text-xl font-bold">
                    20th April 2025 • 6:00 PM - 7:00 PM IST
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Monitor className="w-6 h-6 text-green-500 mr-3" />
                <div>
                  <p className="text-green-400 font-medium">Mode</p>
                  <p className="text-xl font-bold">Live Online Workshop</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 backdrop-blur-sm bg-black bg-opacity-40 rounded-xl p-6 border border-white border-opacity-10">
              <h2 className="text-2xl font-bold flex items-center">
                <Star className="w-6 h-6 text-green-500 mr-2" />
                What You'll Learn:
              </h2>
              <ul className="space-y-3">
                {[
                  "Identify your true career interests and strengths",
                  "Navigate today's most promising career paths",
                  "Create an actionable roadmap for your professional journey",
                  "Avoid common career decision mistakes",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-green-500 p-1 rounded-full mt-1 mr-3">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="backdrop-blur-sm bg-black bg-opacity-40 rounded-xl p-6 border border-white border-opacity-10">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Award className="w-6 h-6 text-green-500 mr-2" />
                Meet Your Speaker
              </h3>
              <div className="flex items-center">
                <div className="relative">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-gradient-to-b from-green-400 to-green-600 p-1">
                    <img
                      src={require("../assets/images/sd.jpg")}
                      alt="Satish Dhage"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 p-1 rounded-full">
                    <Award className="w-4 h-4 text-black" />
                  </div>
                </div>
                <div className="ml-5">
                  <p className="font-bold text-2xl">Satish Dhage</p>
                  <p className="text-green-400">
                    Voice Solution Architect, Tech Mahindra
                  </p>
                  <p className="text-sm mt-2 text-gray-300">
                    15+ years of industry experience guiding professionals
                    through career transitions
                  </p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-sm bg-green-600 bg-opacity-40 rounded-lg p-4 border border-white border-opacity-10">
              <div className="flex items-center justify-between">
                <div>
                  <span className="block text-sm font-medium">
                    Workshop Value:
                  </span>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold line-through opacity-70">
                      ₹2,999
                    </span>
                    <span className="ml-3 text-3xl font-bold">49</span>
                  </div>
                </div>
                <div className="text-sm">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    <span className="block">Limited seats available</span>
                  </div>
                  <span className="font-bold">
                    Register now to secure your spot
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Registration Form */}
          <div className="w-full lg:w-2/5 mt-10 lg:mt-0 relative z-10">
            <div className="backdrop-blur-md bg-white bg-opacity-90 rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-green-600 bg-opacity-90 px-6 py-6 text-white">
                <h2 className="text-2xl font-bold">Register Now</h2>
                <p className="opacity-90">
                  Secure your spot in this exclusive workshop
                </p>
              </div>
              
              {attemptedSubmit && Object.keys(errors).length > 0 && (
                <div className="mx-6 mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg flex items-start">
                  <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold">Please complete all required fields</p>
                    <p className="text-sm">All fields must be filled to proceed with registration</p>
                  </div>
                </div>
              )}

              <div className="p-6 text-black">
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-800">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={`w-full border ${errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300'} px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-800">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'} px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-800">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex space-x-2">
                      <select className="border border-gray-300 px-3 py-3 rounded-lg w-1/4 focus:ring-2 focus:ring-green-500 focus:border-transparent transition">
                        <option>+91</option>
                        <option>+1</option>
                        <option>+44</option>
                      </select>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        className={`border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'} px-4 py-3 rounded-lg w-3/4 focus:ring-2 focus:ring-green-500 focus:border-transparent transition`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-800">
                      Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Enter your city"
                      className={`w-full border ${errors.location ? 'border-red-500 bg-red-50' : 'border-gray-300'} px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition`}
                    />
                    {errors.location && (
                      <p className="text-red-500 text-sm mt-1">{errors.location}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-800">
                      I want to know more about career opportunities:
                    </label>
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="interest"
                          value="yes"
                          checked={formData.interest === "yes"}
                          onChange={handleRadioChange}
                          className="w-4 h-4 text-green-600"
                        />
                        <span className="text-gray-800">Yes</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="interest"
                          value="no"
                          checked={formData.interest === "no"}
                          onChange={handleRadioChange}
                          className="w-4 h-4 text-green-600"
                        />
                        <span className="text-gray-800">No</span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-bold text-lg hover:bg-green-700 transition flex items-center justify-center"
                    >
                      <span>Secure My Spot</span>
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 mt-4">
                    By submitting this form, I agree to be contacted via call,
                    SMS, email or WhatsApp even if I am registered under NDNC. I
                    also agree that I have read and understood the
                    <a href="#" className="text-green-600 hover:underline">
                      {" "}
                      Terms of Service
                    </a>{" "}
                    and agree to abide by them.
                  </p>
                </form>
              </div>
            </div>

            <div className="mt-6 backdrop-blur-sm bg-black bg-opacity-40 rounded-xl p-4 border border-white border-opacity-10">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-green-500" />
                <p className="text-sm font-medium">
                  Don't miss out! Limited spots available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WebinarRegistration;
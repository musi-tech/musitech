import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  Monitor,
  Award,
  ArrowRight,
  Check,
  Users,
  Star,
} from "lucide-react";

const WebinarRegistration = () => {
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
                Get the clarity you need to make confident decisions for your
                future
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
                      src={require("../assets/images/satish.jpg")}
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

              <div className="p-6 text-black">
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-800">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-800">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-800">
                      Phone Number
                    </label>
                    <div className="flex space-x-2">
                      <select className="border border-gray-300 px-3 py-3 rounded-lg w-1/4 focus:ring-2 focus:ring-green-500 focus:border-transparent transition">
                        <option>+91</option>
                        <option>+1</option>
                        <option>+44</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Phone number"
                        className="border border-gray-300 px-4 py-3 rounded-lg w-3/4 focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-800">
                      Location
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your city"
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    />
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
                          defaultChecked
                          className="w-4 h-4 text-green-600"
                        />
                        <span className="text-gray-800">Yes</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="interest"
                          value="no"
                          className="w-4 h-4 text-green-600"
                        />
                        <span className="text-gray-800">No</span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link to="/razorpay">
                      <button
                        type="button"
                        className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-bold text-lg hover:bg-green-700 transition flex items-center justify-center"
                      >
                        <span>Secure My Spot</span>
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </button>
                    </Link>
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

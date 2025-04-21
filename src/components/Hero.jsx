import { useState, useEffect, useRef } from 'react';
import { ArrowDown, Lightbulb, Rocket, TrendingUp } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
   <section className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute h-64 w-64 rounded-full bg-blue-400 top-10 left-10 blur-3xl"></div>
        <div className="absolute h-64 w-64 rounded-full bg-purple-500 bottom-10 right-10 blur-3xl"></div>
        <div className="absolute h-32 w-32 rounded-full bg-indigo-300 top-40 right-40 blur-2xl"></div>
      </div>
      
      {/* Geometric accents */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>
      
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center relative z-10">
        {/* Content Side */}
        <div className={`lg:w-1/2 lg:pr-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 to-white">
            Your Digital Partner for Growth and Success
          </h1>
          
          <p className="text-lg lg:text-xl mb-8 text-gray-200 max-w-lg">
            Let's transform your vision into reality and accelerate your business growth. Innovative digital solutions tailored to your unique needs.
          </p>
          
          {/* Feature highlights */}
          <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Rocket className="mr-3 text-cyan-300" size={20} />
              <span>Fast Results</span>
            </div>
            <div className="flex items-center">
              <Lightbulb className="mr-3 text-cyan-300" size={20} />
              <span>Creative Solutions</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="mr-3 text-cyan-300" size={20} />
              <span>Data-Driven</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex space-x-4">
            <a href="#services" className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition duration-300">
              <span className="relative z-10 flex items-center">
                Explore Services
                <ArrowDown className="ml-2 group-hover:animate-bounce" size={20} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
        
        {/* Image Side with custom design */}
        <div className={`lg:w-1/2 mt-12 lg:mt-0 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 h-24 w-24 border-t-4 border-l-4 border-cyan-400 opacity-70"></div>
            <div className="absolute -bottom-6 -right-6 h-24 w-24 border-b-4 border-r-4 border-cyan-400 opacity-70"></div>
            
            {/* Main video with overlay effect */}
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50 border border-white/10">
              <div className="relative aspect-video">
                <video 
                  ref={videoRef}
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-full object-cover rounded-2xl"
                >
                  <source src={require("../assets/images/EV.mp4")} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Overlay gradient for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent mix-blend-overlay"></div>
                
                {/* Play/pause button */}
                <button 
                  onClick={togglePlayPause}
                  className="absolute bottom-4 right-4 bg-black/30 p-2 rounded-full backdrop-blur-sm hover:bg-black/50 cursor-pointer transition-all duration-300"
                >
                  {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="10" y1="15" x2="10" y2="9" />
                      <line x1="14" y1="15" x2="14" y2="9" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <circle cx="12" cy="12" r="10" />
                      <polygon points="10 8 16 12 10 16 10 8" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -right-4 top-1/3 p-2 bg-cyan-400 rounded-lg shadow-lg transform rotate-12">
              <TrendingUp className="text-blue-900" size={20} />
            </div>
            <div className="absolute top-3/4 -left-6 p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20">
              <div className="text-xs font-bold">Growth Metrics</div>
              <div className="text-cyan-300 text-lg">+127%</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="0.05"
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,53.3C672,43,768,21,864,21.3C960,21,1056,43,1152,48C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X, Check } from 'lucide-react';

// Sample notifications data (in real app, this would come from your backend)
const sampleNotifications = [
  {
    id: 1,
    title: 'New Event Added',
    message: 'Soccer training for teens this weekend!',
    type: 'info',
    time: '5 mins ago',
    read: false
  },
  {
    id: 2,
    title: 'Membership Special',
    message: 'Get 20% off annual memberships this month',
    type: 'promotion',
    time: '2 hours ago',
    read: false
  },
  {
    id: 3,
    title: 'Coach Sarah Available',
    message: 'New personal training slots just opened',
    type: 'alert',
    time: '1 day ago',
    read: true
  }
];

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState(sampleNotifications);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [currentToast, setCurrentToast] = useState(null);
  
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  // Function to toggle notification panel
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };
  
  // Function to mark notification as read
  const markAsRead = (id) => {
    setNotifications(
      notifications.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };
  
  // Function to dismiss notification
  const dismissNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };
  
  // Count unread notifications
  const unreadCount = notifications.filter(notif => !notif.read).length;
  
  // Display toast notifications periodically
  useEffect(() => {
    // Only show toasts for unread notifications
    const unreadNotifications = notifications.filter(notif => !notif.read);
    
    if (unreadNotifications.length > 0 && !showNotifications) {
      const intervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * unreadNotifications.length);
        setCurrentToast(unreadNotifications[randomIndex]);
        setShowToast(true);
        
        // Auto hide toast after 5 seconds
        setTimeout(() => {
          setShowToast(false);
        }, 5000);
      }, 15000); // Show a toast every 15 seconds
      
      return () => clearInterval(intervalId);
    }
  }, [notifications, showNotifications]);
  
  // Function to get notification color based on type
  const getNotificationColor = (type) => {
    switch(type) {
      case 'info':
        return 'bg-blue-600';
      case 'promotion':
        return 'bg-[#6CD123]';
      case 'alert':
        return 'bg-red-600';
      default:
        return 'bg-gray-600';
    }
  };
  
  return (
    <>
      {/* Bell icon with notification count */}
      <div className="fixed top-6 right-6 z-50">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative cursor-pointer"
          onClick={toggleNotifications}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{ 
              rotate: unreadCount > 0 ? [0, -10, 10, -10, 10, 0] : 0,
              scale: unreadCount > 0 ? [1, 1.1, 1] : 1
            }}
            transition={{ 
              repeat: unreadCount > 0 ? Infinity : 0, 
              repeatDelay: 3,
              duration: 0.5 
            }}
          >
            <Bell size={28} className="text-black" />
          </motion.div>
          {unreadCount > 0 && (
            <motion.span 
              className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 500, 
                damping: 10 
              }}
            >
              {unreadCount}
            </motion.span>
          )}
        </motion.div>
      </div>
      
      {/* Notification Panel */}
      <AnimatePresence>
        {showNotifications && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-screen w-full sm:w-80 md:w-96 bg-gray-900/90 backdrop-blur-sm shadow-2xl z-40 overflow-hidden flex flex-col"
          >
            <div className="p-4 border-b border-gray-700 flex justify-between items-center bg-transparent">
              <motion.h2 
                className="text-xl font-bold text-white"
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Notifications
              </motion.h2>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleNotifications}
                className="text-gray-400 hover:text-white"
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-2">
              {notifications.length === 0 ? (
                <div className="text-center py-10 text-gray-500">
                  No notifications
                </div>
              ) : (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="space-y-2"
                >
                  {notifications.map((notification) => (
                    <motion.div
                      key={notification.id}
                      variants={itemVariants}
                      transition={{ type: "spring", damping: 12 }}
                      whileHover={{ 
                        scale: 1.02, 
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                      }}
                      className={`mb-2 p-3 rounded-lg shadow-md ${notification.read ? 'bg-gray-800/90' : 'bg-gray-700/90'} backdrop-blur-sm relative`}
                    >
                    <div className="flex">
                      <div className={`${getNotificationColor(notification.type)} w-2 h-full rounded-full mr-2`}>
                        <motion.div
                          animate={{ 
                            scaleY: [1, 1.5, 1],
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            repeatDelay: Math.random() * 2 + 1, 
                            duration: 0.5 
                          }}
                          className="h-full w-full"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-bold text-white">{notification.title}</h3>
                          <span className="text-xs text-gray-400">{notification.time}</span>
                        </div>
                        <p className="text-sm text-gray-300 mt-1">{notification.message}</p>
                        
                        <div className="flex justify-end mt-2 space-x-2">
                          {!notification.read && (
                            <button 
                              onClick={() => markAsRead(notification.id)}
                              className="text-xs flex items-center text-[#6CD123] hover:underline"
                            >
                              <motion.div 
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <Check size={12} className="mr-1" />
                              </motion.div>
                              Mark as read
                            </button>
                          )}
                          <button 
                            onClick={() => dismissNotification(notification.id)}
                            className="text-xs text-gray-400 hover:text-gray-200"
                          >
                            Dismiss
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && currentToast && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: "100%" }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed bottom-6 right-6 w-full max-w-xs bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg z-50 overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex p-4">
              <div className={`${getNotificationColor(currentToast.type)} w-1 self-stretch rounded-full mr-3`}>
                <motion.div
                  animate={{ 
                    scaleY: [1, 1.5, 1],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatDelay: 1.5, 
                    duration: 0.5 
                  }}
                  className="h-full w-full"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-white">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      {currentToast.title}
                    </motion.span>
                  </h3>
                  <button 
                    onClick={() => setShowToast(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <motion.div
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={16} />
                    </motion.div>
                  </button>
                </div>
                <p className="text-sm text-gray-300 mt-1">{currentToast.message}</p>
                <span className="text-xs text-gray-400 mt-2 block">{currentToast.time}</span>
              </div>
            </div>
            <div className="h-1 bg-gray-700 w-full">
              <motion.div 
                className="h-full bg-[#6CD123]"
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 5, ease: "linear" }}
                layoutId="progressBar"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NotificationCenter;
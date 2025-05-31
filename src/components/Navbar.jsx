import React, { useState, useEffect } from "react";
import { Sparkle, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import AIResumePopup from "./AIResumePopup";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem("hasVisitedNxtHyre");
    if (!hasVisited) {
      // If first visit, show popup and set flag
      setShowPopup(true);
      localStorage.setItem("hasVisitedNxtHyre", "true");
    } else {
      setIsFirstVisit(false);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    setIsFirstVisit(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-100 backdrop-blur-sm shadow-sm z-50 py-0">
        <div className="container mx-auto px-64 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="src\data\logo\NxtHyre-Logo.png"
              alt="NxtHyre Logo"
              className="h-20 w-20"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link
                to="/jobs"
                className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Jobs
              </Link>
            </div>

            <div className="flex items-center space-x-8">
              <button
                onClick={() => setShowPopup(true)}
                className="text-gray-800 hover:text-blue-600 transition-colors duration-200 relative"
                aria-label="AI Resume Feature"
              >
                <Sparkle className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-purple-600 rounded-full h-2 w-2"></span>
              </button>

              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="text-blue-600 border border-blue-600 py-1.5 px-4 rounded-full hover:bg-gray-100 font-medium transition-colors duration-200"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-blue-600 text-white font-medium py-2 px-4 rounded-full hover:bg-opacity-90 transition-all duration-200"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t mt-3 py-4 px-4 shadow-md">
            <div className="flex flex-col space-y-4">
              <Link
                to="/jobs"
                className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Jobs
              </Link>

              <button
                onClick={() => {
                  setShowPopup(true);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
              >
                <Sparkle className="h-5 w-5 mr-2" />
                AI Resume Feature
              </button>

              <Link
                to="/login"
                className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-2 px-4 rounded-md hover:shadow-lg transition-all duration-200 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </nav>

      {showPopup && (
        <AIResumePopup onClose={handleClosePopup} isFirstVisit={isFirstVisit} />
      )}
    </>
  );
};

export default Navbar;

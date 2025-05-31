import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white flex justify-center">
      <div className="container mx-auto px-4 pt-12 pb-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="src\data\logo\NxtHyre-Logo1.jpg"
                alt="NxtHyre Logo"
                className="h-8 mr-2"
              />
              <span className="text-xl font-bold">NxtHyre</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting top talent with world-class companies. Find your dream
              job or the perfect candidate with NxtHyre.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* For Job Seekers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Job Seekers</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/jobs"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/companies"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Companies
                </Link>
              </li>
              <li>
                <Link
                  to="/career-resources"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Career Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/salary-guide"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Salary Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/resume-builder"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Resume Builder
                </Link>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Employers</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/post-job"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Post a Job
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/employer-resources"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/success-stories"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-4">
              Have questions or feedback? We'd love to hear from you!
            </p>
            <a
              href="mailto:support@nxthyre.com"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              <Mail className="h-5 w-5 mr-2" />
              support@nxthyre.com
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} NxtHyre. All rights reserved.</p>

          <div className="flex mt-4 md:mt-0 space-x-6">
            <Link
              to="/privacy"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="hover:text-white transition-colors duration-200"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const lucide_react_1 = require("lucide-react");
const Footer = () => {
    return (<footer className="bg-textPrimary text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <lucide_react_1.Brain className="w-5 h-5 text-white"/>
              </div>
              <span className="text-xl font-bold">StudyBuddy</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The most efficient AI-powered homework helper for students worldwide. 
              Get instant, accurate solutions and improve your understanding.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI Homework Helper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Step-by-Step Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">All Subjects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mobile App</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <lucide_react_1.Mail className="w-4 h-4 text-accent-400"/>
                <span className="text-gray-400">support@studybuddy.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <lucide_react_1.Phone className="w-4 h-4 text-accent-400"/>
                <span className="text-gray-400">1-800-STUDYBUDDY</span>
              </div>
              <div className="flex items-center space-x-2">
                <lucide_react_1.MapPin className="w-4 h-4 text-accent-400"/>
                <span className="text-gray-400">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 StudyBuddy. All rights reserved. Made with ❤️ for students everywhere.
          </p>
        </div>
      </div>
    </footer>);
};
exports.default = Footer;

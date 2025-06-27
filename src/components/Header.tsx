import React, { useState } from 'react';
import { Brain, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-textPrimary">StudyBuddy</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-textSecondary hover:text-primary-500 transition-colors">Features</a>
            <a href="#tools" className="text-textSecondary hover:text-primary-500 transition-colors">Tools</a>
            <a href="#testimonials" className="text-textSecondary hover:text-primary-500 transition-colors">Reviews</a>
            <a href="#pricing" className="text-textSecondary hover:text-primary-500 transition-colors">Pricing</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-textSecondary hover:text-primary-500 transition-colors font-medium">
              Sign In
            </button>
            <button className="button-primary text-white px-6 py-2 rounded-full font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-textSecondary hover:text-primary-500 transition-colors">Features</a>
              <a href="#tools" className="text-textSecondary hover:text-primary-500 transition-colors">Tools</a>
              <a href="#testimonials" className="text-textSecondary hover:text-primary-500 transition-colors">Reviews</a>
              <a href="#pricing" className="text-textSecondary hover:text-primary-500 transition-colors">Pricing</a>
              <div className="pt-4 space-y-2">
                <button className="w-full text-left text-textSecondary hover:text-primary-500 transition-colors font-medium">
                  Sign In
                </button>
                <button className="w-full button-primary text-white px-6 py-2 rounded-full font-medium">
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
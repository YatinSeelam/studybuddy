import React from 'react';
import { CheckCircle, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-primary-50">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        {/* Heading */}
        <div className="space-y-4">
          <h1 className="hero-animation text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-textPrimary">
            Instant, Accurate
            <br />
            <span className="gradient-text">Homework Help</span>
          </h1>
          <p className="hero-animation text-xl text-textSecondary max-w-2xl mx-auto">
            All the tools you need to solve, understand, and excel in your studies with AI-powered assistance.
          </p>
        </div>

        {/* CTA */}
        <div className="hero-animation">
          <button className="button-primary text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300">
            <span>Get Started</span>
          </button>
        </div>

        {/* Social Proof */}
        <div className="hero-animation flex items-center justify-center space-x-3 text-textSecondary">
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 text-primary-500 mr-2" />
            <div className="flex items-center space-x-1">
              <Heart className="w-4 h-4 text-error fill-current" />
              <span>Loved by</span>
            </div>
          </div>
          <span className="font-bold text-textPrimary">600K+</span>
          <span>students worldwide</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

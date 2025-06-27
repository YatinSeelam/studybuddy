import React from 'react'
import { CheckCircle, Heart, Play } from 'lucide-react'

const Hero = () => {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-primary-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          {/* Main Heading */}
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

          {/* CTA Button */}
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

          {/* Hero Visual */}
          <div className="hero-animation mt-12">
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                {/* Question Interface */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary-500 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                    <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                  </div>
                  <div className="text-sm text-textSecondary">Question 7</div>
                </div>

                {/* Question Content */}
                <div className="mb-6">
                  <p className="text-textPrimary mb-4 text-left">What is the work function in the context of the photoelectric effect?</p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                      <span className="text-textSecondary">The energy required to increase the frequency of light</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                      <span className="text-textSecondary">The energy required to remove an electron</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary-50 border border-primary-200">
                      <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                      <span className="text-textPrimary font-medium">The total energy of the incident photons</span>
                    </div>
                  </div>
                </div>

                {/* AI Assistant */}
                <div className="mt-6 p-4 bg-accent-50 rounded-lg border border-accent-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-accent-500" />
                    <span className="text-accent-700 font-medium">StudyBuddy AI verified</span>
                  </div>
                  <p className="text-textSecondary text-sm">This answer is correct! The work function represents the minimum energy needed to remove an electron from a material's surface.</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent-400 rounded-full floating-element opacity-80"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-primary-400 rounded-full floating-element opacity-80" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-error rounded-full floating-element opacity-80" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
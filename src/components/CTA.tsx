import React from 'react'
import { Star } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Unlock <span className="text-accent-400">Better Grades</span>
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Dive into answers, master concepts, and soar academically with AI by your side.
        </p>
        
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <button className="button-accent text-textPrimary px-8 py-4 rounded-full text-lg font-semibold w-full sm:w-auto">
            Get Started
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary-900 transition-colors w-full sm:w-auto">
            Download App
          </button>
        </div>
        
        <div className="mt-8 flex items-center justify-center space-x-8 text-primary-200">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-accent-400">4.8</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-sm">App Store</span>
          </div>
          <div className="text-sm">
            <span className="font-bold text-white">10M+</span> Questions solved
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
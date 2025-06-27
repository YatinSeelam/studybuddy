import React from 'react'
import { Star, User, Play } from 'lucide-react'

const testimonials = [
  {
    name: 'Cdvs12',
    date: 'Apr 8',
    title: 'Love this app',
    content: 'So i originally saw this from Instagram reels and none of my other solve apps were giving me accurate answers so i decided to try this one and it works perfectly!',
    rating: 5,
    platform: 'App Store'
  },
  {
    name: 'Sarah M.',
    date: 'Mar 15',
    title: 'Game changer for my studies',
    content: 'StudyBuddy has completely transformed how I approach homework. The explanations are clear and help me actually understand the concepts.',
    rating: 5,
    platform: 'Google Play'
  },
  {
    name: 'Alex R.',
    date: 'Mar 22',
    title: 'Incredibly accurate',
    content: 'The AI gives me step-by-step solutions that are always correct. It\'s like having a personal tutor available 24/7.',
    rating: 5,
    platform: 'App Store'
  },
  {
    name: 'Emma K.',
    date: 'Apr 1',
    title: 'Perfect for college',
    content: 'Got me through school. This app got me through paramedic school, it\'s unreal and getting better and better.',
    rating: 5,
    platform: 'Google Play'
  },
  {
    name: 'Michael T.',
    date: 'Mar 28',
    title: 'Best study app ever',
    content: 'StudyBuddy is the perfect app for students who need extra help on assignments they are struggling on. Very accurate and helpful.',
    rating: 5,
    platform: 'App Store'
  },
  {
    name: 'Jessica L.',
    date: 'Apr 5',
    title: 'Highly recommend',
    content: 'Big help for the answer we didn\'t really understand very well. Love this app from Instagram reels and none of my other solve apps were giving me accurate answers.',
    rating: 5,
    platform: 'Google Play'
  }
]

const videoTestimonials = [
  {
    thumbnail: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'One thing you actually need for your freshman year in college'
  },
  {
    thumbnail: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'This app literally saved my GPA'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-textPrimary mb-4">
            Don't take it from us
          </h2>
          <p className="text-xl text-textSecondary">
            See for yourself why over <strong>600k students</strong> use StudyBuddy to excel in their studies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Video Testimonials */}
          <div className="lg:col-span-1 space-y-6">
            {videoTestimonials.map((video, index) => (
              <div key={index} className="relative group cursor-pointer">
                <img 
                  src={video.thumbnail} 
                  alt="Student testimonial"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center group-hover:bg-black/40 transition-colors">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-textPrimary ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium text-sm bg-black/50 rounded p-2">
                    "{video.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Text Testimonials */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-textPrimary">{testimonial.name}</h4>
                      <p className="text-sm text-textSecondary">{testimonial.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <h5 className="font-semibold text-textPrimary mb-2">{testimonial.title}</h5>
                <p className="text-textSecondary text-sm leading-relaxed mb-3">{testimonial.content}</p>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-primary-500 rounded"></div>
                  <span className="text-xs text-textSecondary">{testimonial.platform}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
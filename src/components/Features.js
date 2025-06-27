"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const lucide_react_1 = require("lucide-react");
const features = [
    {
        icon: lucide_react_1.Brain,
        title: 'AI-Powered Solutions',
        description: 'Advanced AI technology provides accurate answers and step-by-step explanations for complex problems.',
        color: 'from-blue-500 to-blue-600'
    },
    {
        icon: lucide_react_1.Zap,
        title: 'Instant Results',
        description: 'Get homework help in seconds, not hours. Our AI processes your questions immediately.',
        color: 'from-yellow-500 to-orange-500'
    },
    {
        icon: lucide_react_1.BookOpen,
        title: 'All Subjects',
        description: 'From mathematics to literature, our AI covers every academic subject you need help with.',
        color: 'from-green-500 to-emerald-600'
    },
    {
        icon: lucide_react_1.Users,
        title: 'Trusted by Students',
        description: 'Join over 600,000 students who rely on StudyBuddy for their academic success.',
        color: 'from-purple-500 to-indigo-600'
    },
    {
        icon: lucide_react_1.Shield,
        title: 'Academic Integrity',
        description: 'Learn responsibly with our focus on understanding concepts rather than just providing answers.',
        color: 'from-red-500 to-pink-600'
    },
    {
        icon: lucide_react_1.Clock,
        title: '24/7 Availability',
        description: 'Study anytime, anywhere. Our AI assistant is always ready to help with your homework.',
        color: 'from-teal-500 to-cyan-600'
    }
];
const Features = () => {
    return (<section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-textPrimary mb-4">
            Why Students Choose StudyBuddy
          </h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            Experience the most efficient way to complete your homework with our cutting-edge AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (<div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 card-hover">
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-accent-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-bold text-textPrimary mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-textSecondary leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Subtle border animation */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl"></div>
            </div>))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-6 py-3 border border-primary-200">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (<div key={i} className="w-2 h-2 bg-primary-500 rounded-full"></div>))}
            </div>
            <span className="text-primary-700 font-medium">Trusted by 600K+ students worldwide</span>
          </div>
        </div>
      </div>
    </section>);
};
exports.default = Features;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const colleges = [
    { name: 'Harvard', logo: '🎓' },
    { name: 'MIT', logo: '🔬' },
    { name: 'Stanford', logo: '🌲' },
    { name: 'Yale', logo: '🏛️' },
    { name: 'Princeton', logo: '🦅' },
    { name: 'Columbia', logo: '🗽' },
    { name: 'UPenn', logo: '🔔' },
    { name: 'Duke', logo: '👑' },
    { name: 'NYU', logo: '🏙️' },
    { name: 'UCLA', logo: '🌴' },
    { name: 'Berkeley', logo: '🐻' },
    { name: 'Michigan', logo: '〽️' },
];
const CollegesMarquee = () => {
    return (<section className="py-16 bg-white overflow-hidden">
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-textPrimary mb-4">
          Trusted by Students at Top Universities
        </h2>
        <p className="text-xl text-textSecondary">
          Join students from the world's leading institutions
        </p>
      </div>
      
      <div className="marquee-container relative">
        <div className="marquee-content flex space-x-8 items-center">
          {[...colleges, ...colleges, ...colleges].map((college, index) => (<div key={index} className="flex items-center space-x-4 bg-gray-50 rounded-xl px-8 py-4 border border-gray-100 whitespace-nowrap shadow-sm hover:shadow-md transition-shadow duration-300 min-w-max">
              <span className="text-3xl">{college.logo}</span>
              <span className="font-bold text-textPrimary text-lg">{college.name}</span>
            </div>))}
        </div>
        
        {/* Fade overlays */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>);
};
exports.default = CollegesMarquee;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const lucide_react_1 = require("lucide-react");
const subjects = [
    { icon: lucide_react_1.Calculator, name: 'Mathematics', color: 'bg-blue-100 text-blue-600' },
    { icon: lucide_react_1.Atom, name: 'Physics', color: 'bg-purple-100 text-purple-600' },
    { icon: lucide_react_1.BookOpen, name: 'Literature', color: 'bg-green-100 text-green-600' },
    { icon: lucide_react_1.Globe, name: 'History', color: 'bg-yellow-100 text-yellow-600' },
    { icon: lucide_react_1.Palette, name: 'Art', color: 'bg-pink-100 text-pink-600' },
    { icon: lucide_react_1.Music, name: 'Music', color: 'bg-indigo-100 text-indigo-600' },
    { icon: lucide_react_1.Code, name: 'Computer Science', color: 'bg-gray-100 text-gray-600' },
    { icon: lucide_react_1.Heart, name: 'Biology', color: 'bg-red-100 text-red-600' },
];
const SubjectsMarquee = () => {
    return (<section className="py-16 bg-gradient-to-r from-primary-50 to-accent-50 overflow-hidden">
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-textPrimary mb-4">
          Master Every Subject
        </h2>
        <p className="text-xl text-textSecondary">
          Get expert help across all academic disciplines
        </p>
      </div>
      
      <div className="marquee-container relative">
        <div className="marquee-content flex space-x-6 items-center">
          {[...subjects, ...subjects, ...subjects].map((subject, index) => (<div key={index} className="flex items-center space-x-3 bg-white rounded-full px-6 py-4 shadow-sm border border-gray-100 whitespace-nowrap hover:shadow-md transition-shadow duration-300 min-w-max">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${subject.color}`}>
                <subject.icon className="w-5 h-5"/>
              </div>
              <span className="font-semibold text-textPrimary text-lg">{subject.name}</span>
            </div>))}
        </div>
        
        {/* Fade overlays */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-primary-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-accent-50 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>);
};
exports.default = SubjectsMarquee;

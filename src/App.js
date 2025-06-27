"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_1 = __importDefault(require("./components/Header"));
const Hero_1 = __importDefault(require("./components/Hero"));
const Features_1 = __importDefault(require("./components/Features"));
const SubjectsMarquee_1 = __importDefault(require("./components/SubjectsMarquee"));
const StudyTools_1 = __importDefault(require("./components/StudyTools"));
const CollegesMarquee_1 = __importDefault(require("./components/CollegesMarquee"));
const Testimonials_1 = __importDefault(require("./components/Testimonials"));
const CTA_1 = __importDefault(require("./components/CTA"));
const Footer_1 = __importDefault(require("./components/Footer"));
function App() {
    return (<div className="min-h-screen bg-background">
      <Header_1.default />
      <main>
        <Hero_1.default />
        <Features_1.default />
        <SubjectsMarquee_1.default />
        <StudyTools_1.default />
        <CollegesMarquee_1.default />
        <Testimonials_1.default />
        <CTA_1.default />
      </main>
      <Footer_1.default />
    </div>);
}
exports.default = App;

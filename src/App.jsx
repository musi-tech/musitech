import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Features from './pages/Features';
import OurTeam from './pages/OurTeam.jsx';
import LetsTalk from './pages/LetsTalk';

import WillowGooglesQuantumLeapTowardsTheFutureOfComputing from './pages/blogs/WillowGooglesQuantumLeapTowardsTheFutureOfComputing'
import UnlockHiddenTechSkills2025 from './pages/blogs/UnlockHiddenTechSkills2025';
import ElonMusksGrokAIGoesFree from './pages/blogs/ElonMusksGrokAIGoesFree';
import MakeMoneyAi from './pages/blogs/MakeMoneyAi';
import HowMuchWorldRichestCompaniesSpendOnCEOSecurity from './pages/blogs/HowMuchWorldRichestCompaniesSpendOnCEOSecurity';
import SoraVideoGenerator from './pages/blogs/SoraVideoGenerator';
import DGukeshVictory from './pages/blogs/DGukeshVictory';
import AIvsHumanArt from './pages/blogs/AIvsHumanArt';

import WebDevelopment from './pages/services/WebDevelopment';
import DigitalMarketing from './pages/services/DigitalMarketing';
import ContentCreation from './pages/services/ContentCreation';
import SocialMediaManagement from './pages/services/SocialMediaManagement';
import MentorshipInternship from './pages/services/MentorshipInternship';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import InternshipProgram from './pages/InternshipProgram.jsx';
import WorkWithUs from './pages/WorkWithUs.jsx';
import TermsAndConditions from './pages/TermsAndConditions.jsx';
import ShippingDeliveryPolicy from './pages/ShippingDeliveryPolicy.jsx';
import CancellationRefundPolicy from './pages/CancellationRefundPolicy.jsx';
import PolicyPages from './pages/PolicyPages.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Razorpay from './pages/Razorpay.jsx';
import Blog from './pages/Blog.jsx';





function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs/how-much-world-richest-companies-spend-on-ceo-security" element={<HowMuchWorldRichestCompaniesSpendOnCEOSecurity />} />
        <Route path="/blogs/make-money-ai" element={<MakeMoneyAi />} />
        <Route path="/blogs/elon-musks-grok-ai-goes-free" element={<ElonMusksGrokAIGoesFree />} />
        <Route path="/blogs/willow-googles-quantum-leap-towards-the-future-of-computing" element={<WillowGooglesQuantumLeapTowardsTheFutureOfComputing />} />
        <Route path="/blogs/unlock-hidden-techskills-2025" element={<UnlockHiddenTechSkills2025 />} />
        <Route path="/blogs/sora-video-generator" element={<SoraVideoGenerator />} />
        <Route path="/blogs/d-gukesh-victory" element={<DGukeshVictory />} />
        <Route path="/blogs/ai-vs-human-art" element={<AIvsHumanArt />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/content-creation" element={<ContentCreation />} />
        <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
        <Route path="/services/mentorship-internship" element={<MentorshipInternship />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/letstalk" element={<LetsTalk />} />
        <Route path="/internship-program" element={<InternshipProgram />} />
        <Route path="/work-with-us" element={<WorkWithUs />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/shipping-delivery" element={<ShippingDeliveryPolicy />} />
        <Route path='/cancellation-refund' element={<CancellationRefundPolicy />} />
        <Route path="/privacy-policy" element={<PolicyPages />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/razorpay" element={<Razorpay />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      </>
  );
}

export default App;

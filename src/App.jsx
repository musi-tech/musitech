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
import MetaverseExplained from './pages/blogs/MetaverseExplained';
import CryptocurrencyHowItWorks from './pages/blogs/CryptocurrencyHowItWorks';
import AiVisionRestoration from './pages/blogs/AiVisionRestoration';
import AiApplyingForJobs from './pages/blogs/AiApplyingForJobs';
import FiveGoldenSkills2025 from './pages/blogs/FiveGoldenSkills2025';
import GoogleVeo2VsOpenAISoraComparison from './pages/blogs/GoogleVeo2VsOpenAISoraComparison';
import ChatGPTOnWhatsApp from './pages/blogs/ChatGPTOnWhatsApp';
import GeminiStream from './pages/blogs/GeminiStream';
import AAAImpactGaming2025 from './pages/blogs/AAAImpactGaming2025'
import OpenAIAchievedAGI from './pages/blogs/OpenAIAchievedAGI'
import ThriveInAIWorld from './pages/blogs/ThriveInAIWorld'
import SingaporeRiseToProsperity from './pages/blogs/SingaporeRiseToProsperity'
import MathPredictsNetflix from './pages/blogs/MathPredictsNetflix'


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
        <Route path="/blogs/metaverse-explained" element={<MetaverseExplained />} />
        <Route path="/blogs/cryptocurrency-how-it-works" element={<CryptocurrencyHowItWorks />} />
        <Route path="/blogs/ai-vision-restoration" element={<AiVisionRestoration />} />
        <Route path="/blogs/ai-applying-for-jobs" element={<AiApplyingForJobs />} />
        <Route path="/blogs/five-golden-skills-2025" element={<FiveGoldenSkills2025 />} />
        <Route path="/blogs/google-veo2-vs-openai-sora-comparison" element={<GoogleVeo2VsOpenAISoraComparison />} />
        <Route path="/blogs/chatgpt-on-whatsapp" element={<ChatGPTOnWhatsApp />} />
        <Route path="/blogs/gemini-stream" element={<GeminiStream />} />
        <Route path="/blogs/openai-achieved-agi" element={<OpenAIAchievedAGI />} />
        <Route path="/blogs/aaa-impact-gaming-2025" element={<AAAImpactGaming2025 />} />
        <Route path="/blogs/singapore-rise-to-prosperity" element={<SingaporeRiseToProsperity />} />
        <Route path="/blogs/thrive-in-ai-world" element={<ThriveInAIWorld />} />
        <Route path="/blogs/math-predicts-netflix" element={<MathPredictsNetflix />} />
        
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

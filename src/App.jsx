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
import TechPayGapIndia from './pages/blogs/TechPayGapIndia'
import ShortFormDramasChina from './pages/blogs/ShortFormDramasChina'
import RevolutionaryFanlessLaptopCooling from './pages/blogs/RevolutionaryFanlessLaptopCooling.jsx'
import TopSideHustles2025 from './pages/blogs/TopSideHustles2025.jsx'
import GenZFinancialTrouble from './pages/blogs/GenZFinancialTrouble.jsx'
import SocialAIPage from './pages/blogs/SocialAIPage.jsx'
import Blinkit10MinuteAmbulanceService from './pages/blogs/Blinkit10MinuteAmbulanceService.jsx'
import LargeActionModels from './pages/blogs/LargeActionModels.jsx'
import SiriPrivacyBlog from './pages/blogs/SiriPrivacyBlog.jsx'
import OpenAIBreaksChess from './pages/blogs/OpenAIBreaksChess.jsx'
import MicrosoftInvestment from './pages/blogs/MicrosoftInvestment.jsx'
import NvidiaRtx5090Blog from './pages/blogs/NvidiaRtx5090Blog.jsx'
import NvidiaDigits from './pages/blogs/NvidiaDigits.jsx'
import AgenticAIArticle from './pages/blogs/AgenticAIArticle.jsx'
import PlayStationSmellFeature from './pages/blogs/PlayStationSmellFeature.jsx'
import MetaHiringIn2025 from './pages/blogs/MetaHiringIn2025.jsx'
import CopilotPlan from './pages/blogs/CopilotPlan.jsx'
import Mahakumbh2025IITBombayEngineerJourney from './pages/blogs/Mahakumbh2025IITBombayEngineerJourney.jsx'
import AIMarketingGuide from './pages/blogs/AIMarketingGuide.jsx'
import TopAIToolsForDigitalMarketingIn2025 from './pages/blogs/TopAIToolsForDigitalMarketingIn2025.jsx'
import MachineLearningAdvertising from './pages/blogs/MachineLearningAdvertising.jsx'
import VoiceSearchOptimization from './pages/blogs/VoiceSearchOptimization.jsx'
import OptimizeSiteForVoiceSearch2025 from './pages/blogs/OptimizeSiteForVoiceSearch2025.jsx'
import TheBestSEOStrategiesFor2025 from './pages/blogs/TheBestSEOStrategiesFor2025.jsx'
import InteractiveEmails from './pages/blogs/InteractiveEmails.jsx'
import MasteringEmailMarketingAutomationMailerlite from './pages/blogs/MasteringEmailMarketingAutomationMailerlite.jsx'
import EmailListSegmentation2025 from './pages/blogs/EmailListSegmentation2025.jsx'
import DigitalMarketingTrends2025 from './pages/blogs/DigitalMarketingTrends2025.jsx'
import DigitalMarketingAccessibility2025 from './pages/blogs/DigitalMarketingAccessibility2025.jsx'
import UnderstandingWhiteHatBlackHatGrayHatSeo from './pages/blogs/UnderstandingWhiteHatBlackHatGrayHatSeo.jsx'
import HowToWriteABlogPostFromStartToFinish from './pages/blogs/HowToWriteABlogPostFromStartToFinish.jsx'
import DeepSeekR1AIOpenSourceRevolution from './pages/blogs/DeepSeekR1AIOpenSourceRevolution.jsx'
import DentaWaterIPOReview2025 from './pages/blogs/DentaWaterIPOReview2025.jsx'
import DecreasePageLoadTime from './pages/blogs/DecreasePageLoadTime.jsx'
import HowSearchEnginesWorkCrawlingIndexingRanking from './pages/blogs/HowSearchEnginesWorkCrawlingIndexingRanking.jsx'
import DrivingTrafficGrowthWithCompetitorKeywordAnalysi from './pages/blogs/DrivingTrafficGrowthWithCompetitorKeywordAnalysi.jsx'
import TheNewApproachToSEOThatChangesEverythingIn2025 from './pages/blogs/TheNewApproachToSEOThatChangesEverythingIn2025.jsx'
import SeoOrphanPagesGuide from './pages/blogs/SeoOrphanPagesGuide.jsx'
import HowSaasCompaniesCanOptimizeForSEO from './pages/blogs/HowSaasCompaniesCanOptimizeForSEO.jsx'
import HowToUploadWebsiteToInternet from './pages/blogs/HowToUploadWebsiteToInternet.jsx'
import WhatIsAPwaHowProgressiveWebAppsWork from './pages/blogs/WhatIsAPwaHowProgressiveWebAppsWork.jsx'
import InteractiveContentBenefitsEngagementStrategies from './pages/blogs/InteractiveContentBenefitsEngagementStrategies.jsx'
import WhatIsDeepseek from './pages/blogs/WhatIsDeepseek.jsx'
import HowToFetchAlexaRankingWithPHP from './pages/blogs/HowToFetchAlexaRankingWithPHP.jsx'
import DigitalMarketingMetrics from './pages/blogs/DigitalMarketingMetrics.jsx'
import OpenAI_O3Mini from './pages/blogs/OpenAI_O3Mini.jsx'
import AiAgingBreakthrough from './pages/blogs/AiAgingBreakthrough.jsx'
import HowToSetSmartMarketingGoals from './pages/blogs/HowToSetSmartMarketingGoals.jsx'
import AIResearchAssistant from './pages/blogs/AIResearchAssistant.jsx'
import WhatIsGreenMarketing from './pages/blogs/WhatIsGreenMarketing.jsx'
import WhatIsEatInSeoHowToImprove from './pages/blogs/WhatIsEatInSeoHowToImprove.jsx'
import WhatIsEmailMarketing from './pages/blogs/WhatIsEmailMarketing.jsx'
import WhatIsWhatsappMarketing from './pages/blogs/WhatIsWhatsappMarketing.jsx'

import WebDevelopment from './pages/services/WebDevelopment';
import DigitalMarketing from './pages/services/DigitalMarketing';
import ContentCreation from './pages/services/ContentCreation';
import SocialMediaManagement from './pages/services/SocialMediaManagement';
import MentorshipInternship from './pages/services/MentorshipInternship.jsx';
import MentorshipGuidence from './pages/services/MentorshipGuidence.jsx';
import InfluencerMarketing from './pages/services/InfluencerMarketing.jsx';
import Mentor from './pages/services/Mentor.jsx';
import WebDev from './pages/services/WebDev';
import DigiMark from './pages/services/DigiMark';
import ContentCreat from './pages/services/ContentCreat';
import SocialMedia from './pages/services/SocialMedia';
import DigiBlog from './pages/services/DigiBlog';

import AspireSportsClub from './pages/clients/AspireSportsClub.jsx';
import CadenceAcademy from './pages/clients/CadenceAcademy.jsx';
import KrushiUnnatiFarm from './pages/clients/KrushiUnnatiFarm.jsx'
import PdeaCoem from './pages/clients/PdeaCoem.jsx';
import CityEscape from './pages/clients/CityEscape.jsx';
import ShreeProperties from './pages/clients/ShreeProperties.jsx';
import AaGaming from './pages/clients/AaGaming.jsx';
import Hespro from './pages/clients/Hespro.jsx';
import Musitech from './pages/clients/Musitech.jsx';



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
import InquiryForm from './pages/InquiryForm.jsx';
import InquiryForms from './pages/InquiryForms.jsx';
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
        <Route path="/blogs/tech-pay-gap-india" element={<TechPayGapIndia />} />
        <Route path="/blogs/short-form-dramas-china" element={<ShortFormDramasChina />} />
        <Route path="/blogs/revolutionary-fanless-laptop-cooling" element={<RevolutionaryFanlessLaptopCooling />} />
        <Route path="/blogs/top-side-hustles-2025" element={<TopSideHustles2025 />} />
        <Route path="/blogs/genz-financial-trouble" element={<GenZFinancialTrouble />} />
        <Route path="/blogs/socialai-page" element={<SocialAIPage />} />
        <Route path="/blogs/blinkit-10-minute-ambulance-service" element={<Blinkit10MinuteAmbulanceService />} />
        <Route path="/blogs/large-action-models" element={<LargeActionModels />} />
        <Route path="/blogs/siri-privacy-blog" element={<SiriPrivacyBlog />} />
        <Route path="/blogs/openai-breaks-chess" element={<OpenAIBreaksChess />} />
        <Route path="/blogs/microsoft-investment" element={<MicrosoftInvestment />} />
        <Route path="/blogs/nvidia-rtx-5090-blog" element={<NvidiaRtx5090Blog />} />
        <Route path="/blogs/nvidia-digits" element={<NvidiaDigits />} />
        <Route path="/blogs/agenticai-article" element={<AgenticAIArticle />} />
        <Route path="/blogs/playstation-smell-feature" element={<PlayStationSmellFeature />} />
        <Route path="/blogs/meta-hiring-in-2025" element={<MetaHiringIn2025 />} />
        <Route path="/blogs/copilot-plan" element={<CopilotPlan />} />
        <Route path="/blogs/mahakumbh-2025-iit-bombay-engineer-journey" element={<Mahakumbh2025IITBombayEngineerJourney />} />
        <Route path="/blogs/ai-marketing-guide" element={<AIMarketingGuide />} />
        <Route path="/blogs/top-ai-tools-for-digital-marketing-in-2025" element={<TopAIToolsForDigitalMarketingIn2025 />} />
        <Route path="/blogs/machine-learning-advertising" element={<MachineLearningAdvertising />} />
        <Route path="/blogs/voice-search-optimization" element={<VoiceSearchOptimization />} />
        <Route path="/blogs/the-best-seo-strategies-for-2025" element={<TheBestSEOStrategiesFor2025 />} />
        <Route path="/blogs/optimize-site-for-voice-search-2025" element={<OptimizeSiteForVoiceSearch2025 />} />
        <Route path="/blogs/interactive-emails" element={<InteractiveEmails />} />
        <Route path="/blogs/mastering-email-marketing-automation-mailerlite" element={<MasteringEmailMarketingAutomationMailerlite />} />
        <Route path="/blogs/email-list-segmentation-2025" element={<EmailListSegmentation2025 />} />
        <Route path="/blogs/digital-marketing-trends-2025" element={<DigitalMarketingTrends2025 />} />
        <Route path="/blogs/digital-marketing-accessibility-2025" element={<DigitalMarketingAccessibility2025 />} />
        <Route path="/blogs/understanding-white-hat-black-hat-gray-hat-seo" element={<UnderstandingWhiteHatBlackHatGrayHatSeo />} />
        <Route path="/blogs/how-to-write-a-blog-post-from-start-to-finish"  element={<HowToWriteABlogPostFromStartToFinish />} />
        <Route path="/blogs/deepseek-r1-ai-open-source-revolution"  element={<DeepSeekR1AIOpenSourceRevolution />} />
        <Route path="/blogs/denta-water-ipo-review-2025"  element={<DentaWaterIPOReview2025 />} />
        <Route path='/blogs/decrease-page-load-time' element={<DecreasePageLoadTime />} />
        <Route path='/blogs/how-search-engines-work-crawling-indexing-ranking' element={<HowSearchEnginesWorkCrawlingIndexingRanking />} />
        <Route path='/blogs/driving-traffic-growth-with-competitor-keyword-analysi' element={<DrivingTrafficGrowthWithCompetitorKeywordAnalysi />} />
        <Route path='/blogs/the-new-approach-to-seo-that-changes-everything-in-2025' element={<TheNewApproachToSEOThatChangesEverythingIn2025 />} />
        <Route path="/blogs/seo-orphan-pages-guide"  element={<SeoOrphanPagesGuide />} />
        <Route path="/blogs/how-saas-companies-can-optimize-for-seo"  element={<HowSaasCompaniesCanOptimizeForSEO />} />
        <Route path="/blogs/how-to-upload-website-to-internet"  element={<HowToUploadWebsiteToInternet />} />
        <Route path="/blogs/what-is-a-pwa-how-progressive-web-apps-work"  element={<WhatIsAPwaHowProgressiveWebAppsWork />} />
        <Route path="/blogs/interactive-content-benefits-engagement-strategies"  element={<InteractiveContentBenefitsEngagementStrategies />} />
        <Route path="/blogs/what-is-deepseek"  element={<WhatIsDeepseek />} />
        <Route path="/blogs/how-to-fetch-alexa-ranking-with-php"  element={<HowToFetchAlexaRankingWithPHP />} />
        <Route path="/blogs/digital-marketing-metrics"  element={<DigitalMarketingMetrics />} />
        <Route path='/blogs/openai-o3-mini' element={<OpenAI_O3Mini />} />
        <Route path='/blogs/ai-aging-breakthrough' element={<AiAgingBreakthrough />} />
        <Route path='/blogs/how-to-set-smart-marketing-goals' element={<HowToSetSmartMarketingGoals />} />
        <Route path='/blogs/ai-research-assistant' element={<AIResearchAssistant />} />
        <Route path='/blogs/what-is-green-marketing' element={<WhatIsGreenMarketing />} />
        <Route path='/blogs/what-is-eat-in-seo-how-to-improve' element={<WhatIsEatInSeoHowToImprove />} />
        <Route path='/blogs/what-is-email-marketing' element={<WhatIsEmailMarketing/>} />
        <Route path='/blogs/what-is-whatsapp-marketing' element={<WhatIsWhatsappMarketing/>} />

        <Route path="/services/content-creat" element={<ContentCreat />} />
        <Route path="/services/social-media" element={<SocialMedia />} />
        <Route path="/services/web-dev" element={<WebDev />} />
        <Route path="/services/digi-blog" element={<DigiBlog />} />
        <Route path="/services/digi-make" element={<DigiMark />} />
        <Route path="/services/mentor" element={<Mentor />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/content-creation" element={<ContentCreation />} />
        <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
        <Route path="/services/mentorship-internship" element={<MentorshipInternship />} />
        <Route path="/services/mentorship-guidence" element={<MentorshipGuidence />} />
        <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
        <Route path="/clients/shree-properties" element={<ShreeProperties />} />
        <Route path="/clients/city-escape" element={<CityEscape />} />
        <Route path="/clients/pdea-coem" element={<PdeaCoem />} />
        <Route path='/clients/krushi-unnati-farm' element={<KrushiUnnatiFarm />} />
        <Route path="/clients/cadence-academy" element={<CadenceAcademy />} />
        <Route path="/clients/aspire-sports-club" element={<AspireSportsClub />} />
        <Route path='/clients/hespro' element={<Hespro />} />
        <Route path='/clients/aa-gaming' element={<AaGaming />} />
        <Route path='/clients/musitech' element={<Musitech />} />


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
        <Route path="/inquiryform" element={<InquiryForm />} />
        <Route path="/inquiryforms" element={<InquiryForms />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      </>
  );
}

export default App;

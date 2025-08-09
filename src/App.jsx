import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./Global.css";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Components/HomePage/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/ContactUs/ContactUs";
import WebsitePage from "./Components/WebsitePage/WebsitePage";
import SeoPage from "./Components/SeoPage/SeoPage";
import GoogleAdsPage from "./Components/GoogleAdsPage/GoogleAdsPage";
import SocialMediaPage from "./Components/SocialMediaPage/SocialMediaPage";
import ContentPage from "./Components/ContentPage/ContentPage";
import PaymentPage from "./Components/PaymentPage/PaymentPage";
import EmailPage from "./Components/EmailPage/EmailPage";
import SmsPage from "./Components/SmsPage/SmsPage";
import ScrollTo from "./Components/ScrollTo/ScrollTo";
import WhatsApp from "./Components/WhatsApp/WhatsApp";
import BlogPage from "./Components/BlogPage/BlogPage";
import ExploreSEO from "./Components/BlogPage/BlogInnerPages/ExploreSEO/ExploreSEO";
import { HelmetProvider } from "react-helmet-async";
import LandingPage1 from "./Components/LandingPage/LandingPage1/LandingPage1";
import SeoAuditPg from "./Components/LandingPage/LandingPage1/Lp1Service/NestedPages/SeoAuditPg";
import CompetitorAnalysis from "./Components/LandingPage/LandingPage1/Lp1Service/NestedPages/CompetitorAnalysis";
import ContentMarketing from "./Components/LandingPage/LandingPage1/Lp1Service/NestedPages/ContentMarketing";
import KeywordResearch from "./Components/LandingPage/LandingPage1/Lp1Service/NestedPages/KeywordResearch";
import SeoReporting from "./Components/LandingPage/LandingPage1/Lp1Service/NestedPages/SeoReporting";
import PopUp from "./Components/PopUp/PopUp";
import ImpOfPageSeo from "./Components/BlogPage/BlogInnerPages/ImpOnPageSeo/ImpOnPageSeo";
import GoogleAdsPower from "./Components/BlogPage/BlogInnerPages/GoogleAdsPower/GoogleAdsPower";
import LongTailKeywords from "./Components/BlogPage/BlogInnerPages/LongTailKeywords/LongTailKeywords";
import GooglePositioning from "./Components/BlogPage/BlogInnerPages/GooglePositioning/GooglePositioning";
import TechnicalSeoGuide from "./Components/BlogPage/BlogInnerPages/TechnicalSeoGuide/TechnicalSeoGuide";
import LocalSEOSecrets from "./Components/BlogPage/BlogInnerPages/LocalSEOSecrets/LocalSEOSecrets";
import WhatIsSeo from "./Components/BlogPage/BlogInnerPages/WhatIsSeo/WhatIsSeo";
import TransformingForeign from "./Components/BlogPage/BlogInnerPages/TransformingForeign/TransformingForeign";
import TopTenReasons from "./Components/BlogPage/BlogInnerPages/TopTenReasons/TopTenReasons";
import SeoServiceTours from "./Components/BlogPage/BlogInnerPages/SeoServiceTours/SeoServiceTours";
import SeoAttestationBoost from "./Components/BlogPage/BlogInnerPages/SeoAttestationBoost/SeoAttestationBoost";
import SlugPage from "./Components/SlugPage/SlugPage";
import CategoryPage from "./Components/BlogPage/Category";

function MainApp() {
  const location = useLocation();

  const hideNavbarPaths = [
    "/lp",
    "/lp/seo-audit",
    "/lp/keyword-research",
    "/lp/content-marketing",
    "/lp/competitor-analysis",
    "/lp/seo-reporting",
  ];

  return (
    <div className="App">
      {!hideNavbarPaths.includes(location.pathname) && <NavBar />}
      {!hideNavbarPaths.includes(location.pathname) && <ScrollTo />}

      <Routes>
        {/* Without country code */}
        <Route path="/" element={<HomePage />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="website-designing-services-in-bangalore" element={<WebsitePage />} />
        <Route path="seo-services-in-bangalore" element={<SeoPage />} />
        <Route path="google-ads-service-in-bangalore" element={<GoogleAdsPage />} />
        <Route path="social-media-marketing-services-in-bangalore" element={<SocialMediaPage />} />
        <Route path="content-writing-service-in-bangalore" element={<ContentPage />} />
        <Route path="payment-gateway-service-in-bangalore" element={<PaymentPage />} />
        <Route path="email-marketing-service-in-bangalore" element={<EmailPage />} />
        <Route path="sms-and-whatsapp-marketing-services-in-bangalore" element={<SmsPage />} />

        {/* Blog routes */}
        <Route path="blog" element={<BlogPage />} />
        <Route path="explore-seo-strategies-for-optimizing-ecommerce-stores" element={<ExploreSEO />} />
        <Route path="exploring-the-top-seo-services-to-boost-tours-and-travel-service-providers-in-bangalore" element={<SeoServiceTours />} />
        <Route path="local-seo-secrets-get-ahead-in-your-hometown" element={<LocalSEOSecrets />} />
        <Route path="how-seo-services-can-boost-attestation-service-providers-in-bangalore" element={<SeoAttestationBoost />} />
        <Route path="importance-of-on-page-seo-optimization-for-website" element={<ImpOfPageSeo />} />
        <Route path="the-comprehensive-technical-seo-guide" element={<TechnicalSeoGuide />} />
        <Route path="power-of-google-ads-why-its-essential-for-your-business" element={<GoogleAdsPower />} />
        <Route path="what-is-on-page-seo-why-it-is-important-for-every-websites" element={<WhatIsSeo />} />
        <Route path="transforming-foreign-language-school-of-bangalore" element={<TransformingForeign />} />
        <Route path="the-power-of-long-tail-keywords-how-to-find-and-use-them" element={<LongTailKeywords />} />
        <Route path="top-10-reasons-why-every-business-needs-an-seo-audit" element={<TopTenReasons />} />
        <Route path="google-search-engine-positioning-understanding-it-and-boosting-your-rankings" element={<GooglePositioning />} />
        <Route path=":slug" element={<SlugPage />} />
        <Route path="category/:category" element={<CategoryPage />} />

        {/* Landing page routes */}
        <Route path="lp" element={<LandingPage1 />}>
          <Route index element={<SeoAuditPg />} />
          <Route path="seo-audit" element={<SeoAuditPg />} />
          <Route path="keyword-research" element={<KeywordResearch />} />
          <Route path="content-marketing" element={<ContentMarketing />} />
          <Route path="competitor-analysis" element={<CompetitorAnalysis />} />
          <Route path="seo-reporting" element={<SeoReporting />} />
        </Route>

        {/* With dynamic country code */}
        <Route path=":countryCode">
          <Route index element={<HomePage />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="website-designing-services-in-bangalore" element={<WebsitePage />} />
          <Route path="seo-services-in-bangalore" element={<SeoPage />} />
          <Route path="google-ads-service-in-bangalore" element={<GoogleAdsPage />} />
          <Route path="social-media-marketing-services-in-bangalore" element={<SocialMediaPage />} />
          <Route path="content-writing-service-in-bangalore" element={<ContentPage />} />
          <Route path="payment-gateway-service-in-bangalore" element={<PaymentPage />} />
          <Route path="email-marketing-service-in-bangalore" element={<EmailPage />} />
          <Route path="sms-and-whatsapp-marketing-services-in-bangalore" element={<SmsPage />} />
        </Route>
      </Routes>

      <PopUp />
      <WhatsApp />
      {!hideNavbarPaths.includes(location.pathname) && <Footer />}
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

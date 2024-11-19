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
// Import other components here...

import { HelmetProvider } from "react-helmet-async";
import LandingPage1 from "./Components/LandingPage/LandingPage1/LandingPage1";
import SeoAuditPg from "./Components/LandingPage/LandingPage1/Lp1Service/NestedPages/SeoAuditPg";
import CompetitorAnalysis from "./Components/LandingPage/LandingPage1/Lp1Service/NestedPages/CompetitorAnalysis";
import ContentMarketing from "./Components/LandingPage/LandingPage1/Lp1Service/NestedPages/ContentMarketing";
import KeywordResearch from "./Components/LandingPage/LandingPage1/Lp1Service/NestedPages/KeywordResearch";
import SeoReporting from "./Components/LandingPage/LandingPage1/Lp1Service/NestedPages/SeoReporting";

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
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route
          path="/website-designing-services-in-bangalore"
          element={<WebsitePage />}
        />
        <Route path="/seo-services-in-bangalore" element={<SeoPage />} />
        <Route
          path="/google-ads-service-in-bangalore"
          element={<GoogleAdsPage />}
        />
        <Route
          path="/social-media-marketing-services-in-bangalore"
          element={<SocialMediaPage />}
        />
        <Route
          path="/content-writing-service-in-bangalore"
          element={<ContentPage />}
        />
        <Route
          path="/payment-gateway-service-in-bangalore"
          element={<PaymentPage />}
        />
        <Route
          path="/email-marketing-service-in-bangalore"
          element={<EmailPage />}
        />
        <Route
          path="/sms-and-whatsapp-marketing-services-in-bangalore"
          element={<SmsPage />}
        />
        <Route path="/blog" element={<BlogPage />} />
        <Route
          path="/explore-seo-strategies-for-optimizing-ecommerce-stores"
          element={<ExploreSEO />}
        />
        <Route path="/lp" element={<LandingPage1 />}>
          <Route path="/lp" element={<SeoAuditPg />} />
          <Route path="/lp/seo-audit" element={<SeoAuditPg />} />

          <Route path="/lp/keyword-research" element={<KeywordResearch />} />
          <Route path="/lp/content-marketing" element={<ContentMarketing />} />
          <Route
            path="/lp/competitor-analysis"
            element={<CompetitorAnalysis />}
          />
          <Route path="/lp/seo-reporting" element={<SeoReporting />} />
        </Route>
      </Routes>
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

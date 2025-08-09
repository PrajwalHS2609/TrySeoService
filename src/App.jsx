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
        <Route path="/" element={<HomePage />} />
        <Route path="/in" element={<HomePage />} />
        <Route path="/us" element={<HomePage />} />
        <Route path="/uk" element={<HomePage />} />
        <Route path="/ca" element={<HomePage />} />
        <Route path="/au" element={<HomePage />} />
        <Route path="/de" element={<HomePage />} />
        <Route path="/fr" element={<HomePage />} />
        <Route path="/jp" element={<HomePage />} />
        {/* -------------------------------------------------------------------------------------------------------------- */}
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="in/contact-us" element={<ContactUs />} />
        <Route path="us/contact-us" element={<ContactUs />} />
        <Route path="ca/contact-us" element={<ContactUs />} />
        <Route path="au/contact-us" element={<ContactUs />} />
        <Route path="fr/contact-us" element={<ContactUs />} />
        <Route path="de/contact-us" element={<ContactUs />} />
        {/* -------------------------------------------------------------------------------------------------------------- */}
        <Route
          path="/website-designing-services-in-bangalore"
          element={<WebsitePage />}
        />
        <Route
          path="in/website-designing-services-in-bangalore"
          element={<WebsitePage />}
        />
        <Route
          path="us/website-designing-services-in-bangalore"
          element={<WebsitePage />}
        />
        <Route
          path="ca/website-designing-services-in-bangalore"
          element={<WebsitePage />}
        />{" "}
        <Route
          path="au/website-designing-services-in-bangalore"
          element={<WebsitePage />}
        />{" "}
        <Route
          path="de/website-designing-services-in-bangalore"
          element={<WebsitePage />}
        />
        {/* -------------------------------------------------------------------------------------------------------------- */}
        <Route path="/seo-services-in-bangalore" element={<SeoPage />} />
        <Route path="in/seo-services-in-bangalore" element={<SeoPage />} />
        <Route path="us/seo-services-in-bangalore" element={<SeoPage />} />
        <Route path="de/seo-services-in-bangalore" element={<SeoPage />} />
        <Route path="au/seo-services-in-bangalore" element={<SeoPage />} />
        <Route path="fr/seo-services-in-bangalore" element={<SeoPage />} />
        <Route path="ca/seo-services-in-bangalore" element={<SeoPage />} />
        {/* -------------------------------------------------------------------------------------------------------------- */}
        <Route
          path="/google-ads-service-in-bangalore"
          element={<GoogleAdsPage />}
        />
        <Route
          path="in/google-ads-service-in-bangalore"
          element={<GoogleAdsPage />}
        />
        <Route
          path="us/google-ads-service-in-bangalore"
          element={<GoogleAdsPage />}
        />
        <Route
          path="de/google-ads-service-in-bangalore"
          element={<GoogleAdsPage />}
        />
        <Route
          path="ca/google-ads-service-in-bangalore"
          element={<GoogleAdsPage />}
        />
        <Route
          path="au/google-ads-service-in-bangalore"
          element={<GoogleAdsPage />}
        />
        <Route
          path="fr/google-ads-service-in-bangalore"
          element={<GoogleAdsPage />}
        />
        {/* -------------------------------------------------------------------------------------------------------------- */}
        <Route
          path="/social-media-marketing-services-in-bangalore"
          element={<SocialMediaPage />}
        />
        <Route
          path="us/social-media-marketing-services-in-bangalore"
          element={<SocialMediaPage />}
        />
        <Route
          path="ca/social-media-marketing-services-in-bangalore"
          element={<SocialMediaPage />}
        />
        <Route
          path="in/social-media-marketing-services-in-bangalore"
          element={<SocialMediaPage />}
        />
        <Route
          path="fr/social-media-marketing-services-in-bangalore"
          element={<SocialMediaPage />}
        />
        <Route
          path="de/social-media-marketing-services-in-bangalore"
          element={<SocialMediaPage />}
        />
        {/* -------------------------------------------------------------------------------------------------------------- */}
        <Route
          path="/content-writing-service-in-bangalore"
          element={<ContentPage />}
        />
        <Route
          path="in/content-writing-service-in-bangalore"
          element={<ContentPage />}
        />
        <Route
          path="fr/content-writing-service-in-bangalore"
          element={<ContentPage />}
        />
        <Route
          path="de/content-writing-service-in-bangalore"
          element={<ContentPage />}
        />
        <Route
          path="us/content-writing-service-in-bangalore"
          element={<ContentPage />}
        />
        <Route
          path="uk/content-writing-service-in-bangalore"
          element={<ContentPage />}
        />
        <Route
          path="au/content-writing-service-in-bangalore"
          element={<ContentPage />}
        />
        {/* -------------------------------------------------------------------------------------------------------------- */}
        <Route
          path="/payment-gateway-service-in-bangalore"
          element={<PaymentPage />}
        />
        <Route
          path="in/payment-gateway-service-in-bangalore"
          element={<PaymentPage />}
        />
        <Route
          path="us/payment-gateway-service-in-bangalore"
          element={<PaymentPage />}
        />
        <Route
          path="uk/payment-gateway-service-in-bangalore"
          element={<PaymentPage />}
        />
        <Route
          path="de/payment-gateway-service-in-bangalore"
          element={<PaymentPage />}
        />
        <Route
          path="fr/payment-gateway-service-in-bangalore"
          element={<PaymentPage />}
        />
        <Route
          path="au/payment-gateway-service-in-bangalore"
          element={<PaymentPage />}
        />
        {/* -------------------------------------------------------------------------------------------------------------- */}
        <Route
          path="/email-marketing-service-in-bangalore"
          element={<EmailPage />}
        />
        <Route
          path="in/email-marketing-service-in-bangalore"
          element={<EmailPage />}
        />
        <Route
          path="us/email-marketing-service-in-bangalore"
          element={<EmailPage />}
        />
        <Route
          path="uk/email-marketing-service-in-bangalore"
          element={<EmailPage />}
        />
        <Route
          path="au/email-marketing-service-in-bangalore"
          element={<EmailPage />}
        />{" "}
        <Route
          path="de/email-marketing-service-in-bangalore"
          element={<EmailPage />}
        />
        <Route
          path="fr/email-marketing-service-in-bangalore"
          element={<EmailPage />}
        />
        {/* -------------------------------------------------------------------------------------------------------------- */}
        <Route
          path="/sms-and-whatsapp-marketing-services-in-bangalore"
          element={<SmsPage />}
        />
        <Route
          path="in/sms-and-whatsapp-marketing-services-in-bangalore"
          element={<SmsPage />}
        />
        <Route
          path="us/sms-and-whatsapp-marketing-services-in-bangalore"
          element={<SmsPage />}
        />
        <Route
          path="au/sms-and-whatsapp-marketing-services-in-bangalore"
          element={<SmsPage />}
        />
        <Route
          path="uk/sms-and-whatsapp-marketing-services-in-bangalore"
          element={<SmsPage />}
        />
        <Route
          path="de/sms-and-whatsapp-marketing-services-in-bangalore"
          element={<SmsPage />}
        />
        <Route
          path="fr/sms-and-whatsapp-marketing-services-in-bangalore"
          element={<SmsPage />}
        />
        {/* ------------------------Blog----------------------------------- */}
        <Route path="/blog" element={<BlogPage />} />
        <Route
          path="/explore-seo-strategies-for-optimizing-ecommerce-stores"
          element={<ExploreSEO />}
        />
        <Route
          path="/exploring-the-top-seo-services-to-boost-tours-and-travel-service-providers-in-bangalore"
          element={<SeoServiceTours />}
        />
        <Route
          path="/local-seo-secrets-get-ahead-in-your-hometown"
          element={<LocalSEOSecrets />}
        />
        <Route
          path="/how-seo-services-can-boost-attestation-service-providers-in-bangalore"
          element={<SeoAttestationBoost />}
        />
        <Route
          path="/importance-of-on-page-seo-optimization-for-website"
          element={<ImpOfPageSeo />}
        />
        <Route
          path="/the-comprehensive-technical-seo-guide"
          element={<TechnicalSeoGuide />}
        />
        <Route
          path="/power-of-google-ads-why-its-essential-for-your-business"
          element={<GoogleAdsPower />}
        />
        <Route
          path="/what-is-on-page-seo-why-it-is-important-for-every-websites"
          element={<WhatIsSeo />}
        />
        <Route
          path="/transforming-foreign-language-school-of-bangalore"
          element={<TransformingForeign />}
        />
        <Route
          path="/the-power-of-long-tail-keywords-how-to-find-and-use-them"
          element={<LongTailKeywords />}
        />
        <Route
          path="/top-10-reasons-why-every-business-needs-an-seo-audit"
          element={<TopTenReasons />}
        />
        <Route
          path="/google-search-engine-positioning-understanding-it-and-boosting-your-rankings"
          element={<GooglePositioning />}
        />
        <Route path="/:slug" element={<SlugPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        {/* ------------------------/Blog----------------------------------- */}
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

import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import LocalSEOSecrets from "./Components/BlogPage/BlogInnerPages/LocalSEOSecrets/LocalSEOSecrets";
import ImpOfPageSeo from "./Components/BlogPage/BlogInnerPages/ImpOnPageSeo/ImpOnPageSeo";
import TechnicalSeoGuide from "./Components/BlogPage/BlogInnerPages/TechnicalSeoGuide/TechnicalSeoGuide";
import SeoAttestationBoost from "./Components/BlogPage/BlogInnerPages/SeoAttestationBoost/SeoAttestationBoost";
import GoogleAdsPower from "./Components/BlogPage/BlogInnerPages/GoogleAdsPower/GoogleAdsPower";
import SeoServiceTours from "./Components/BlogPage/BlogInnerPages/SeoServiceTours/SeoServiceTours";
import WhatIsSeo from "./Components/BlogPage/BlogInnerPages/WhatIsSeo/WhatIsSeo";
import TransformingForeign from "./Components/BlogPage/BlogInnerPages/TransformingForeign/TransformingForeign";
import LongTailKeywords from "./Components/BlogPage/BlogInnerPages/LongTailKeywords/LongTailKeywords";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <ScrollTo />
          <Routes>
            <Route path="/" element={<HomePage />} />
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
            <Route path="/contact-us" element={<ContactUs />} />
            {/* ----------------------------BLOG PAGE---------------------------------*/}
            <Route path="/blog" element={<BlogPage />} />
            <Route
              path="/explore-seo-strategies-for-optimizing-ecommerce-stores"
              element={<ExploreSEO />}
            />
            <Route
              path="/local-seo-secrets-get-ahead-in-your-hometown"
              element={<LocalSEOSecrets />}
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
              path="/how-seo-services-can-boost-attestation-service-providers-in-bangalore"
              element={<SeoAttestationBoost />}
            />
            <Route
              path="/power-of-google-ads-why-its-essential-for-your-business"
              element={<GoogleAdsPower />}
            />
            <Route
              path="/exploring-the-top-seo-services-to-boost-tours-and-travel-service-providers-in-bangalore"
              element={<SeoServiceTours />}
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
          </Routes>
          <WhatsApp />
          <Footer />
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;

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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <ScrollTo/>
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
        </Routes>
        <WhatsApp/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

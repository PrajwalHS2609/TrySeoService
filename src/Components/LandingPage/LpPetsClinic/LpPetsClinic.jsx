import React from "react";
import LpPetsHeader from "./LpPetsHeader/LpPetsHeader";
import LpPetsNavbar from "./LpPetsNavbar/LpPetsNavbar";
import LpPetsSolution from "./LpPetsSolution/LpPetsSolution";
import LpPetsBusiness from "./LpPetsBusiness/LpPetsBusiness";
import LpPetsContact from "./LpPetsContact/LpPetsContact";
import LpPetsFooter from "./LpPetsFooter/LpPetsFooter";
import LpPetsComp from "./LpPetsComp/LpPetsComp";
import LpPetsProcess from "./LpPetsProcess/LpPetsProcess";
import LpPetsMarquee from "./LpPetsMarquee/LpPetsMarquee";
import LpPetsTestimonial from "./LpPetsTestimonial/LpPetsTestimonial";
import { useEffect } from "react";

const LpPetsClinic = () => {
  useEffect(() => {
    (function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );

    if (window.fbq) {
      window.fbq("init", "1801995990265972");
      window.fbq("track", "PageView");
    }
  }, []);

  return (
    <div>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
            <img
              height="1"
              width="1"
              style="display:none"
              src="https://www.facebook.com/tr?id=1801995990265972&ev=PageView&noscript=1"
              alt="facebook pixel"
            />
          `,
        }}
      />
      <LpPetsNavbar />
      <LpPetsHeader />
      <LpPetsSolution />
      <LpPetsBusiness />
      <LpPetsComp />
      <LpPetsProcess />
      <LpPetsMarquee />
      <LpPetsTestimonial />
      <LpPetsContact />
      <LpPetsFooter />
    </div>
  );
};

export default LpPetsClinic;

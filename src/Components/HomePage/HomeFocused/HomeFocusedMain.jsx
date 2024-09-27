import React from "react";
import HomeFocusedCard from "./HomeFocusedCard";
import {
  faStethoscope,
  faHospital,
  faBed,
  faMugHot,
  faPersonSwimming,
  faDumbbell,
  faPlane,
  faPassport,
  faBookOpen,
  faChild,
  faChalkboard,
  faSpa,
  faCar,
  faScrewdriverWrench,
  faCakeCandles,
  faChampagneGlasses,
  faGem,
  faCamera,
  faHouseChimney,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
const HomeFocusedMain = () => {
  return (
    <div className="homeFocusedMain">
      <HomeFocusedCard focusIcon={faStethoscope} txt="Vet & Doctors" />
      <HomeFocusedCard focusIcon={faHospital} txt="Clinic & Hospitals" />
      <HomeFocusedCard focusIcon={faBed} txt="Hotel & Resorts" />
      <HomeFocusedCard focusIcon={faMugHot} txt="Cafe & Restaurants" />
      <HomeFocusedCard
        focusIcon={faPersonSwimming}
        txt="Social & Sports Club"
      />
      <HomeFocusedCard focusIcon={faDumbbell} txt="Gym & Yoga Center" />
      <HomeFocusedCard focusIcon={faPlane} txt="Tour & Travels" />
      <HomeFocusedCard focusIcon={faPassport} txt="Visa & Attestations" />
      <HomeFocusedCard focusIcon={faBookOpen} txt="School & Colleges" />
      <HomeFocusedCard focusIcon={faChild} txt="Kidergartens" />
      <HomeFocusedCard focusIcon={faChalkboard} txt="Coaching Institute" />
      <HomeFocusedCard focusIcon={faSpa} txt="Spa & Beauty Parlor" />
      <HomeFocusedCard focusIcon={faCar} txt="Car Rentals" />
      <HomeFocusedCard focusIcon={faScrewdriverWrench} txt="Repair Services" />
      <HomeFocusedCard focusIcon={faCakeCandles} txt="Banquet Halls" />
      <HomeFocusedCard focusIcon={faChampagneGlasses} txt="Catering Services" />
      <HomeFocusedCard focusIcon={faGem} txt="Jewelry Shops" />
      <HomeFocusedCard focusIcon={faCamera} txt="Video & Photography" />
      <HomeFocusedCard focusIcon={faHouseChimney} txt="Real Estate" />
      <HomeFocusedCard focusIcon={faShoppingBag} txt="Fashion" />
    </div>
  );
};

export default HomeFocusedMain;

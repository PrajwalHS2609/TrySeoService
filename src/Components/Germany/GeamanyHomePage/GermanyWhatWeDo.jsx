import React from "react";
import BlobAnim from "../../HomePage/BlobAnim";
import { NavHashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import homeWhatWe from "./../../../Img/homePgImgs/homeWhatWeDo.jpg";

const GermanyWhatWeDo = () => {
  return (
    <div className="homeWhatWeContainer">
      <div className="homeWhatWeContent1">
        <div className="homeWhatWeHeader">
          <h6>WHAT WE DO</h6>
          <h2>SEO Analytics & Strategy Skill</h2>
          <p>
            <span> TrySeoServices.Com </span>is your all-in-one digital partner
            for everything related to web presence and online growth. We believe
            that personalized website development is not just a service—it’s a
            transformative journey. Our goal is to help French businesses build
            a strong digital identity that positions them ahead of competitors
            and gives them a global advantage through high-impact digital
            marketing in Bangalore.
          </p>
          <p>
            Our digital marketing services in Bangalore are designed to meet
            every need of your growing business. From strategic planning to
            creative execution, our dedicated designers and marketing
            professionals work hand in hand to craft solutions that elevate your
            brand visibility, attract qualified leads, and drive measurable
            growth. We take the time to understand your market, analyze
            performance data, and adapt strategies that deliver long-term
            results.
          </p>
          <p>
            With deep expertise in Search Engine Optimization (SEO) and App
            Development, we make it effortless for you to achieve your digital
            goals. Whether you aim to boost your website’s visibility, build a
            mobile app, or create powerful digital campaigns, we bring
            innovation and precision to every step. At TrySeoServices.com, we
            ensure every project reflects your brand’s essence—modern, engaging,
            and built for success.
          </p>
          <p>
            Our team stays at the forefront of digital trends, providing
            end-to-end solutions—from Digital Marketing and SEO to App and
            Software Development—that help your business thrive in today’s
            competitive landscape. With us, you don’t just get a service; you
            gain a strategic digital partner committed to your online success,
            both in France and beyond.
          </p>
          <div className="homeWhatWeBtn">
            <NavHashLink to="#Services">
              <button>
                Explore Our Services{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="homeArrow"
                ></FontAwesomeIcon>
              </button>
            </NavHashLink>
          </div>
        </div>
      </div>
      <div className="homeWhatWeContent2">
        <div className="blobContain">
          <BlobAnim />
        </div>
        <img src={homeWhatWe} alt="homeWhatWe" />
      </div>
    </div>
  );
};

export default GermanyWhatWeDo;

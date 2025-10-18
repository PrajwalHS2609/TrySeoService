import React from "react";
import "./SeoPackage.css";
import { FaRegCircleXmark } from "react-icons/fa6";
import { MdCheckCircleOutline } from "react-icons/md";

const SeoPackage = () => {
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="seoPackageTable-container">
      <div className="seoPackageTable-Head">
        <h2>Our SEO Packages</h2>
        <p>
          For High Quality Traffic, Qualified Leads, Online Sales, Maximum
          Reach, & Search Rankings.
        </p>
      </div>
      <table className="seoPackageTable-content">
        <thead>
          <tr>
            <th>Seo Package</th>
            <th>On-Page SEO</th>
            <th>Local SEO</th>
            <th>City SEO</th>
            <th>State SEO</th>
            <th>National SEO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Google My Business</th>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>Website SEO Analysis</th>
            <td>
              <FaRegCircleXmark className="seoPackageTable-crossIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>Competitor Analysis</th>
            <td>
              <FaRegCircleXmark className="seoPackageTable-crossIco" />
            </td>
            <td>
              <FaRegCircleXmark className="seoPackageTable-crossIco" />
            </td>
            <td>
              <FaRegCircleXmark className="seoPackageTable-crossIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>Website Architecture</th>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>Keyword Research</th>
            <td>
              <FaRegCircleXmark className="seoPackageTable-crossIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>Title Optimization</th>

            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>Content Optimization</th>

            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>Content Optimization</th>

            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>Internal Linking</th>

            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>URL Optimization</th>

            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>Image Optimization</th>

            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>Heading's Optimization</th>

            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>Error Fixing</th>

            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>Google Product's Integration</th>

            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>Search Engine Crawling</th>

            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>Website Speed Optimization</th>

            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>Google Map Optimization</th>

            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>CTA Creation</th>

            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>Content Highlight in SERP</th>

            <td>
              <FaRegCircleXmark className="seoPackageTable-crossIco" />
            </td>
            <td>
              <FaRegCircleXmark className="seoPackageTable-crossIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>SEO Consultation</th>

            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>100% Guaranteed Result</th>

            <td>
              <FaRegCircleXmark className="seoPackageTable-crossIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>Keyword's Ranking Report</th>

            <td>
              <FaRegCircleXmark className="seoPackageTable-crossIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>Call & What's App Support</th>

            <td>
              <FaRegCircleXmark className="seoPackageTable-crossIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>Price</th>
            <td>₹10000/one time</td>
            <td>₹10000/monthly</td>
            <td>₹15000/monthly</td>
            <td>₹25000/monthly</td>
            <td>₹40000/monthly</td>
          </tr>
          <tr>
            <td></td>

            <td>
              <button onClick={handlePopUp}>Choose Plan</button>
            </td>
            <td>
              <button onClick={handlePopUp}>Choose Plan</button>
            </td>
            <td>
              <button onClick={handlePopUp}>Choose Plan</button>
            </td>
            <td>
              <button onClick={handlePopUp}>Choose Plan</button>
            </td>
            <td>
              <button onClick={handlePopUp}>Choose Plan</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SeoPackage;

import React from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { MdCheckCircleOutline } from "react-icons/md";

const GoogleAdsPackage = () => {
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="seoPackageTable-container" id="pricing">
      <div className="seoPackageTable-Head">
        <h2>Google Ads Campaign Packages</h2>
        <p>
          For High Quality Traffic, Qualified Leads, Online Sales, Maximum
          Reach, & Search Rankings.
        </p>
      </div>
      <table className="seoPackageTable-content">
        <thead>
          <tr>
            <th>Google Ads Packages</th>
            <th>Campaign Set Up</th>
            <th>City Ad Campaign</th>
            <th>National Ad Campaign</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Campaign Set Up</th>
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
            <th>Text, Video, Banner Ad's</th>
            <td>
              <FaRegCircleXmark className="seoPackageTable-crossIco" />
              {" "}
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
            <th>Landing Page Analysis</th>
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
            <th>Conversion Tracking</th>
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
            <th>Conversion Optimization</th>
            <td>
              <FaRegCircleXmark className="seoPackageTable-crossIco" />
            </td>
            <td>
              <FaRegCircleXmark className="seoPackageTable-crossIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>Daily Campaign Monitoring</th>
            <td>
              <FaRegCircleXmark className="seoPackageTable-crossIco" />
            </td>
            <td>
              <FaRegCircleXmark className="seoPackageTable-crossIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>Ad Copy Design</th>
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
          </tr>
          <tr>
            <th>A/B Testing</th>
            <td>
              <FaRegCircleXmark className="seoPackageTable-crossIco" />
            </td>
            <td>
              <FaRegCircleXmark className="seoPackageTable-crossIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>Re-Marketing</th>
            <td>
              <FaRegCircleXmark className="seoPackageTable-crossIco" />
            </td>
            <td>
              <FaRegCircleXmark className="seoPackageTable-crossIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>Bid Management</th>
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
            <th>Google Products Integration</th>
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
            <th>100% Guaranteed ROI</th>
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
            <th>Weekly Performance Report</th>
            <td>
              <FaRegCircleXmark className="seoPackageTable-crossIco" />
            </td>
            <td>
              <FaRegCircleXmark className="seoPackageTable-crossIco" />
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
          </tr>
          <tr>
            <th>Price</th>
            <td>₹15000/monthly</td>
            <td>₹20000/monthly</td>
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
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GoogleAdsPackage;

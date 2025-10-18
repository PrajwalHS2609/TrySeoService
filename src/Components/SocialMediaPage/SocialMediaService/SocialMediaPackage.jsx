import React from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { MdCheckCircleOutline } from "react-icons/md";
import { HiOutlineExclamationCircle } from "react-icons/hi";
const SocialMediaPackage = () => {
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="seoPackageTable-container">
      <div className="seoPackageTable-Head">
        <h2>Unbeatable Pricing Find Your Perfect Plan Now</h2>
        {/* <p>
          For High Quality Traffic, Qualified Leads, Online Sales, Maximum
          Reach, & Search Rankings.
        </p> */}
      </div>
      <table className="seoPackageTable-content">
        <thead>
          <tr>
            <th>Social Media Packages</th>
            <th>Campaign Set Up</th>
            <th>Service Ad Campaign</th>
            <th>e-Commerce Ad Campaign</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Campaign Set Up</th>
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
            <th>Competitor Analysis</th>
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
            <th>Ad Spend</th>
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
            <th>Campaign Design</th>
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
            <th>Image & Video Ad's</th>
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
            <th>Ad Copy Design</th>
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
            <th>Re-Targeting</th>
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
              <FaRegCircleXmark className="seoPackageTable-crossIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>
          <tr>
            <th>Products Catalogue Creation</th>
            <td>
              <FaRegCircleXmark className="seoPackageTable-crossIco" />
            </td>
            <td>
              <FaRegCircleXmark className="seoPackageTable-crossIco" />
            </td>
            <td>
              <MdCheckCircleOutline className="seoPackageTable-checkIco" />
            </td>
          </tr>{" "}
          <tr>
            <th>Marketing Consultation</th>
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
          </tr>
          <tr>
            <th>Price</th>
            <td>₹15000/monthly</td>
            <td>₹2500/monthly</td>
            <td>₹30000/monthly</td>
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

export default SocialMediaPackage;

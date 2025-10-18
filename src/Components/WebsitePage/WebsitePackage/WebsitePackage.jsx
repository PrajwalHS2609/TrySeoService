import React from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { MdCheckCircleOutline } from "react-icons/md";
const WebsitePackage = () => {
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="seoPackageTable-container" id="pricing">
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
            <th>Website Packages</th>
            <th>Basic</th>
            <th>Premium</th>
            <th>e-Commerce</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Domain*</th>
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
            <th>SSD Hosting*</th>
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
            <th>SSL Certificate*</th>
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
            <th>20 to 50 Pages</th>
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
            <th>Premium Theme</th>
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
            <th>Dynamic/eCommerce Website</th>
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
            <th>Responsive Design</th>
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
            <th>React JS, & eCommerce Platform</th>
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
            <th>Image & Video Gallery</th>
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
            <th>W3C Validation</th>
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
            <th>Advanced SEO</th>
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
            <th>Social Media Integration</th>
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
            <th>Chat/Whats App Integration</th>
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
            <td>₹15000/monthly</td>
            <td>₹2500/monthly</td>
            <td>₹50000/monthly</td>
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

export default WebsitePackage;

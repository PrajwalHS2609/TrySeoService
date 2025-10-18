import React from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { MdCheckCircleOutline } from "react-icons/md";
const ContentServicePackage = () => {
    const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "flex";
  };
  return (
    <div className="seoPackageTable-container">
      <div className="seoPackageTable-Head">
        <h2>Our SEO Content Packages</h2>
        {/* <p>
          For High Quality Traffic, Qualified Leads, Online Sales, Maximum
          Reach, & Search Rankings.
        </p> */}
      </div>
      <table className="seoPackageTable-content">
        <thead>
          <tr>
            <th>Content Packages</th>
            <th>Content</th>
            <th>SEO Content</th>
            <th>Content Management</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>100% Unique Content</th>
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
            <th>Min - 500 Words</th>
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
            <th>Website/Promotion Content</th>
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
            <th>Product/Service Content</th>
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
            <th>Content Guidelines</th>
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
          </tr>
          <tr>
            <th>Catchy Headings</th>
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
            <th>1 Time Revision</th>
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
            <th>Deliver in Word Doc, PDF & TXT File</th>
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
            <th>Call & WhatsApp Support</th>
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
            <td>₹0.40 / word</td>
            <td>₹0.50/word</td>
            <td>₹0.30/word</td>
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

export default ContentServicePackage;

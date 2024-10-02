import React from "react";
import BlogHeader from "../../BlogHeader";
import WhatIsSeoHead from "./WhatIsSeoHead";
import WhatIsSeoFollow from "./WhatIsSeoFollow";

const WhatIsSeo = () => {
  return (
    <div className="homePageContainer">
      <BlogHeader />
      <WhatIsSeoHead />
      <WhatIsSeoFollow />
    </div>
  );
};

export default WhatIsSeo;

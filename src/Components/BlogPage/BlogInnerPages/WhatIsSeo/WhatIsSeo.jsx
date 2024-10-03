import React from "react";
import WhatIsSeoHead from "./WhatIsSeoHead";
import WhatIsSeoFollow from "./WhatIsSeoFollow";
import ExploreSEOHeader from "../ExploreSEO/ExploreSEOHeader";

const WhatIsSeo = () => {
  return (
    <div className="homePageContainer">
      <ExploreSEOHeader head="Blog" txt="Blog" />
       <WhatIsSeoHead />
      <WhatIsSeoFollow />
    </div>
  );
};

export default WhatIsSeo;

import React from "react";

import { LoaderSection } from "./Loader.styles";

const Loader = () => {
  return (
    <LoaderSection>
      <img
        src="https://community.atlassian.com/t5/image/serverpage/image-id/57427i166C9CCAD361EF2F/image-dimensions/156x156?v=v2"
        alt="Genie Image"
        style={{ width: "100px", height: "100px" }}
      />
      <h1 style={{ fontSize: "3rem", marginTop: "1rem" }}>Travel</h1>
    </LoaderSection>
  );
};

export default Loader;

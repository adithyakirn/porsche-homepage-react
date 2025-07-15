import React from "react";
import ASCIIText from "./CurvedLoop";
import CurvedLoop from "./CurvedLoop";

function Error404() {
  return (
    <>
    <div className="bg-black">
      <CurvedLoop  marqueeText="404 ✦ Error ✦ Page ✦ Not ✦ Found ✦"  speed={3}  curveAmount={500}  direction="right"  interactive={true}  className="custom-text-style"/>
      </div>
    </>
  );
}

export default Error404;

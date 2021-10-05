import React from "react";
import Image from "./image/part.png";
import "./setupart.css";

const Parti = () => {
  return (
    <>
      <img src={Image} />
      <div className="part-text">
        <p style={{ textAlign: "center" }}>cfdisk /dev/partionation</p>
        <p style={{ textAlign: "center" }}>Delete everything</p>
        <p style={{ textAlign: "center" }}>Create and save</p>
      </div>
      <article style={{ marginTop: "20px" }}>
        You may have nvmeon1 or sda.
      </article>
    </>
  );
};

export default Parti;

import React from "react";
import WIFI from "./wifi-component/wifi-comp";
import Part from "./particionamento-compo/part";
import "./comp.css";

const Component = () => {
  return (
    <>
      <article
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h2 className="tag-titl">ARCH LINUX INSTALL</h2>

        <div className="keyboard-conf">
          <ol>
            <li>KEYBOARD CONFIG : </li>
            <div className="text-desc">
              <p
                style={{
                  textAlign: "center",
                  marginTop: "5px",
                }}
              >
                loadkeys br-abnt2
              </p>
            </div>
            <li style={{ marginTop: "30px" }}> WIFI CONNECT :</li>
            <WIFI />
            <p style={{ color: "yellow" }}>Use: timedate set-ntp true </p>
            <li style={{ marginTop: "30px" }}>PARTICIONATION :</li>
            <Part />
            <li style={{ marginTop: "30px" }}>PACKAGES :</li>
            we
          </ol>
        </div>
      </article>
    </>
  );
};

export default Component;

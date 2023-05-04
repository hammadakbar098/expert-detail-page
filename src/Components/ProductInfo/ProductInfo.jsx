import React, { useState } from "react";
import Style from "./ProductInfo.module.css";
import { lady, injection, calender } from "@/Assets";
import Image from "next/image";

export const ProductInfo = () => {
  const [info, setInfo] = useState([
    {
      hr: true,
      icon: injection,
      heading: "No Injections",
      detail:
        "No needles or injections With each session, the hair becomes softer and thinner, and their number decreases",
    },
    {
      hr: true,
      icon: calender,
      heading: "Weekly Sessions",
      detail:
        "With each session, the hair becomes softer and thinner, and their number decreases Result after 3 treatments and was very effective.",
    },
    {
      hr: false,
      icon: lady,
      heading: "Enhance Beauty",
      detail:
        "In perspective several years laser epilation more profitable than and through sugaring number decreases.",
    },
  ]);
  return (
    <div className={Style.infoContainer}>
      {info.map((item, index) => {
        return (
          <>
            <div className={Style.infoChild} key={index}>
              <Image
                src={item.icon}
                alt="iconApp"
                className={Style.iconImage}
              />
              <div>
                <p className={Style.infoHeading}>{item.heading}</p>
                <p className={Style.infoTitle}>{item.detail}</p>
              </div>
            </div>
            {item.hr && <hr />}
          </>
        );
      })}
    </div>
  );
};

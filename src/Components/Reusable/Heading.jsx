import React from "react";
import Styles from "./Heading.module.css";

export const Heading = ({ blackText, redText, info }) => {
  return (
    <div>
      <p className={Styles.testimonialsHeading}>
        <span>{blackText}</span>{" "}
        <span className={Styles.testimonialsHeadingRed}>{redText}</span>
      </p>
      <p className={Styles.testimonialCustomerCount}>{info}</p>
    </div>
  );
};

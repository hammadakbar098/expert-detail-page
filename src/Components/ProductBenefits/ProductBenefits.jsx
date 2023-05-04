import React from "react";
import Styles from "./ProductBenefits.module.css";
import { Heading } from "../Reusable/Heading";
import Image from "next/image";
import { benefits, userProfile } from "@/Assets";

export const ProductBenefits = () => {
  return (
    <div className={Styles.productBenifitsContainer}>
      <Heading
        blackText={"Why should you use"}
        redText={"Sunspots Freckle Removal?"}
      />
      <div className={Styles.producBenefitsContainerSection}>
        {/* First section */}
        <div
          style={{ marginBottom: "-40px" }}
          className={Styles.productBenefitsLine}
        >
          <div className={Styles.productReasonCard}>
            <Image
              src={benefits}
              alt="Benefits"
              className={Styles.productBenefitsImage}
            />
            <div className={Styles.benefitsProductDetailSection}>
              <div className={Styles.productBenefitsReason}>
                <p>TREATMENT</p>
              </div>
              <p className={Styles.productBenefitsReasonDetails}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                commodo commodo nunc. Fusce ac nibh
              </p>
            </div>
          </div>
          <div className={Styles.productReasonCard}>
            <div className={Styles.benefitsProductDetailSection}>
              <div className={Styles.productBenefitsReason}>
                <p>MOISTENING</p>
              </div>
              <p className={Styles.productBenefitsReasonDetails}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                commodo commodo nunc. Fusce ac nibh
              </p>
            </div>
            <Image
              src={benefits}
              alt="Benefits"
              className={Styles.productBenefitsImage}
            />
          </div>
        </div>

        {/* Second section */}
        <div className={Styles.productBenefitsLine}>
          <div className={Styles.productReasonCard}>
            <Image
              src={benefits}
              alt="Benefits"
              className={Styles.productBenefitsImage}
            />
            <div className={Styles.benefitsProductDetailSection}>
              <div className={Styles.productBenefitsReason}>
                <p>TREATMENT</p>
              </div>
              <p className={Styles.productBenefitsReasonDetails}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                commodo commodo nunc. Fusce ac nibh
              </p>
            </div>
          </div>
          <div className={Styles.productBenefitsUserImageSection}>
            <Image
              className={Styles.productBenefitsUserImage}
              src={userProfile}
              alt="User profile"
            />
          </div>
          <div className={Styles.productReasonCard}>
            <div className={Styles.benefitsProductDetailSection}>
              <div className={Styles.productBenefitsReason}>
                <p>MOISTENING</p>
              </div>
              <p className={Styles.productBenefitsReasonDetails}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                commodo commodo nunc. Fusce ac nibh
              </p>
            </div>
            <Image
              src={benefits}
              alt="Benefits"
              className={Styles.productBenefitsImage}
            />
          </div>
        </div>
        {/* Third Section */}
        <div
          style={{ marginTop: "-40px" }}
          className={Styles.productBenefitsLine}
        >
          <div className={Styles.productReasonCard}>
            <Image
              src={benefits}
              alt="Benefits"
              className={Styles.productBenefitsImage}
            />
            <div className={Styles.benefitsProductDetailSection}>
              <div className={Styles.productBenefitsReason}>
                <p>TREATMENT</p>
              </div>
              <p className={Styles.productBenefitsReasonDetails}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                commodo commodo nunc. Fusce ac nibh
              </p>
            </div>
          </div>

          <div className={Styles.productReasonCard}>
            <div className={Styles.benefitsProductDetailSection}>
              <div className={Styles.productBenefitsReason}>
                <p>MOISTENING</p>
              </div>
              <p className={Styles.productBenefitsReasonDetails}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                commodo commodo nunc. Fusce ac nibh
              </p>
            </div>
            <Image
              src={benefits}
              alt="Benefits"
              className={Styles.productBenefitsImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import Styles from "./ProductProcedure.module.css";
import Image from "next/image";
import { Heading } from "../Reusable/Heading";
import { laser1, laser2, laser3, laser4 } from "@/Assets";

export const ProductProcedure = () => {
  return (
    <div className={Styles.productProcedureContainer}>
      <Heading
        blackText="How Laser Sunspots Freckle "
        redText="Removal works?"
      />
      <div className={Styles.procedureStepAlign}>
        {/* Box1 */}
        <div className={Styles.alignProcedureImageBox}>
          <Image
            src={laser1}
            alt="Acne"
            className={Styles.procedureImage}
            unoptimized={true}
            priority={true}
          />
          <fieldset className={Styles.borderText}>
            <legend>ACNE</legend>
          </fieldset>
          <div className={Styles.procedureCount}>
            <p>1</p>
          </div>
        </div>
        {/* Box 2 */}

        <div className={Styles.alignProcedureImageBox}>
          <Image
            src={laser2}
            alt="Acne"
            className={Styles.procedureImage}
            unoptimized={true}
            priority={true}
          />
          <fieldset className={Styles.borderText}>
            <legend>Laser Scar Removal</legend>
          </fieldset>
          <div className={Styles.procedureCount}>
            <p>2</p>
          </div>
        </div>

        {/* Box 3 */}
        <div className={Styles.alignProcedureImageBox}>
          <Image
            src={laser3}
            alt="Acne"
            className={Styles.procedureImage}
            unoptimized={true}
            priority={true}
          />
          <fieldset className={Styles.borderText}>
            <legend>Skin Restoration Stage</legend>
          </fieldset>
          <div className={Styles.procedureCount}>
            <p>3</p>
          </div>
        </div>

        {/* Box 4 */}
        <div className={Styles.alignProcedureImageBox}>
          <Image
            src={laser4}
            alt="Acne"
            className={Styles.procedureImage}
            unoptimized={true}
            priority={true}
          />
          <fieldset className={Styles.borderText}>
            <legend>Healthy Skin</legend>
          </fieldset>
          <div className={Styles.procedureCount}>
            <p>4</p>
          </div>
        </div>
        {/* ending div */}
      </div>
    </div>
  );
};

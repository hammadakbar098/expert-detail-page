import React from "react";
import Styles from "./ProductResult.module.css";
import { Heading } from "../Reusable/Heading";
import { result1, procedurebottom, procedureright } from "@/Assets";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const ProductResult = () => {
  return (
    <div className={Styles.productResultFeather}>
      <div className={Styles.productResultContainer}>
        <Image src={procedureright} className={Styles.procedureFeatherRight} />
        {/* <Image
          src={procedurebottom}
          className={Styles.procedureFeatherBottom}
        /> */}

        <Heading
          blackText="Results of"
          redText="Laser Sunspots Freckle Removal "
          info="It is a long established fact that a reader will be "
        />
        <div className={Styles.alignDisplayContainer}>
          <div className={Styles.productResutlContainer}>
            <div className={Styles.productResultBtn}>
              <AiOutlineLeft
                color="white"
                size={"2.19vw"}
                fontWeight={"bold"}
              />
            </div>
            <div className={Styles.imageResultContainer}>
              <Image
                src={result1}
                alt="Client Result"
                unoptimized={true}
                priority={true}
                className={Styles.procedureImage}
              />
            </div>
            <div className={Styles.productResultBtn}>
              <AiOutlineRight
                color="white"
                size={"2.19vw"}
                fontWeight={"bold"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

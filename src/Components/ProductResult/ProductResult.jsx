import React from "react";
import Styles from "./ProductResult.module.css";
import { Heading } from "../Reusable/Heading";
import { result1 } from "@/Assets";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const ProductResult = () => {
  return (
    <div className={Styles.productResultContainer}>
      <Heading
        blackText="Results of"
        redText="Laser Sunspots Freckle Removal "
        info="It is a long established fact that a reader will be "
      />
      <div className={Styles.productResutlContainer}>
        <div className={Styles.productResultBtn}>
          <AiOutlineLeft color="white" size={25} fontWeight={"bold"} />
        </div>
        <div>
          <Image
            src={result1}
            alt="Client Result"
            unoptimized={true}
            priority={true}
          />
        </div>
        <div className={Styles.productResultBtn}>
          <AiOutlineRight color="white" size={"30px"} fontWeight={"bold"} />
        </div>
      </div>
    </div>
  );
};

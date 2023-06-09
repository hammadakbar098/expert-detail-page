import React from "react";
import Styles from "./Choose.module.css";
import { backgound, treatment } from "@/Assets";
import { Heading } from "../Reusable/Heading";
import Image from "next/image";
import Carousel from "../Reusable/Carousel";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const ChooseUs = () => {
  const items = ["Item 1", "Item 2", "Item 3"];
  return (
    <div
      className={Styles.paddingTopChooseus}
      style={{
        backgroundImage: `url(${backgound.src})`,
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <Heading
        blackText={"Why should you"}
        redText={"choose us"}
        className={Styles.chooseusMarginTop}
      />
      <div className={Styles.chooseContainer}>
        <div className={Styles.chooseusTreatmentImg}>
          <Image
            src={treatment}
            alt="Doctor treating patient"
            unoptimized={true}
            priority
          />
        </div>
        {/* Second section */}
        <div className={Styles.chooseusReasonCard}>
          <div
            className={Styles.chooseBtnBackground}
            style={{
              backgroundImage: `url(${backgound.src})`,
              width: "2.92vw",
              height: "1.46vw",
              borderRadius: "1.46vw 1.46vw 0 0",
              display: "flex",
              justifyContent: "center",
              marginRight: "-2.19vw",
              paddingTop: "0.32vw",
            }}
          >
            <div className={Styles.chooseusBtns}>
              <AiOutlineLeft
                className={Styles.rotateLeftBtn}
                color="white"
                size={"1.46vw"}
                fontWeight={"bold"}
              />
            </div>
          </div>
          <div className={Styles.chooseReason}>
            <p className={Styles.chooseusReasoning}>Reasons</p>
            <p className={Styles.chooseusReasoningDetail}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum.
            </p>
          </div>
          <div
            className={Styles.chooseBtnBackground}
            style={{
              backgroundImage: `url(${backgound.src})`,
              width: "2.92vw",
              height: "1.46vw",
              borderRadius: "1.46vw 1.46vw 0 0",
              display: "flex",
              justifyContent: "center",
              marginLeft: "-2.19vw",
              paddingBottom: "5px",
              transform: "rotate(270deg)",
              paddingTop: "0.32vw",
            }}
          >
            <div className={Styles.chooseusBtns}>
              <AiOutlineRight
                className={Styles.rotateRightBtn}
                color="white"
                size={"1.46vw"}
                fontWeight={"bold"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

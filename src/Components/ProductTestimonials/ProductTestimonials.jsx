import React from "react";
import Styles from "./ProductTestimonials.module.css";
import { Heading } from "../Reusable/Heading";
import { testimonial2, testimonial3, testimonial4, feather } from "@/Assets";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const Testimonials = () => {
  return (
    <div className={Styles.testimonialFeather}>
      <Image src={feather} className={Styles.testimonialFeatherBottom} />
      <div className={Styles.productTestimonialsContainer}>
        <Heading
          info="Over 439+ satisfied clients"
          blackText="See what they say"
          redText="about us our clients"
        />
        <div className={Styles.testimonialContainer}>
          <div className={Styles.secondaryImgContainer}>
            <Image
              style={{ width: "39vw" }}
              src={testimonial2}
              className={[Styles.testimonialImageSecondary, Styles.imageLeft]}
            />
          </div>
          <div className={Styles.testimonialCarouselMain}>
            <div className={Styles.btnHandleTestimonial}>
              {" "}
              <AiOutlineLeft color="white" size={"2vw"} fontWeight={"bold"} />
            </div>
            <div>
              <Image
                className={Styles.testimonialImageMain}
                src={testimonial4}
                alt="User Testimonial"
                unoptimized={true}
                priority
              />
            </div>
            <div className={Styles.btnHandleTestimonial}>
              <AiOutlineRight color="white" size={"2vw"} fontWeight={"bold"} />
            </div>
          </div>
          <div className={Styles.secondaryImgContainer}>
            <Image
              src={testimonial3}
              style={{ width: "39vw" }}
              className={[Styles.testimonialImageSecondary, Styles.imageRight]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

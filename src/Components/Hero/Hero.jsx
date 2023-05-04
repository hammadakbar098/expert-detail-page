import React from "react";
import Style from "./Hero.module.css";
import Image from "next/image";
import { hero, cart, watch } from "@/Assets";
import { AiOutlineLeft } from "react-icons/ai";

export const Hero = () => {
  return (
    <>
      <div className={Style.heroHeader}>
        <div className={Style.heroContent}>
          {/* Back btn */}
          <div className={Style.backBtn}>
            <AiOutlineLeft size={22} fontWeight={"bold"} color="#4a4a4a" />
            <p>Back</p>
          </div>
          {/* Title */}
          <h1 className={Style.heroHeading}>Sunspots Freckle Removal</h1>
          {/* Description */}
          <p className={Style.heroDescription}>
            Be it party, bridal, mayun, wedding , casual, engagement makeup, or
            for any other occasion, no one can beautifyyou better than Expert’s
            makeup artists. We are known to provide matched makeup services at
            the comfort of your home. Be it party, bridal, mayun, wedding ,
            casual, makeup, or for any other occasion, no one can beautify you
            better than Expert’s makeup artists. We are known to provide matched
            makeup services at the comfort of your home
          </p>
          {/* Price */}
          <p className={Style.heroPrice}> £4500</p>

          {/* Time */}
          <div className={Style.requiredTime}>
            <Image src={watch} alt="time" />
            <p>20 Minutes</p>
          </div>
          {/* Buttons */}
          <button className={Style.booknowBtn}>Book Now</button>
          <div className={Style.cartContent}>
            <button className={Style.consultBtn}> Free Consultation</button>
            <div className={Style.cartBtn}>
              <Image src={cart} alt="Cart" />
            </div>
          </div>
        </div>
        <div className={Style.heroImg}>
          <Image src={hero} alt="Cart" />
        </div>
      </div>
    </>
  );
};

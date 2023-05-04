import React from "react";
import Styles from "./DownloadBanner.module.css";
import { mobile, apple, appstore, expertlogo } from "@/Assets";
import Image from "next/image";

export const DownloadBanner = () => {
  return (
    <div className={Styles.downloadBackground}>
      <div className={Styles.downloadContainer}>
        <div className={Styles.downloadInfo}>
          <Image src={expertlogo} alt="Expert" className={Styles.expertLogo} />
          <p className={Styles.downloadSlogan}>Want all the services at</p>
          <p className={Styles.downloadSlogan}>your fingertips?</p>
          <p className={Styles.downloadUsInfo}>
            <span>Download</span> the <span>Expert</span> app Now
          </p>
          <div className={Styles.downloadBtnsContainer}>
            <div className={Styles.downloadAppBtn}>
              <div>
                <Image src={appstore} alt="App store" />
              </div>
              <div>
                <p className={Styles.getOn}>Get it on</p>
                <p className={Styles.downloadPlatform}>Google Play</p>
              </div>
            </div>
            <div className={Styles.downloadAppBtn}>
              <div>
                <Image src={apple} alt="App store" />
              </div>
              <div>
                <p className={Styles.getOn}>Get it on</p>
                <p className={Styles.downloadPlatform}>App Store</p>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.downloadImage}>
          <Image src={mobile} alt="Expert Mobile App" />
        </div>
      </div>
    </div>
  );
};

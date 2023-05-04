import React from "react";
import "./ProductLayout.module.css";
import { Hero } from "../Hero/Hero";
import { ProductInfo } from "../ProductInfo/ProductInfo";
import { Testimonials } from "../ProductTestimonials/ProductTestimonials";
import { ProductResult } from "../ProductResult/ProductResult";
import { ProductProcedure } from "../ProductProcedure/ProductProcedure";
import { DownloadBanner } from "../DownloadBanner/DownloadBanner";
import { ChooseUs } from "../ChooseusCarousel/ChooseUs";
import { ProductBenefits } from "../ProductBenefits/ProductBenefits";

export const Detail = () => {
  return (
    <div>
      <Hero />
      <ProductInfo />
      <ProductBenefits />
      <ChooseUs />
      <ProductProcedure />
      <ProductResult />
      <Testimonials />
      <DownloadBanner />
    </div>
  );
};

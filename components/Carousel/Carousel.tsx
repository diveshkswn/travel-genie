"use client";

import { memo, useEffect } from "react";
import CityHeader from "../CityHeader/CityHeader";
import { CarouselSection } from "./ Carousel.styles";
import { CarouselProps } from "./Carousel.types";
import Glide from "@glidejs/glide";
import "./style.scss";

export function Carousel(props: CarouselProps) {
  useEffect(() => {
    new Glide(".glide", {
      type: "carousel",
      autoplay: 5000,
      hoverpause: true,
      gap: 0,
      startAt: 0,
    }).mount();
  }, []);

  return (
    <CarouselSection className="CarouselContainer">
      <div className="glide">
        <div className="progressBar">
          <div className="glide__bullets" data-glide-el="controls[nav]">
            <button className="glide__bullet" data-glide-dir="=0"></button>
            <button className="glide__bullet" data-glide-dir="=1"></button>
            <button className="glide__bullet" data-glide-dir="=2"></button>
          </div>
        </div>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">
              <div className="img-gradient">
                <img src="https://images.unsplash.com/photo-1607406374368-809f8ec7f118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2346&q=80" />
              </div>
              <div className="content">
                <CityHeader />
              </div>
            </li>
            <li className="glide__slide">
              <div className="img-gradient">
                <img src="https://media.istockphoto.com/id/1135820309/photo/amber-fort-and-maota-lake-jaipur-rajasthan-india.jpg?s=2048x2048&w=is&k=20&c=Y65U6Irmz_G8qtReqCF-u_e-BGXR1z_qj3B8Clr73F8=" />
              </div>
              <div className="content"></div>
            </li>
            <li className="glide__slide">
              <div className="img-gradient">
                <img src="https://images.pexels.com/photos/2907578/pexels-photo-2907578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
              </div>
              <div className="content"></div>
            </li>
          </ul>
        </div>
      </div>
    </CarouselSection>
  );
}

export default memo(Carousel);

"use client";

import { memo, useEffect } from "react";
import { CarouselSection } from "./ Carousel.styles";
import { CarouselProps } from "./Carousel.types";
import Glide from "@glidejs/glide";
import "./style.scss";
import { handleLogout } from "@/utils/helpers";
import { useRouter } from "next/navigation";

export function Carousel(props: CarouselProps) {
  const router = useRouter();
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
      <button
        onClick={() => {
          handleLogout({
            callbackFn: () => {
              router.refresh();
            },
          });
        }}
      >
        Logout
      </button>
      <div className="glide">
        <div className="glide__bullets" data-glide-el="controls[nav]">
          <button className="glide__bullet" data-glide-dir="=0"></button>
          <button className="glide__bullet" data-glide-dir="=1"></button>
          <button className="glide__bullet" data-glide-dir="=2"></button>
        </div>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">
              <div className="img-gradient">
                <img src="https://images.unsplash.com/photo-1607406374368-809f8ec7f118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2346&q=80" />
              </div>
              <div className="content">
                <h1>Rishikesh</h1>
              </div>
            </li>
            <li className="glide__slide">
              <div className="img-gradient">
                <img src="https://images.pexels.com/photos/2870167/pexels-photo-2870167.jpeg?auto=compress&cs=tinysrgb&w=800" />
              </div>
              <div className="content">
                <h1>Jaipur</h1>
              </div>
            </li>
            <li className="glide__slide">
              <div className="img-gradient">
                <img src="https://images.pexels.com/photos/2907578/pexels-photo-2907578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
              </div>
              <div className="content">
                <h1>Manali</h1>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </CarouselSection>
  );
}

export default memo(Carousel);

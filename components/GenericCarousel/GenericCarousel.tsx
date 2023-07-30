"use client";

import { memo, useEffect } from "react";
import { GenericCarouselSection } from "./GenericCarousel.styles";
import { GenericCarouselProps } from "./GenericCarousel.types";
import Glide from "@glidejs/glide";

export function GenericCarousel(props: GenericCarouselProps) {
    const { images, imgHeight, imgWidth } = props;
    useEffect(() => {
        new Glide(".glide", {
            type: "carousel",
            autoplay: 2000,
            hoverpause: true,
            gap: 0,
            startAt: 0,
            perView: 2,
        }).mount();
    }, []);

    return (
        <GenericCarouselSection className="CarouselContainer">
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {images.map((image, index) => (
                            <li className="glide__slide" key={index}>
                                <img src={image} alt={`Slide ${index + 1}`} style={{ width: imgWidth, height: imgHeight, objectFit: 'cover' }} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </GenericCarouselSection>
    );
}

export default memo(GenericCarousel);

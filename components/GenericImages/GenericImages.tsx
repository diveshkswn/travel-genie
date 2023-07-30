"use client";

import { memo } from "react";
import { GenericImagesSection } from "./GenericImages.styles";
import { GenericImagesProps } from "./GenericImages.types";

export function GenericImages(props: GenericImagesProps) {
    const { images, imgHeight, imgWidth } = props;

    return (
        <GenericImagesSection className="image-container">
            <div>
                <div>
                    <ul>
                        {images.map((image, index) => (
                            <li key={index}>
                                <img src={image} alt={`${index + 1}`} style={{ width: imgWidth, height: imgHeight, objectFit: 'cover' }} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </GenericImagesSection>
    );
}

export default memo(GenericImages);

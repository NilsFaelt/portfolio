import React, { FC, useEffect, useState } from "react";
import { StyledImage, ImageContainer } from "./DisplayImages.style";

interface Props {
  imagesUrl: string[];
}

export const DisplayImages: FC<Props> = ({ imagesUrl }) => {
  const [containerKey, setContainerKey] = useState(0);

  useEffect(() => {
    // Increment the key value whenever imagesUrl changes
    setContainerKey((prevKey) => prevKey + 1);
  }, [imagesUrl]);

  return (
    <div>
      <ImageContainer key={containerKey}>
        {imagesUrl.map((image, i) => (
          <StyledImage
            key={i}
            width={100}
            height={100}
            alt='Project image'
            src={image}
          />
        ))}
      </ImageContainer>
    </div>
  );
};

import React, { FC, useEffect, useRef } from "react";
import { Container, Video } from "./VideoBackground.style";

export const VideoBackground: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay error:", error);
      });
    }
  }, []);

  return (
    <Container>
      <Video autoPlay loop muted playsInline ref={videoRef}>
        <source src='/video/mainbg.mp4' />
      </Video>
    </Container>
  );
};

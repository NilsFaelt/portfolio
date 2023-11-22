import React, { useEffect, useState } from "react";
import { Container } from "./BackToTop.style";
import { MainText } from "@/ui";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container
      onClick={scrollToTop}
      style={{ display: isVisible ? "block" : "none" }}
    >
      UP
    </Container>
  );
};

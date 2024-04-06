import React, { FC, useEffect, useRef, useState } from "react";
import { Container, Letter, LetterYellow } from "./BigTextAnimation.style";

type Props = {
  text?: string;
  showDot?: boolean;
};

export const BigTextAnimation: FC<Props> = ({
  text = "NilsFält",
  showDot = true,
}) => {
  const splittedText = text.split("");

  return (
    <Container>
      {splittedText.map((letter, i) => {
        return (
          <Letter
            key={i}
            style={{
              animationDelay: `${i * 100}ms`,
            }}
          >
            {letter}
          </Letter>
        );
      })}
      {showDot && <LetterYellow>.</LetterYellow>}
    </Container>
  );
};

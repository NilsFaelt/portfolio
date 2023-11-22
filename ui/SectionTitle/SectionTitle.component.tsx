import React, { FC } from "react";
import { Text } from "./SectionTitle.style";
interface Props {
  text: string;
  titleColor?: string;
  borderColor?: string;
}
export const SectionTitle: FC<Props> = ({
  text,
  titleColor = "white",
  borderColor = "white",
}) => {
  return (
    <Text $color={titleColor} $bordercolor={titleColor}>
      {text}
    </Text>
  );
};

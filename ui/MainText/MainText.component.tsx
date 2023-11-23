import React, { FC } from "react";
import { Text } from "./MainText.style";

interface Props {
  text: string;
  color?: string;
}
export const MainText: FC<Props> = ({ text, color = "white" }) => {
  return <Text $color={color}>{text.toUpperCase()}</Text>;
};

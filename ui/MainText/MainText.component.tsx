import React, { FC } from "react";
import { Text } from "./MainText.style";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: "400" });
interface Props {
  text: string;
  color?: string;
}
export const MainText: FC<Props> = ({ text, color = "white" }) => {
  return (
    <Text className={rajdhani.className} $color={color}>
      {text.toUpperCase()}
    </Text>
  );
};

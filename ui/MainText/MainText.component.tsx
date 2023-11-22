import React, { FC } from "react";
import { Text } from "./MainText.style";

interface Props {
  text: string;
}
export const MainText: FC<Props> = ({ text }) => {
  return <Text>{text.toUpperCase()}</Text>;
};

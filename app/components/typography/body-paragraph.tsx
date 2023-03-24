import React from "react";
import { Text } from "@twilio-paste/core/text";
import type { Margin } from "@twilio-paste/style-props";

// create props for children
interface BodyParagraphProps {
  children: React.ReactNode;
  marginTop?: Margin;
}

// create a react component that renders a Text component from Paste with the children prop set to "Hello World"
export const BodyParagraph = ({ children, marginTop }: BodyParagraphProps) => {
  return (
    <Text
      marginBottom={"space80"}
      marginTop={marginTop}
      as="p"
      fontSize="fontSize70"
      lineHeight="lineHeight80"
    >
      {children}
    </Text>
  );
};

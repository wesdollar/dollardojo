import React from "react";
import { Text } from "@twilio-paste/core/text";

// create props for children
interface BodyParagraphProps {
  children: React.ReactNode;
}

// create a react component that renders a Text component from Paste with the children prop set to "Hello World"
export const BodyParagraph = ({ children }: BodyParagraphProps) => {
  return (
    <Text
      marginBottom={"space80"}
      as="p"
      fontSize="fontSize70"
      lineHeight="lineHeight80"
    >
      {children}
    </Text>
  );
};

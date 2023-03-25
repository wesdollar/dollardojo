import React from "react";
import { styled, css } from "@twilio-paste/styling-library";

interface FlexBaseProps {
  order: number[];
  marginTop?: string[];
  basis?: string[];
}

interface SortableFlexProps extends FlexBaseProps {
  children: React.ReactNode;
}

const getCustomComponent = (
  order: number[],
  marginTop: string[],
  flexBasis: string[]
) =>
  styled.div(
    css({
      display: "flex",
      minWidth: 0,
      flexWrap: "wrap",
      order,
      marginTop,
      flexBasis,
    })
  );

export const SortableFlex = ({
  children,
  order = [1, 1, 1],
  marginTop = ["0", "0", "0"],
  basis = ["100%", "100%", "100%"],
}: SortableFlexProps) => {
  const Custom = getCustomComponent(order, marginTop, basis);

  return <Custom>{children}</Custom>;
};

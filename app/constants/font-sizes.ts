import type { FontSizeOptions as PasteFontSizeOptions } from "@twilio-paste/style-props";

const defaultFontSize = "fontSize50";

// make an interface for small, medium, large, and default
export interface FontSizeOptions {
  small: PasteFontSizeOptions;
  medium: PasteFontSizeOptions;
  large: PasteFontSizeOptions;
  default: PasteFontSizeOptions;
}

export const fontSizes: Record<string, FontSizeOptions> = {
  generic: {
    small: "fontSize30",
    medium: defaultFontSize,
    large: "fontSize80",
    default: defaultFontSize,
  },
  sm: {
    small: "fontSize30",
    medium: "fontSize50",
    large: "fontSize60",
    default: defaultFontSize,
  },
  md: {
    small: "fontSize30",
    medium: "fontSize60",
    large: "fontSize70",
    default: defaultFontSize,
  },
  lg: {
    small: "fontSize40",
    medium: defaultFontSize,
    large: "fontSize90",
    default: defaultFontSize,
  },
};

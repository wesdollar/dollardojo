import type { TextColor as PasteTextColor } from "@twilio-paste/style-props";
import type { ThemeShape } from "@twilio-paste/theme";
import {
  textColors,
  colorTextInverseWeaker,
  colorTextPrimary,
  colorBackground,
  colorBorder,
} from "@twilio-paste/design-tokens";

export interface TextColorOptions {
  white: keyof ThemeShape["textColors"];
  black: PasteTextColor;
  text: {
    primary: PasteTextColor;
    secondary: PasteTextColor;
  };
  accents: {
    primary: PasteTextColor;
    secondary: PasteTextColor;
  };
  backgrounds: {
    primary: PasteTextColor;
    secondary: PasteTextColor;
  };
  borders: {
    primary: PasteTextColor;
    secondary: PasteTextColor;
  };
}

const secondaryColor = "#DE3400";

export const colors: Record<string, TextColorOptions> = {
  white: textColors.colorTextPrimary,
  black: colorTextInverseWeaker as TextColorOptions["black"],
  text: {
    primary: colorTextPrimary as TextColorOptions["text"]["primary"],
    secondary: secondaryColor as TextColorOptions["text"]["secondary"],
  },
  backgrounds: {
    primary: colorBackground as TextColorOptions["backgrounds"]["primary"],
    secondary: secondaryColor as TextColorOptions["backgrounds"]["secondary"],
  },
  borders: {
    primary: colorBorder as TextColorOptions["borders"]["primary"],
    secondary: secondaryColor as TextColorOptions["backgrounds"]["secondary"],
  },
};

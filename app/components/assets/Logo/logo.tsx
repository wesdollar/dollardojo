import { Box } from "@twilio-paste/core/box";
import { LogoSquareWithMascotTransparentBg } from "~/components/svg/logo-square-with-mascot-transparent-bg";
import { gutters } from "~/constants/gutters";
import type { Space } from "@twilio-paste/style-props";

interface LogoProps {
  display?: "flex";
  justifyContent?: "center";
  padding?: Space;
}

export const Logo = ({
  display = "flex",
  justifyContent = "center",
  padding = ["space0", gutters.defaultGutterSize],
}: LogoProps) => (
  <Box display={display} justifyContent={justifyContent} padding={padding}>
    <LogoSquareWithMascotTransparentBg />
  </Box>
);

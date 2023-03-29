import { Box } from "@twilio-paste/core/box";
import { Text } from "@twilio-paste/core/text";
import { Flex } from "@twilio-paste/core/";
import type { Space } from "@twilio-paste/style-props";
import { SocialLinks } from "~/components/social-links";
import { MarketingSlogan } from "app/components/marketing/marketing-slogan/marketing-slogan";
import { fontSizes } from "~/constants/font-sizes";
import { gutters } from "~/constants/gutters";
import { BookSession } from "app/components/marketing/book-session/book-session";
import { DollarDojoIntro } from "~/components/marketing/dollar-dojo-intro/dollar-dojo-intro";
import { Logo } from "~/components/assets/Logo/logo";
import { Spacer } from "~/components/utilities/spacer";
import { SortableFlex } from "~/components/layout/sortable-flex/sortable-flex";

// eslint-disable-next-line react/function-component-definition
export default function Index() {
  const bodyWrapper: Space = ["space40", "space60", "space160"];

  return (
    <>
      <Logo height="500px" />
      <Box
        display={"flex"}
        justifyContent="center"
        marginBottom={"space0"}
        marginTop={gutters.defaultGutterSize}
      >
        <Text
          as="h2"
          fontSize={[
            fontSizes.sm.large,
            fontSizes.md.large,
            fontSizes.lg.large,
          ]}
          marginBottom="space180"
        >
          <MarketingSlogan />
        </Text>
      </Box>

      <Box paddingLeft={bodyWrapper} paddingRight={bodyWrapper}>
        <SocialLinks />
      </Box>

      <Box
        marginTop={"space180"}
        paddingLeft={bodyWrapper}
        paddingRight={bodyWrapper}
      >
        <Flex wrap>
          <SortableFlex
            order={[2, 2, 1]}
            basis={["100%", "100%", "50%"]}
            marginTop={["60px", "60px", "0"]}
          >
            <Box
              width={"100%"}
              marginRight={["space0", "space0", gutters.defaultGutterSize]}
              style={{ flexBasis: "100%" }}
            >
              <DollarDojoIntro />
            </Box>
          </SortableFlex>
          <SortableFlex
            order={[1, 1, 2]}
            basis={["100%", "100%", "50%"]}
            marginTop={["0", "0", "0"]}
          >
            <Box
              width={"100%"}
              marginLeft={["space0", "space0", gutters.defaultGutterSize]}
              style={{ flexBasis: "100%" }}
            >
              <BookSession />
            </Box>
          </SortableFlex>
        </Flex>
      </Box>

      <Spacer height={["50px", "50px", "50px"]} />
    </>
  );
}

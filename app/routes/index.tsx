import { Card } from "@twilio-paste/core/card";
import { LogoSquareWithMascotTransparentBg } from "~/components/svg/logo-square-with-mascot-transparent-bg";
import { Box } from "@twilio-paste/core/box";
import { Heading } from "@twilio-paste/core/heading";
import { Text } from "@twilio-paste/core/text";
import { Column, Flex, Grid } from "@twilio-paste/core/";
import type { Space } from "@twilio-paste/style-props";
import { BodyParagraph } from "~/components/typography/body-paragraph";
import { Stack } from "@twilio-paste/core/stack";
import { Button } from "@twilio-paste/core/button";
import { SocialLinks } from "~/components/social-links";

// eslint-disable-next-line react/function-component-definition
export default function Index() {
  const defaultGutterSize = "space80";
  const bodyWrapper: Space = ["space20", "space60", "space160"];

  return (
    <>
      <Box
        display="flex"
        justifyContent={"center"}
        padding={["space0", defaultGutterSize]}
      >
        <LogoSquareWithMascotTransparentBg />
      </Box>
      <Box
        display={"flex"}
        justifyContent="center"
        marginBottom={"space0"}
        marginTop={defaultGutterSize}
      >
        <Text
          as="h2"
          fontSize={["fontSize70", "fontSize80"]}
          marginBottom="space180"
        >
          Learn. Grow. Teach. Repeat.
        </Text>
      </Box>
      <SocialLinks />
      <Box
        marginTop={"space180"}
        paddingLeft={bodyWrapper}
        paddingRight={bodyWrapper}
      >
        <Flex wrap>
          <Flex basis={["100%", "100%", "50%"]}>
            <Box
              width={"100%"}
              marginRight={["space0", "space0", defaultGutterSize]}
            >
              <Card element="CARD">
                <Box maxWidth={"600px"} justifyContent="center">
                  <Stack orientation={"vertical"} spacing="space200">
                    <Heading as="h2" variant="heading10">
                      Hi, I'm Wes! I have a passion for helping software
                      engineers level up. Dollar Dojo is my platform for doing
                      just that.
                    </Heading>
                  </Stack>
                  <BodyParagraph marginTop={"space180"}>
                    If you're looking to grow your career in the software
                    industry, Dollar Dojo is the community you've been looking
                    for. I live stream software development and related research
                    on Twitch, upload tutorial videos to YouTube, and share my
                    thoughts, discoveries, and otherwise random ideas on
                    Discord. Our Discord has a great community of people who are
                    always willing to help each other out and grow together, so
                    I highly recommend joining!
                  </BodyParagraph>
                  <BodyParagraph>
                    Everyone is welcome in our community with arms wide open and
                    hugs to go around. I want to spread nothing but love and
                    light, and I expect everyone in our community to do the
                    same.
                  </BodyParagraph>
                  <BodyParagraph>
                    I hope you'll consider joining the community. It's an
                    investment in yourself that will pay dividends for the rest
                    of your life. I look forward to seeing you on stream or in
                    the Discord!
                  </BodyParagraph>
                  <BodyParagraph>
                    Until then, keep writing clean code!
                  </BodyParagraph>
                </Box>
              </Card>
            </Box>
          </Flex>
          <Flex
            basis={["100%", "100%", "50%"]}
            marginTop={[defaultGutterSize, defaultGutterSize, "space0"]}
          >
            <Box
              width={"100%"}
              marginLeft={["space0", "space0", defaultGutterSize]}
            >
              <Card element="CARD">
                <Heading as="h1" variant="heading10">
                  Book a session with Wes
                </Heading>
                <BodyParagraph>
                  I'm available for 30 and 60 minute sessions to discuss
                  whatever's on your mind. Sessions are free of charge, no
                  strings attached. I'm here to help you level up!
                </BodyParagraph>
                <Stack orientation={"horizontal"} spacing={defaultGutterSize}>
                  <Grid gutter={"space60"} marginTop="space100">
                    <Column span={6}>
                      <Button
                        variant="primary"
                        as="a"
                        href="https://calendly.com/dollardojo/30min"
                      >
                        30 Minute Session
                      </Button>
                    </Column>
                    <Column span={6}>
                      <Button
                        variant="primary"
                        as="a"
                        href="https://calendly.com/dollardojo/60-minute-sync"
                      >
                        60 Minute Session
                      </Button>
                    </Column>
                  </Grid>
                </Stack>
              </Card>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box display="block" margin="space100">
        &nbsp;
      </Box>
    </>
  );
}

import { Card } from "@twilio-paste/core/card";
import { LogoSquareWithMascotTransparentBg } from "~/components/svg/logo-square-with-mascot-transparent-bg";
import { Box } from "@twilio-paste/core/box";
import { Heading } from "@twilio-paste/core/heading";
import { Text } from "@twilio-paste/core/text";
import { Column, Grid } from "@twilio-paste/core/";
import { BodyParagraph } from "~/components/typography/body-paragraph";
import { Stack } from "@twilio-paste/core/stack";
import { Button } from "@twilio-paste/core/button";
import SocialLinks from "~/components/social-links";

export default function Index() {
  return (
    <>
      <Box
        display="flex"
        justifyContent={"center"}
        padding={["space0", "space80"]}
      >
        <LogoSquareWithMascotTransparentBg />
      </Box>
      <SocialLinks />
      <Box
        display={"flex"}
        justifyContent="center"
        marginBottom={"space0"}
        marginTop={"space80"}
      >
        <Text as="h2" fontSize={["fontSize70", "fontSize80"]}>
          Learn. Grow. Teach. Repeat.
        </Text>
      </Box>
      <Grid
        marginTop="space200"
        gutter="space80"
        vertical={[true, true, false]}
      >
        <Column span={[12, 6, 6]}>
          <Card element="CARD">
            <Box maxWidth={"600px"} justifyContent="center">
              <Stack orientation={"vertical"} spacing="space200">
                <Heading as="h2" variant="heading10">
                  Hi, I'm Wes! I would love the honor and privilege of helping
                  you grow and succeed in your career.
                </Heading>
              </Stack>
              <BodyParagraph marginTop={"space160"}>
                Dollar Dojo is a community of software developers and
                technologists that are committed to growing and learning
                together. We take an each one teach one approach to learning and
                growing. We believe that the best ways to learn are by doing and
                teaching. After all, the only way to learn how to code is to
                code.
              </BodyParagraph>
              <BodyParagraph>
                I built this community to ensure that I stay engaged with those
                who have trusted me as their mentor and to provide a platform
                for others to mentor as well. I thought it was also an excellent
                opportunity to invite people like you into the community.
                Multiple brains and perspectives are always better than one.
              </BodyParagraph>
              <BodyParagraph>
                If you're looking to grow your career in the software industry,
                Dollar Dojo is the community you've been looking for. I live
                stream development and research on Twitch, upload videos to
                YouTube, and share my thoughts, discoveries, and otherwise
                random ideas on Discord. Our Discord has a great community of
                people who are always willing to help each other out and grow
                together.
              </BodyParagraph>
              <BodyParagraph>
                Everyone is welcome in our community with arms wide open and
                hugs to go around. I want to spread nothing but love and light,
                and I expect everyone in our community to do the same. We can
                make a huge difference in the world by being loving and kind to
                each other.
              </BodyParagraph>
              <BodyParagraph>
                Thanks for dropping by! I hope you'll consider joining the
                community. It's an investment in yourself that will pay
                dividends for the rest of your life. I look forward to seeing
                you on stream or in the Discord!
              </BodyParagraph>
              <BodyParagraph>
                Until then, keep writing clean code!
              </BodyParagraph>
            </Box>
          </Card>
        </Column>
        <Column span={[12, 6, 6]}>
          <Card element="CARD">
            <Heading as="h1" variant="heading10">
              Book a session with Wes!
            </Heading>
            <Stack orientation={"horizontal"} spacing={"space80"}>
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
        </Column>
      </Grid>
      <Box display="block" margin="space100">
        &nbsp;
      </Box>
    </>
  );
}

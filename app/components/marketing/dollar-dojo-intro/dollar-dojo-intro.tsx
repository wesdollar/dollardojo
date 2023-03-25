import { Card } from "@twilio-paste/core/card";
import { Box } from "@twilio-paste/core/box";
import { Heading } from "@twilio-paste/core/heading";
import { Stack } from "@twilio-paste/core/stack";
import { BodyParagraph } from "~/components/typography/body-paragraph";

export const DollarDojoIntro = () => (
  <Card element="CARD">
    <Box maxWidth={"600px"} justifyContent="center">
      <Stack orientation={"vertical"} spacing="space200">
        <Heading as="h2" variant="heading10">
          Hi, I'm Wes! I have a passion for helping software engineers level up.
          Dollar Dojo is my platform for doing just that.
        </Heading>
      </Stack>
      <BodyParagraph marginTop={"space180"}>
        If you're looking to grow your career in the software industry, Dollar
        Dojo is the community you've been looking for. I live stream software
        development and related research on Twitch, upload tutorial videos to
        YouTube, and share my thoughts, discoveries, and otherwise random ideas
        on Discord. Our Discord has a great community of people who are always
        willing to help each other out and grow together, so I highly recommend
        joining!
      </BodyParagraph>
      <BodyParagraph>
        Everyone is welcome in our community with arms wide open and hugs to go
        around. I want to spread nothing but love and light, and I expect
        everyone in our community to do the same.
      </BodyParagraph>
      <BodyParagraph>
        I hope you'll consider joining the community. It's an investment in
        yourself that will pay dividends for the rest of your life. I look
        forward to seeing you on stream or in the Discord!
      </BodyParagraph>
      <BodyParagraph>Until then, keep writing clean code!</BodyParagraph>
    </Box>
  </Card>
);

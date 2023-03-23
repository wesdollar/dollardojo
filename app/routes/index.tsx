import { Card } from "@twilio-paste/core/card";
import { LogoSquareWithMascotTransparentBg } from "~/components/svg/logo-square-with-mascot-transparent-bg";
import { Box } from "@twilio-paste/core/box";
import { Stack } from "@twilio-paste/core/stack";
import TwitchIcon from "~/components/icons/twitch-icon";
import YoutubeIcon from "~/components/icons/youtube-icon";
import DiscordIcon from "~/components/icons/discord-icon";
import GithubIcon from "~/components/icons/github-icon";
import { Heading } from "@twilio-paste/core/heading";
import { Separator } from "@twilio-paste/core/separator";
import { Text } from "@twilio-paste/core/text";
import { Paragraph } from "@twilio-paste/core/paragraph";
import { Column, Grid } from "@twilio-paste/core/";
import { LinkedinIcon } from "~/components/icons/linkedin-icon";
import { CustomizationProvider } from "@twilio-paste/core/customization";
import { BodyParagraph } from "~/components/typography/body-paragraph";

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
      <Box
        marginTop="space0"
        display="flex"
        justifyContent={"center"}
        padding={["space0", "space80"]}
      >
        <Stack orientation={"horizontal"} spacing={"space200"}>
          <Grid gutter="space50" rowGap={"space50"} columnGap={"space100"}>
            <Column>
              <a href="//discord.gg/mhvcpSPbwu" target={"_blank"}>
                <DiscordIcon />
              </a>
            </Column>
            <Column>
              <a href="//twich.tv/dollardojo" target={"_blank"}>
                <TwitchIcon />
              </a>
            </Column>
            <Column>
              <a href="//youtube.com/@dollardojotech" target={"_blank"}>
                <YoutubeIcon />
              </a>
            </Column>
            <Column>
              <a href="//github.com/wesdollar" target={"_blank"}>
                <GithubIcon />
              </a>
            </Column>
            <Column>
              <a href="//linkedin.com/in/wesdollar" target={"_blank"}>
                <LinkedinIcon />
              </a>
            </Column>
          </Grid>
        </Stack>
      </Box>
      <Box display={"flex"} justifyContent="center" marginBottom={"space0"}>
        <Heading as="h1" variant="heading10">
          Learn. Grow. Teach. Repeat.
        </Heading>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        marginTop={"space200"}
        padding={["space0", "space80"]}
      >
        <Card element="CARD">
          <Box maxWidth={"600px"}>
            <Heading as="h1" variant="heading10">
              Hi, I'm Wes! I would love the honor and privilege of helping you
              grow and succeed in your career.
            </Heading>
            <BodyParagraph>
              Dollar Dojo is a community of software developers and
              technologists that are committed to growing and learning together.
              We take an each one teach one approach to learning and growing. We
              believe that the best ways to learn are by doing and teaching.
              After all, the only way to learn how to code is to code.
            </BodyParagraph>
            <BodyParagraph>
              I built this community to ensure that I stay engaged with those
              who have trusted me as their mentor and to provide a platform for
              others to mentor as well. I thought it was also an excellent
              opportunity to invite people like you into the community. Multiple
              brains and perspectives are always better than one.
            </BodyParagraph>
            <BodyParagraph>
              If you're looking to grow your career in the software industry,
              Dollar Dojo is the community you've been looking for. I live
              stream development and research on Twitch, upload videos to
              YouTube, and share my thoughts, discoveries, and otherwise random
              ideas on Discord. Our Discord has a great community of people who
              are always willing to help each other out and grow together.
            </BodyParagraph>
            <BodyParagraph>
              Everyone is welcome in our community with arms wide open and hugs
              to go around. I want to spread nothing but love and light, and I
              expect everyone in our community to do the same. We can make a
              huge difference in the world by being loving and kind to each
              other.
            </BodyParagraph>
            <BodyParagraph>
              Thanks for dropping by! I hope you'll consider joining the
              community. It's an investment in yourself that will pay dividends
              for the rest of your life. I look forward to seeing you on stream
              or in the Discord!
            </BodyParagraph>
            <BodyParagraph>Until then, keep writing clean code!</BodyParagraph>
          </Box>
        </Card>
      </Box>
      <Box display="block" margin="space100">
        &nbsp;
      </Box>
    </>
  );
}

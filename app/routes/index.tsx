import { Card } from "@twilio-paste/core/card";
import { LogoSquareWithMascotTransparentBg } from "~/components/svg/logo-square-with-mascot-transparent-bg";
import { Box } from "@twilio-paste/core/box";
import { Theme } from "@twilio-paste/core/theme";
import { Stack } from "@twilio-paste/core/stack";
import TwitchIcon from "~/components/icons/twitch-icon";
import YoutubeIcon from "~/components/icons/youtube-icon";
import DiscordIcon from "~/components/icons/discord-icon";
import GithubIcon from "~/components/icons/github-icon";
import { Heading } from "@twilio-paste/core/heading";
import { Separator } from "@twilio-paste/core/separator";
import { Paragraph } from "@twilio-paste/core/paragraph";
import { Column, Grid } from "@twilio-paste/core/";
import { LinkedinIcon } from "~/components/icons/linkedin-icon";

export default function Index() {
  return (
    <Theme.Provider theme="dark">
      <Box
        display="flex"
        justifyContent={"center"}
        padding={["space0", "space80"]}
      >
        <LogoSquareWithMascotTransparentBg />
      </Box>
      <Box
        marginTop="space60"
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
      <Box
        display={"flex"}
        justifyContent={"center"}
        marginTop={"space200"}
        padding={["space0", "space80"]}
      >
        <Card>
          <Box maxWidth={"600px"}>
            <Heading as="h2" variant="heading20">
              Hi, I'm Wes! I build amazing products and teams that deliver.
            </Heading>
            <Paragraph>
              Dollar Dojo is my platform for sharing my experiences with anyone
              who wants to learn. We're building a community where we can all
              learn from each other. After 25 years in this game, I still learn
              new things from everyone around me, including junior engineers.
            </Paragraph>
            <Paragraph>
              I'm very passionate about helping people grow and traverse the
              waters of a career in software and technology. In many ways, I
              want to share everything with you that I wish someone would've
              told me 15 years ago. I'd certainly be much further along in my
              career, and it would have saved me from some lessons learned the
              hard way.
            </Paragraph>
            <Paragraph>
              If you're looking to grow your career in the software industry,
              Dollar Dojo is the community you've been looking for. I live
              stream development and research on Twitch, uploading videos to
              YouTube, and sharing my thoughts, discoveries, and otherwise
              random ideas on Discord. Our Discord has a great community of
              people who are always willing to help each other out and grow
              together.
            </Paragraph>
            <Paragraph>
              Everyone is welcome in our community with arms wide open and hugs
              to go around.{" "}
            </Paragraph>
            <Paragraph>
              Thanks for dropping by! I look forward to seeing you on stream or
              in the Discord!
            </Paragraph>
            <Paragraph>Until then... keep writing clean code!</Paragraph>
          </Box>
        </Card>
      </Box>
      <Box display="block" margin="space100">
        &nbsp;
      </Box>
    </Theme.Provider>
  );
}

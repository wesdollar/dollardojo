import { Box } from "@twilio-paste/core/box";
import { Grid, Column } from "@twilio-paste/core/grid";
import { DiscordIcon } from "./icons/discord-icon";
import { GithubIcon } from "./icons/github-icon";
import { LinkedinIcon } from "./icons/linkedin-icon";
import { TwitchIcon } from "./icons/twitch-icon";
import { YoutubeIcon } from "./icons/youtube-icon";
import { Anchor } from "@twilio-paste/core/anchor";
import { CalendarIcon } from "./icons/calendar-icon";

export const SocialLinks = () => {
  return (
    <Box
      justifyContent={"center"}
      padding={["space0", "space80"]}
      style={{ width: "100%", maxWidth: "750px", margin: "0 auto" }}
    >
      <Grid gutter={"space60"} vertical={[true, true, false]}>
        <Column span={6}>
          <Grid
            gutter="space50"
            rowGap={"space50"}
            columnGap={"space100"}
            style={{ justifyContent: "right" }}
          >
            <Column span={4}>
              <Anchor href="https://discord.gg/mhvcpSPbwu">
                <DiscordIcon />
              </Anchor>
            </Column>
            <Column span={4}>
              <Anchor href="https://twich.tv/dollardojo">
                <TwitchIcon />
              </Anchor>
            </Column>
            <Column span={4}>
              <Anchor href="https://youtube.com/@dollardojotech">
                <YoutubeIcon />
              </Anchor>
            </Column>
          </Grid>
        </Column>
        <Column span={6}>
          <Grid gutter="space50" rowGap={"space50"} columnGap={"space100"}>
            <Column span={4}>
              <Anchor href="https://github.com/wesdollar">
                <GithubIcon />
              </Anchor>
            </Column>
            <Column span={4}>
              <Anchor href="https://linkedin.com/in/wesdollar">
                <LinkedinIcon />
              </Anchor>
            </Column>
            <Column span={4}>
              <Anchor href="https://calendly.com/dollardojo">
                <CalendarIcon fill="white" />
              </Anchor>
            </Column>
          </Grid>
        </Column>
      </Grid>
    </Box>
  );
};

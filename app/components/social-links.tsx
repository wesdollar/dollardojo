import { Box } from "@twilio-paste/core/box";
import { Grid, Column } from "@twilio-paste/core/grid";
import React from "react";
import DiscordIcon from "./icons/discord-icon";
import GithubIcon from "./icons/github-icon";
import { LinkedinIcon } from "./icons/linkedin-icon";
import TwitchIcon from "./icons/twitch-icon";
import YoutubeIcon from "./icons/youtube-icon";

// create a react component that returns jsx
export default function SocialLinks() {
  return (
    <Box
      justifyContent={"center"}
      padding={["space0", "space80"]}
      style={{ width: "100%", maxWidth: "750px", margin: "0 auto" }}
    >
      <Grid gutter={"space60"} vertical={[true, false, false]}>
        <Column span={6}>
          <Grid gutter="space50" rowGap={"space50"} columnGap={"space100"}>
            <Column span={4}>
              <a
                href="//discord.gg/mhvcpSPbwu"
                target={"_blank"}
                rel="noreferrer"
              >
                <DiscordIcon />
              </a>
            </Column>
            <Column span={4}>
              <a
                href="//twich.tv/dollardojo"
                target={"_blank"}
                rel="noreferrer"
              >
                <TwitchIcon />
              </a>
            </Column>
            <Column span={4}>
              <a
                href="//youtube.com/@dollardojotech"
                target={"_blank"}
                rel="noreferrer"
              >
                <YoutubeIcon />
              </a>
            </Column>
          </Grid>
        </Column>
        <Column span={6}>
          <Grid gutter="space50" rowGap={"space50"} columnGap={"space100"}>
            <Column span={5} offset={1}>
              <a
                href="//github.com/wesdollar"
                target={"_blank"}
                rel="noreferrer"
              >
                <GithubIcon />
              </a>
            </Column>
            <Column span={5}>
              <a
                href="//linkedin.com/in/wesdollar"
                target={"_blank"}
                rel="noreferrer"
              >
                <LinkedinIcon />
              </a>
            </Column>
          </Grid>
        </Column>
      </Grid>
    </Box>
  );
}

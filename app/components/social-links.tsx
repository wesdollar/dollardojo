import { Box } from "@twilio-paste/core/box";
import { Grid, Column } from "@twilio-paste/core/grid";
import { DiscordIcon } from "./icons/discord-icon";
import { GithubIcon } from "./icons/github-icon";
import { LinkedinIcon } from "./icons/linkedin-icon";
import { TwitchIcon } from "./icons/twitch-icon";
import { YoutubeIcon } from "./icons/youtube-icon";
import { Anchor } from "@twilio-paste/core/anchor";
import { CalendarIcon } from "./icons/calendar-icon";

const socialLinksColumn1 = [
  { url: "https://discord.gg/mhvcpSPbwu", Icon: DiscordIcon },
  { url: "https://twich.tv/dollardojo", Icon: TwitchIcon },
  {
    url: "https://youtube.com/@dollardojotech",
    Icon: YoutubeIcon,
  },
];

const socialLinksColumn2 = [
  { url: "https://github.com/wesdollar", Icon: GithubIcon },
  {
    url: "https://linkedin.com/in/wesdollar",
    Icon: LinkedinIcon,
  },
  {
    url: "https://calendly.com/dollardojo",
    Icon: CalendarIcon,
  },
];

export const SocialLinks = () => {
  return (
    <Box
      justifyContent={"center"}
      padding={["space0", "space80"]}
      style={{ width: "100%", maxWidth: "750px", margin: "0 auto" }}
    >
      <Grid gutter={"space60"} vertical={[true, true, false]}>
        <Column span={6} style={{ display: "flex", justifyContent: "center" }}>
          <Grid
            gutter="space50"
            rowGap={"space50"}
            columnGap={"space100"}
            style={{ justifyContent: "right" }}
          >
            {socialLinksColumn1.map(({ url, Icon }, index) => (
              <Column span={4} key={`social-link-column-1-${index}`}>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <Anchor href={url} style={{ margin: "0 auto" }}>
                    <Icon />
                  </Anchor>
                </Box>
              </Column>
            ))}
          </Grid>
        </Column>
        <Column span={6}>
          <Grid gutter="space50" rowGap={"space50"} columnGap={"space100"}>
            {socialLinksColumn2.map(({ url, Icon }, index) => (
              <Column span={4} key={`social-link-column-2-${index}`}>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <Anchor href={url}>
                    <Icon />
                  </Anchor>
                </Box>
              </Column>
            ))}
          </Grid>
        </Column>
      </Grid>
    </Box>
  );
};

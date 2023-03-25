import { Heading } from "@twilio-paste/core/heading";
import { Card } from "@twilio-paste/core/card";
import { BodyParagraph } from "app/components/typography/body-paragraph";
import { Button } from "@twilio-paste/core/button";
import { Stack } from "@twilio-paste/core/stack";
import { Grid, Column, defaultGutterSize } from "@twilio-paste/core/grid";

export const BookSession = () => {
  return (
    <Card element="CARD">
      <Heading as="h1" variant="heading10">
        Book a session with Wes
      </Heading>
      <BodyParagraph>
        I'm available for 30 and 60 minute sessions to discuss whatever's on
        your mind. Sessions are free of charge, no strings attached. I'm here to
        help you level up!
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
  );
};

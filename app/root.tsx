import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import tailwindStylesheetUrl from "./styles/tailwind.css";
import { CustomizationProvider } from "@twilio-paste/core/customization";
import { Box } from "@twilio-paste/core/box";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <title>Dollar Dojo</title>
        <Meta />
        <Links />
      </head>
      <body>
        <CustomizationProvider
          baseTheme="dark"
          theme={{
            backgroundColors: {
              colorBackgroundBody: "#3D115E",
              colorBackgroundPrimary: "#DE3400",
            },
            borderColors: {
              colorBorderInverseWeakest: "#662D91",
              colorBorderPrimary: "#A72700",
            },
            shadows: {
              shadowBorderPrimary: "0 0 0 1px #A72700",
            },
            textColors: {
              colorTextPrimary: "#A72700",
            },
          }}
          elements={{
            CARD: {
              borderColor: "colorBorderInverseWeakest",
            },
          }}
        >
          <Box as="main" padding={["space0", "space200"]}>
            <Outlet />
          </Box>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </CustomizationProvider>
      </body>
    </html>
  );
}

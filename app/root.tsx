import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { CustomizationProvider } from "@twilio-paste/core/customization";
import linkedInImage from "./assets/linkedin-cover-1200x627.png";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

// eslint-disable-next-line react/function-component-definition
export default function App() {
  return (
    <html lang="en">
      <head>
        <title>Dollar Dojo</title>
        <Meta />
        <Links />
        <meta property="og:title" content="Dollar Dojo" />
        <meta property="og:image" content={linkedInImage} />
        <meta
          property="og:description"
          content="Dollar Dojo is a community for software engineers and technologists to learn and grow together."
        />
        <meta property="og:url" content="https://dollardojo.tech" />
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
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </CustomizationProvider>
      </body>
    </html>
  );
}

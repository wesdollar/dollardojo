import { json, MetaFunction } from "@remix-run/node";
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
import { dollarDojoDetails } from "./constants/dollar-dojo-details";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});

export function loader() {
  return json({
    ENV: {
      SITE_TITLE: process.env.SITE_TITLE,
    },
  });
}

// eslint-disable-next-line react/function-component-definition
export default function App() {
  return (
    <html lang="en">
      <head>
        <title>{dollarDojoDetails.name}</title>
        <Meta />
        <Links />
        <meta property="og:title" content={dollarDojoDetails.name} />
        <meta property="og:image" content={linkedInImage} />
        <meta
          property="og:description"
          content={dollarDojoDetails.description}
        />
        <meta property="og:url" content={dollarDojoDetails.url} />
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

import type { LinksFunction, LoaderArgs } from "@remix-run/node";
// eslint-disable-next-line no-duplicate-imports
import { json } from "@remix-run/node";
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

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <link rel="preconnect" href="https://assets.twilio.com" />
        <link
          rel="stylesheet"
          href="https://assets.twilio.com/public_assets/paste-fonts/1.5.0/fonts.css"
        ></link>
      </head>
      <body className="h-full">
        <CustomizationProvider
          baseTheme="dark"
          theme={{
            backgroundColors: {
              colorBackgroundBody: "#3D115E",
            },
            borderColors: {
              colorBorderInverseWeakest: "#662D91",
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

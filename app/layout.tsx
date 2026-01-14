import { ColorModeScript, theme } from '@chakra-ui/react'

import { Provider } from './provider'

import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://cherrytreebck.github.io/universal-subtitles-website"),
  title: "Universal Subtitles",
  description:
    "Universal Subtitles adds real-time subtitles to any video, website, or app. Accessible captions for everything you watch, anywhere.",
  keywords: [
    "universal subtitles",
    "benjamin kirschbaum",
    "real time subtitles",
    "live captions",
    "automatic subtitles",
    "subtitles for any video",
    "accessibility captions",
    "speech to text subtitles",
    "AI subtitles",
  ],
};

export default function Layout(props: { children: React.ReactNode }) {
  const colorMode = 'dark'

  return (
    <html lang="en" data-theme={colorMode} style={{ colorScheme: colorMode }}>
      <head>
        <meta name="google-site-verification" content="JQpVM8vclkKOBQUnzGhU9zTTNA_lKOLbkdbeMova2es" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
      </head>
      <body className={`chakra-ui-${colorMode}`}>
        <ColorModeScript initialColorMode={colorMode} />
        <Provider>{props.children}</Provider>
      </body>
    </html>
  )
}

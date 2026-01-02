import { MarketingLayout } from '#components/layout'

import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://cherrytreebck.github.io/universal-subtitles-website"),
  title: "Universal Subtitles | Subtitles for Everything",
  description:
    "Universal Subtitles adds real-time subtitles to any video, website, or app. Accessible captions for everything you watch, anywhere.",
  keywords: [
    "universal subtitles",
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
  return <MarketingLayout>{props.children}</MarketingLayout>
}

'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
  Spinner,
} from '@chakra-ui/react'

import { supabase } from 'lib/supabase_client';
import { useEffect, useState } from 'react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiCheck,
  FiCopy,
  FiFlag,
  FiMonitor,
  FiSliders,
  FiTerminal,
  FiThumbsUp,
  FiZap,
  FiMessageSquare,
  FiShield,
} from 'react-icons/fi'
import * as React from 'react'
import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
} from '#components/highlights'
import { FallInPlace } from '#components/motion/fall-in-place'
import faq from '#data/faq'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Universal Subtitles</title>
        <meta name="google-site-verification" content="JQpVM8vclkKOBQUnzGhU9zTTNA_lKOLbkdbeMova2es" />
      </Head>

      <Box>
        <HeroSection />
        <HighlightsSection />
        <FeaturesSection />
        <FaqSection />
      </Box>
    </>
  )
}

const downloadUrl = 'https://github.com/CherryTreeBCK/universal-subtitles-website/releases/download/v1.0.0/UniversalSubtitles.exe'

import { fetchDownloadsCount } from '../App'

const HeroSection: React.FC = () => {
  const [downloads, setDownloads] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchDownloadsCount().then(count => setDownloads(count));
  }, []);
    
  async function handleDownloadClick(
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) {
    e.preventDefault()
    setLoading(true)
    try {
      const { data, error } = await supabase.rpc('increment_website_downloads')
      if (error) throw error
  
      let newCount: number | null = null
      if (typeof data === 'number') {
        newCount = data
      } else if (Array.isArray(data)) {
        newCount = data[0] ?? null
      } else if (data && typeof data === 'object') {
        const key = Object.keys(data)[0]
        newCount = Number((data as any)[key]) || null
      }
  
      if (newCount !== null) setDownloads(newCount)
  
      window.open(downloadUrl, '_blank')
    } catch (err) {
      console.error('Failed to increment downloads:', err)
      window.open(downloadUrl, '_blank')
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 40 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Subtitles for everything
                <Br />
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
Universal Subtitles creates a floating overlay that shows live captions for any audio on your computer.
It helps deaf and hard-of-hearing users follow conversations and media in real time, and can also translate between languages so you can call, watch, or work across languages with confidence.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup spacing={4} alignItems="center" pt="10">
                <ButtonLink
                  colorScheme="primary"
                  size="lg"
                  href={downloadUrl}
                  as="button"
                  onClick={handleDownloadClick}
                  isLoading={loading}
                >
                  Download for Windows
                </ButtonLink>
              </ButtonGroup>
              <Box mt="3">
                <HStack spacing="3" alignItems="center">
                  <FallInPlace delay={0.4} fontSize="sm" color="muted">
                    Downloads
                  </FallInPlace>
                  <FallInPlace fontWeight="bold" fontSize="lg">
                    {downloads === null ? <Spinner size="xs" /> : downloads.toLocaleString()}
                  </FallInPlace>
                </HStack>
              </Box>
            </FallInPlace>
          </Hero>
        </Stack>
      </Container>
      
      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Works with any app',
            icon: FiMonitor,
            description:
              'Overlay captions on top of any application: Video players, conferencing apps, games, or browsers.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Real-time translation',
            icon: FiFlag,
            description:
              'Translate spoken audio between languages so you can call, watch, or collaborate across language barriers.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Customizable overlay',
            icon: FiSliders,
            description:
              'Change font size, colors, position, and opacity so subtitles match your workflow and accessibility needs.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Accessibility built in',
            icon: FiShield,
            description:
              'Empowers Deaf and hard-of-hearing users to fully engage in calls, videos, and media with accurate live captions and high-contrast, customizable text that fits individual needs.',
            iconPosition: 'left',
            delay: 1.1,
          },
          
          
          
        ]}
        reveal={FallInPlace}
      />
      
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard(downloadUrl)

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="What it does">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Universal Subtitles listens to the audio playing on your machine and
            displays live captions in an always-on-top overlay. Translate speech
            into another language, or show original-language captions — perfect
            for calls, videos, and meetings.
            <Br />
            It also makes conversations and media accessible to people who are
            Deaf or hard of hearing by providing accurate, low-latency captions
            with customizable appearance (font size, contrast, position).
          </Text>
        </VStack>
      </HighlightsItem>

      <HighlightsItem title="When to use it">
        <Text color="muted" fontSize="lg">
        Use Universal Subtitles to follow foreign-language media, caption remote meetings, 
        help deaf and hard-of-hearing users access spoken content, and enable multilingual 
        conversations, all without changing the apps you already use.
        </Text>
      </HighlightsItem>

      <HighlightsItem colSpan={[1, null, 2]} title="Easy to get started">
        <Text color="muted" fontSize="lg">
          Install, choose your input/output languages, and toggle the overlay on.
          Built-in hotkeys and simple appearance settings let you tune captions
          in seconds.
        </Text>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Box as="div">
          <Heading
            lineHeight="short"
            fontSize={['2xl', null, '4xl']}
            textAlign="left"
            as="h2"
            mb="2"
          >
            Live captions that follow your workflow.
          </Heading>
        </Box>
      }
      description={
        <Box as="div">
          <Text as="div">
            Universal Subtitles turns audio into readable captions and can translate
            between languages on the fly.
            <Br />
            Works with any app, is configurable, and designed for low-latency use.
          </Text>
        </Box>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Any app overlay',
          icon: FiMonitor,
          description:
            'An always-on-top overlay that works with conferencing apps, web players, streaming apps and more.',
          variant: 'inline',
        },
        {
          title: 'Live translation',
          icon: FiFlag,
          description:
            'See what people are saying in your language. Translation works in real time for smoother conversations.',
          variant: 'inline',
        },
        {
          title: 'Custom appearance',
          icon: FiSliders,
          description:
            'Adjust font size, colors, background opacity, and position to match your preferences or accessibility needs.',
          variant: 'inline',
        },
        {
          title: 'Hotkeys & shortcuts',
          icon: FiZap,
          description:
            'Quickly show/hide the overlay, switch languages, or pause captions with configurable hotkeys.',
          variant: 'inline',
        },
        {
          title: 'Privacy controls',
          icon: FiShield,
          description:
            'Choose how audio is processed and where text is sent — local-only or cloud-assisted options available.',
          variant: 'inline',
        },
        {
          title: 'Developer friendly',
          icon: FiTerminal,
          description:
            'Expose simple APIs and integrations so apps can embed captions or control the overlay programmatically.',
          variant: 'inline',
        },
        {
          title: 'Call & meeting support',
          icon: FiMessageSquare,
          description:
            'Works smoothly with VoIP and video-conferencing workflows so remote conversations are instantly accessible.',
          variant: 'inline',
        },
        {
          title: 'Multi-language',
          icon: FiFlag,
          description:
            'Support for many spoken languages for recognition and translation — switch languages on the fly.',
          variant: 'inline',
        },
        {
          title: 'Stable & performant',
          icon: FiThumbsUp,
          description: (
            <>
              Designed for low-latency captioning and minimal CPU impact so it won&apos;t get in the way of your work or calls.
            </>
          ),
          variant: 'inline',
        },
      ]}
    />
  )
}
const FaqSection = () => {
  return <Faq {...faq} />
}
export default Home

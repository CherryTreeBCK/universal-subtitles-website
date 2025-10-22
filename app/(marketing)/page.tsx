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
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
  FiGlobe,
  FiMonitor,
  FiMessageSquare,
  FiShield,
  FiZap,
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
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

export const meta: Metadata = {
  title: 'Universal Subtitles — Live, translated captions for any app',
  description:
    'Universal Subtitles shows live subtitles for any audio playing on your computer — calls, videos, apps — and can translate between languages in real time.',
}

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      <TestimonialsSection />

      <PricingSection />

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
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
                  Universal Subtitles creates a floating overlay that shows live
                  captions for any audio on your computer — calls, meetings,
                  videos, and apps.
                <Br />
                  Translate between languages in real time so you can call, watch,
                  or work across languages with confidence.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>

              <ButtonGroup spacing={4} alignItems="center" pt="10">
                <ButtonLink colorScheme="primary" size="lg" href="/download">
                  Download
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="/demo"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  Try demo
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>

          <Box
            height="560px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1000px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  // Replace this with an overlay screenshot or animated GIF that shows the subtitle overlay
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={675}
                  alt="Universal Subtitles overlay screenshot"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
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
              'Overlay captions on top of any application — video players, conferencing apps, games, or browsers.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Real-time translation',
            icon: FiGlobe,
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
            title: 'Privacy-first',
            icon: FiShield,
            description:
              'Built with privacy in mind — configurable processing options let you control how audio and text are handled.',
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
  // replace this with the acutal url
  const downloadUrl = 'https://universal-subtitles.app/download'
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
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                Download
              </Text>{' '}
              <Text color="cyan.300" display="inline">
                universal-subtitles.app
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy download link"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>

      <HighlightsItem title="When to use it">
        <Text color="muted" fontSize="lg">
          Use Universal Subtitles to follow foreign-language media, caption remote
          meetings, assist accessibility, or enable multilingual conversations
          without changing the apps you already use.
        </Text>
      </HighlightsItem>

      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Early user"
        avatar="/static/images/avatar.jpg"
        gradient={['pink.200', 'purple.500']}
      >
        “Universal Subtitles made our international calls so much easier — we
        could see live captions and translations without changing any workflow.”
      </HighlightsTestimonialItem>

      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Easy to get started"
      >
        <Text color="muted" fontSize="lg">
          Install, choose your input/output languages, and toggle the overlay on.
          Built-in hotkeys and simple appearance settings let you tune captions
          in seconds.
        </Text>
        <Wrap mt="8">
          {[
            'live captions',
            'translation',
            'overlay',
            'hotkeys',
            'accessibility',
            'low-latency',
            'appearance',
            'API',
            'privacy settings',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Live captions that follow your workflow.
        </Heading>
      }
      description={
        <>
          Universal Subtitles turns audio into readable captions and can translate
          between languages on the fly.
          <Br />
          Works with any app, is configurable, and designed for low-latency use.
        </>
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
          icon: FiGlobe,
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
              Designed for low-latency captioning and minimal CPU impact so it
              won&apos;t get in the way of your work or calls.
            </>
          ),
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        Choose a plan that fits your needs — free tier for basic captions, paid
        plans for higher throughput, advanced translations, and premium support.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home

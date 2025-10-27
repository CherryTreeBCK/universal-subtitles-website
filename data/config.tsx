import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'

const siteConfig = {
  seo: {
    title: 'Universal Subtitles',
    description: 'Subtitles for Everything',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{' '}
        <Link href="https://github.com/CherryTreeBCK">Ben Kirschbaum</Link>
      </>
    ),
    links: [
      {
        href: 'https://github.com/CherryTreeBCK',
        label: <FaGithub size="14" />,
      },
    ],
  },
}

export default siteConfig

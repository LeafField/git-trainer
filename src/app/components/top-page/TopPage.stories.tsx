import { Meta, StoryObj } from '@storybook/react'
import TopPage from './TopPage'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const meta: Meta<typeof TopPage> = {
  title: 'page/TopPage',
  component: TopPage,
  decorators: [
    (StoryComponents) => (
      <div className={inter.className}>
        <StoryComponents />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof meta>

export const TopPageStory: Story = {}

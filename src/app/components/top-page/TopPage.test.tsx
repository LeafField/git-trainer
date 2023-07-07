import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as story from './TopPage.stories'

const { TopPageStory } = composeStories(story)

describe('トップページのレンダリングテスト', () => {
  test('top-pageの各Roleの存在確認', () => {
    render(<TopPageStory />)
    expect(
      screen.getByText('Gitを手軽に空打ちできるサイト')
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Git Empty' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'Let’s Play!' })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'How to use' })).toBeInTheDocument()
  })

  test('それぞれのRoleの個数確認', () => {
    render(<TopPageStory />)
    expect(screen.getAllByRole('link')).toHaveLength(2)
    expect(screen.getAllByRole('heading')).toHaveLength(1)
    expect(screen.getAllByText('Gitを手軽に空打ちできるサイト')).toHaveLength(1)
  })
})

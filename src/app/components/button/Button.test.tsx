import { render, screen } from '@testing-library/react'
import Button from './Button'
import { composeStories } from '@storybook/testing-react'
import * as story from './Button.stories'

const { Primary, Secondary } = composeStories(story)

describe('Buttonのレンダリングテスト', () => {
  test('Buttonの機能テスト', () => {
    render(<Button link="/" title="test" color="primary" />)
    expect(screen.getByRole('link')).toBeInTheDocument()
    expect(screen.getByText('test')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/')
  })

  test('primaryのレンダリングテスト', () => {
    render(<Primary />)
    expect(
      screen.getByRole('link', { name: 'Let’s Play!' })
    ).toBeInTheDocument()
  })

  test('secondaryのレンダリングテスト', () => {
    render(<Secondary />)
    expect(screen.getByRole('link', { name: 'How to use' })).toBeInTheDocument()
  })
})

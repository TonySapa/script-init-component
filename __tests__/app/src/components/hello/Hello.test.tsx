import React from 'react'
import { render, screen } from '@testing-library/react'
import Hello from './Hello'

describe('Block of tests', () => {
  test('renders children text', () => {
    render(<Hello>Hola</Hello>)
    const demoElement = screen.getByText(/Hola/i)
    expect(demoElement).toBeInTheDocument()
  })
})

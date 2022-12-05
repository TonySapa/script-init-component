import React from 'react'
import { render, screen } from '@testing-library/react'
import Custom from './Custom'

describe('Block of tests', () => {
  test('renders children text', () => {
    render(<Custom>Hola</Custom>)
    const demoElement = screen.getByText(/Hola/i)
    expect(demoElement).toBeInTheDocument()
  })
})

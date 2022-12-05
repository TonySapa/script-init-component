import React, { memo } from 'react'

import { useStyles } from './Custom.styles'
import { CustomProps } from './Custom.types'

/******************************************************************************
 * React Functional Component that renders a Button.
 * @param {string} label string with button text.
 * @returns {ReactElement} HTML button with text specified as prop.
 *****************************************************************************/
const Custom = memo(({ children }: CustomProps) => {
  const classes = useStyles()

  /****************************************************************************
   * Props to be passed to HTML button element.
   * @param {string} className CSS class generated.
   ***************************************************************************/
  const buttonElementProps = {
    className: classes.buttonElement
  }

  /****************************************************************************
   * Props to be passed to HTML span element that contains button text.
   * @param {string} className CSS class generated.
   ***************************************************************************/
  const labelSpanElementProps = {
    className: classes.buttonElement
  }

  return (
    <button {...buttonElementProps}>
      <span {...labelSpanElementProps}>{children}</span>
    </button>
  )
})

export default Custom

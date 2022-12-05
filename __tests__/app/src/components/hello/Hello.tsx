import React from 'react'

import { useStyles } from './Hello.styles'
import { HelloProps } from './Hello.types'

const Hello = ({ children }: HelloProps) => {
  const classes = useStyles()
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  )
}

export default Hello

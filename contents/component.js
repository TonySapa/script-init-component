const componentFile = (componentName) =>
`import React from 'react'

import { useStyles } from './${componentName}.styles'
import { ${componentName}Props } from './${componentName}.types'

const ${componentName} = ({ children }: ${componentName}Props) => {
  const classes = useStyles()
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  )
}

export default ${componentName}
`

export default componentFile

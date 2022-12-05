/******************************************************************************
 * @param {string} componentName the name of the component.
 * @returns string containing all react/ts code of the component file.
 *****************************************************************************/
const componentFile = (componentName) =>
  `import { memo } from 'react'

import { useStyles } from './${componentName}.styles'
import { ${componentName}Props } from './${componentName}.types'

/******************************************************************************
 * React Functional Component that renders a Button.
 * @param {string} label string with button text.
 * @returns {ReactElement} HTML button with text specified as prop.
 *****************************************************************************/
const ${componentName} = memo(({ children }: ${componentName}Props) => {
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

export default ${componentName}
`;

export default componentFile;

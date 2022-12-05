import template1 from './template1.js'
const componentName = process?.argv[3]

/******************************************************************************
 * Object containing any custom configuration to script 'init-component'
 * See more: https://github.com/TonySapa/script-init-component
 *****************************************************************************/
const config = {
  /****************************************************************************
   * replace all the default files to generate for the specified ones.
   ***************************************************************************/
  defaultFiles: [
    {
      name: 'file.custom.jsx',
      template: template1(componentName)
    },
    {
      name: `${componentName}.another.js`,
      template: template1()
    }
  ]
}

export default config

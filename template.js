/******************************************************************************
 * @param {string} componentName the name of the component.
 * Demo template to replace for default config templates in
 * init-component.config.js
 *****************************************************************************/
const template = (componentName) =>
`const random = 'hello template'
const anotherPieceOfCode = <h1>Hello ${componentName || 'noName'}</h1>
`

export default template

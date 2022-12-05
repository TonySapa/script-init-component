import fs from 'fs'
import { writeFile } from "../write-file/index.js"
import {
  component,
  stories,
  styles,
  testFile,
  types
} from '../../contents/index.js'

/******************************************************************************
 * Directory of components. A folder named components. Should be specified
 * on script on package.json as the first parameter.
 *****************************************************************************/
const componentsDir = process.argv[2] !== undefined
 ? process.argv[2]
 : '../src/components'

/******************************************************************************
 * The name to assign to the new component.
 *****************************************************************************/
const componentName = process.argv[3] !== undefined ? process.argv[3] : 'Demo'

/******************************************************************************
 * The folder name. Is the componentName transformed from camel case.
 * Example: componentName -> component-name
 *****************************************************************************/
const componentFolder = componentName
 .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
 .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`)

/******************************************************************************
 * Classification of the component according to atomic design principles.
 * https://bradfrost.com/blog/post/atomic-web-design/
 *****************************************************************************/
const atomicDesignLevel = process.argv[4] || ''

/******************************************************************************
 * @param {string} configFile Config file located at source folder.
 * @param {string} componentName the name to assign to the component.
 * @param {string} [atomicDesignLevel] Classification following atomic design
 * principles. https://bradfrost.com/blog/post/atomic-web-design/
 * @returns {File} folders and files containing a basic component.
 *****************************************************************************/
export const createComponent = async (configFile) => {
  const dir = `${componentsDir}/${atomicDesignLevel}${componentFolder}`

  fs.mkdirSync(dir, { recursive: true }, (err) => {
      if (err) throw err
    }
  )

  if (configFile?.defaultFiles) {
    configFile.defaultFiles.forEach(file => {
      writeFile(dir, file?.name, file?.template)
    })
  } else {
    writeFile(dir, `${componentName}.styles.tsx`, styles)
    writeFile(dir, `${componentName}.types.ts`, types(componentName))
    writeFile(dir, `${componentName}.tsx`, component(componentName))
    writeFile(dir, `${componentName}.test.tsx`, testFile(componentName))
    writeFile(dir, `${componentName}.stories.tsx`, stories(componentName))  
  }
}

import path from 'path'
import { createComponent } from './utils/create-component/index.js'

try {
  path.resolve('../../../../init-component.config.js')
  const localConfigFileModule = await import(
    '../../../../init-component.config.js'
  )
  // test locally import('../init-component.config.js')
  const localConfigFile = localConfigFileModule?.default
  createComponent(localConfigFile)
} catch (error) {
  createComponent()
}

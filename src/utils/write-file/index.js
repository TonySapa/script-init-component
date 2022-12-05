import fs from 'fs'
import { errorLog, successLog } from '../logs/index.js'

/******************************************************************************
 * Attempts to write a file with sepcified file name, format and content.
 * Logs successful or error messages.
 * @param {string} dir the directory where the component will be located.
 * @param {string} fileName filename of the file including extension.
 * @param {string} content content to be writen on the file.
 * @returns {void} Write a file and log if successful or not.
 *****************************************************************************/
export const writeFile = (
  dir,
  fileName,
  content
) => {
  try {
    fs.writeFileSync(`${dir}/${fileName}`, content)
    successLog(fileName)
  } catch (err) {
    errorLog(fileName)
  }
}

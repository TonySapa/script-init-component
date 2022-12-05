/******************************************************************************
 * @param {string} fileName name of the file, including extension.
 * @returns {void} console log with feedback message.
 *****************************************************************************/
export const successLog = (fileName) => {
  const message = `\u001b[1;32m ✓ ${fileName} successfully generated.`
  console.log(message)
}

/******************************************************************************
 * @param {string} fileName name of the file, including extension.
 * @returns {void} console log with feedback message.
 *****************************************************************************/
export const errorLog = (fileName) => {
  const message = `\u001b[1;31m ✖ ${fileName} could not be generated.`
  console.log(message)
}

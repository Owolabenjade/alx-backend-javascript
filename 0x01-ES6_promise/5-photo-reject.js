/**
 * Returns a Promise that rejects with an Error with the specified message
 * @param {string} fileName - File name
 * @return {Promise}
 */
export default function uploadPhoto(fileName) {
    return Promise.reject(new Error(`${fileName} cannot be processed`));
  }
/**
 * Function that logs a message based on the response from getResponseFromAPI
 * @return {Promise}
 */
export default function handleResponseFromAPI(promise) {
    return promise
      .then(() => ({ status: 200, body: 'success' }))
      .catch(() => new Error())
      .finally(() => console.log('Got a response from the API'));
  }
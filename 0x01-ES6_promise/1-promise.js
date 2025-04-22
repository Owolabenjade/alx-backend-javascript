/**
 * Returns a promise with the specified response based on the boolean parameter
 * @param {boolean} success - Determines whether the promise resolves or rejects
 * @return {Promise}
 */
export default function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
      if (success) {
        resolve({
          status: 200,
          body: 'Success',
        });
      } else {
        reject(new Error('The fake API is not working currently'));
      }
    });
  }
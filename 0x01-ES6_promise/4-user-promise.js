/**
 * Returns a resolved promise with an object with the specified attributes
 * @param {string} firstName - First name
 * @param {string} lastName - Last name
 * @param {string} fileName - File name
 * @return {Promise}
 */
export default function signUpUser(firstName, lastName) {
    return Promise.resolve({
      firstName,
      lastName,
    });
  }
/**
 * Returns a promise handling two other promises with Promise.all
 * @param {Promise} promise1 - First promise
 * @param {Promise} promise2 - Second promise
 * @return {Promise}
 */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
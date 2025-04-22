/**
 * Async function that calls three functions that return promises
 * and returns an array with the results
 * @param {string} firstName - User's first name
 * @param {string} lastName - User's last name
 * @param {string} fileName - File name
 * @return {Array}
 */
import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser(fileName, firstName, lastName) {
  try {
    const photo = await uploadPhoto(fileName);
    const user = await createUser(firstName, lastName);
    
    return {
      photo,
      user,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
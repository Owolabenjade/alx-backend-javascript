/**
 * Returns the value of the first resolved promise
 * @param {Promise} chinaDownload - First promise
 * @param {Promise} USDownload - Second promise
 * @return {Promise}
 */
export default function loadBalancer(chinaDownload, USDownload) {
    return Promise.race([chinaDownload, USDownload]);
  }
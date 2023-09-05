/* eslint-disable no-console */
// Init
const axios = require('axios');
const { baseUrl, orgId, projectId } = require('../config');

// API Call
const request = async (method, appName, secretName, body) => {
  const url =
    baseUrl + orgId + '/projects/' + projectId + '/apps/' + appName + '/secrets/' + secretName;

  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     axios.defaults.headers = {
  //       Authorization: `Bearer ${token}`,
  //     };
  //   }
  return new Promise((resolve, reject) => {
    axios[method](url, body)
      .then((res) => {
        console.log('🚀 ~ file: request.js:24 ~ returnnewPromise ~ res:', res);
        return resolve(res);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('API Error --------> ', err?.response?.status);
        reject(err);
      });
  });
};

// Export;
module.export = request;

const needle = require('needle');

// Define and export fetchMyIP. This function should: fetch the IP address from the API, using the needle function, and then return said IP address.

const fetchMyIP = function() {
  return needle('get', 'https://api.ipify.org?format=json') // calling needle as a function returns a promise, so we can chain .then directly 
    .then((response) => {
      const ip = response.body.ip; //Extract the IP address from the response body
      return ip;
    });
  };


module.exports = { fetchMyIP };
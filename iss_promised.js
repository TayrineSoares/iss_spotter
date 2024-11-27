const needle = require('needle');

// This function fetchs the IP address from the API, using the needle function, and then return said IP address.

const fetchMyIP = function() {
  return needle('get', 'https://api.ipify.org?format=json') // calling needle as a function returns a promise, so we can chain .then directly 
    .then((response) => {
      const ip = response.body.ip; //Extract the IP address from the response body
      return ip;
    });
  };


 // Makes a request to ipwho.is using the provided IP address to get its geographical information (latitude/longitude)
 // Input: IP address as a string
 // Returns: Promise of request for lat/lon

const fetchCoordsByIP = function(ip) {
  return needle('get', `http://ipwho.is/${ip}`)
  .then((response) => {
    const latitude = response.body.latitude; 
    const longitude = response.body.longitude; 
    return {latitude, longitude};
  });
};

const fetchISSFlyOverTimes = function(coords) {
  
  return needle('get',`https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`)
  .then((response) => {
    const body = response.body;
    const flyTimes = body.response;
    return flyTimes;
  });
}

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };



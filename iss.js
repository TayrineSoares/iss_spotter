/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const needle = require('needle');

// fetches my Ip Address
const fetchMyIp = function(callback) {
  needle.get('https://api.ipify.org?format=json', (error, response) => {
    
    if (error) {
      callback(error, null);
      return;
    }
    
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${response.body}`;
      callback(Error(msg), null);
      return;
    }

    if (response.body.ip) {
      const ip = response.body.ip;
      callback(null, ip);
    } else {
      callback(Error('IP address not found in the response body'), null);
    }
  });
};

// takes in an IP address and returns the latitude and longitude for it.
const fetchCoordsByIp = function(ip, callback) {
  needle.get(`http://ipwho.is/${ip}`, (error, response, body) => {
        
    if (error) {
      callback(error, null);
      return;
    }

    if (!body.success) {
      const message = `Success status was ${body.success}. Server message says: ${body.message} when fetching for IP ${body.ip}`;
      callback(Error(message), null);
      return;
    }

    const latitude = body.latitude;
    const longitude = body.longitude;
    callback(null, {latitude, longitude});
  });
};


const fetchISSFlyOverTimes = function(coords, callback) {
  
  needle.get(`https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching ISS pass times: ${body}`), null);
      return;
    }

    const flyTimes = body.response;
    callback(null, flyTimes);
  });
};



module.exports =  {
  fetchMyIp,
  fetchCoordsByIp,
  fetchISSFlyOverTimes
};


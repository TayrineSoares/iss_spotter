/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const needle = require('needle');

const fetchMyIp = function(callback) { 
  const url = 'https://api.ipify.org?format=json'; 

  needle.get(url, (error, response) => {
    
    if (error) {
      callback(error, null);
      return;
    }
    if (response) {
      const ip = response.body.ip; 
      console.log(ip);
      callback(null, ip);
    }
  });
};




module.exports = { fetchMyIp };
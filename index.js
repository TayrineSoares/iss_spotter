const { fetchMyIp } = require('./iss');
const { fetchCoordsByIp } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

// fetchMyIp((error, ip) => {
//   if (error) {
//     console.error(`It didnt work! ${error}`);
//     return;
//   }
//   console.log(`It worked! Returned IP: ${ip}`);
// });

// fetchCoordsByIp(ip, (error, coordinates)=> {
//   if (error) {
//     console.error(`It didnt work! ${error}`);
//     return;
//     }
//   console.log("Your coordinates:", coordinates);
// });

const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };
fetchISSFlyOverTimes(exampleCoords, (error, flyTimes) => {
  if (error) {
    console.error(`It didnt work! ${error}`);
    return;
  }
  console.log("Flying times based on your location: ", flyTimes);
});




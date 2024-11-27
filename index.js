// const { fetchMyIp } = require('./iss');
// const { fetchCoordsByIp } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');


/** 
 * Input: 
 *   Array of data objects defining the next fly-overs of the ISS.
 *   [ { risetime: <number>, duration: <number> }, ... ]
 * Returns: 
 *   undefined
 * Sideffect: 
 *   Console log messages to make that data more human readable.
 *   Example output:
 *   Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) for 468 seconds!
 */
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});

// ---------------------------------------------------------------

// fetchMyIp((error, ip) => {
//   if (error) {
//     console.error(`It didnt work! ${error}`);
//     return;
//   }
//   console.log(`It worked! Returned IP: ${ip}`);
// });



// fetchCoordsByIp("99.238.26.91", (error, coordinates)=> {
//   if (error) {
//     console.error(`It didnt work! ${error}`);
//     return;
//     }
//   console.log("Your coordinates:", coordinates);
// });



// const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };
// fetchISSFlyOverTimes(exampleCoords, (error, flyTimes) => {
//   if (error) {
//     console.error(`It didnt work! ${error}`);
//     return;
//   }
//   console.log("Flying times based on your location: ", flyTimes);
// });



// nextISSTimesForMyLocation((error, passTimes) => {
//   if (error) {
//     return console.log("It didn't work!", error);
//   }
//   // success, print out the deets!
//   console.log(passTimes);
// });



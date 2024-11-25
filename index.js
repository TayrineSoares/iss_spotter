const { fetchMyIp } = require('./iss');
const { fetchCoordsByIp } = require('./iss');

fetchCoordsByIp("99.238.26.91", (error, coordinates)=> {
  if (error) {
    console.error(`It didnt work! ${error}`);
    return;
    }
  console.log("Your coordinates:", coordinates);
});


// fetchMyIp((error, ip) => {
//   if (error) {
//     console.error(`It didnt work! ${error}`);
//     return;
//   }
//   console.log(`It worked! Returned IP: ${ip}`);
// });


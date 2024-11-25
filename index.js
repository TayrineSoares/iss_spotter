const { fetchMyIp } = require('./iss'); 

fetchMyIp((error, ip) => {
  if (error) {
    console.error(`It didnt work! ${error}`);
    return;
  }
  console.log(`It worked! Returned IP: ${ip}`);

});

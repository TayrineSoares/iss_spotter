const { nextISSTimesForMyLocation } = require('./iss_promised');

const printFlyTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then(flyTimes => {
    printFlyTimes(flyTimes);
  });
const { fetchMyIP } = require('./iss_promised');

fetchMyIP ()
  .then((response) => console.log(response));
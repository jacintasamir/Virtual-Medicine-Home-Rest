const axios = require('axios');

module.exports.getAddress = async (lat, lon) => {
  const requestURL = `https://atlas.microsoft.com/search/address/json?api-version=1.0&limit=1&subscription-key=${process.env.AZ_MAPS_SEARCH_API_KEY}&query=${lat,lon}`;

  try {
    const { data } = await axios.get(requestURL);

    if (data.summary.numResults < 1) {
      return null;
    }

    const address = data.addresses[0].freeformAddress;
    return address;
  } catch (err) {
    console.log(err);
    throw new Error('Could not find a valid address using the given latitude and longitude.');
  }
};
const axios = require('axios');

module.exports.closestPoint = async (address) => {
    const requestURL = `https://eu.atlas.microsoft.com/spatial/closestPoint/json?api-version=2022-08-01&udid={udid}&subscription-key=${process.env.AZ_MAPS_SEARCH_API_KEY}&lat=${lat}&lon=${lon}` 
    try {
        const { data } = await axios.get(requestURL);
    
        if (data.summary.numResults < 1) {
          return null;
        }
    
        const locationCoordinates = data.results[0].position;
        return locationCoordinates;
      } catch (err) {
        console.log(err);
        throw new Error('Could not find a valid location using the given address.');
      }
}

module.exports.dataUpload = async () => {
    const requestURL2 = `https://eu.atlas.microsoft.com/mapData/upload?api-version=1.0&subscription-key=${process.env.AZ_MAPS_SEARCH_API_KEY}&dataFormat=geojson`
    try {
        const { data } = await axios.get(requestURL2);
    
        if (data.summary.numResults < 1) {
          return null;
        }
    
        const locationCoordinates = data.results[0].position;
        return locationCoordinates;
      } catch (err) {
        console.log(err);
        throw new Error('Could not find a valid location using the given address.');
      }
}
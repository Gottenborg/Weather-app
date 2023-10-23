import { lat, lng, apiKey } from "../configs/globals";
export const getForecastWeather = () => {
  const options = {method: 'GET', headers: {accept: 'application/json'}};

return fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${lat},${lng}&apikey=${apiKey}`, options)
  .then(response => response.json())
  .then(response => {
    return response;
  })
  .catch(err => {
    console.error(err)
    return null
  });
}
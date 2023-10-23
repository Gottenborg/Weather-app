import { weathercodeMap } from "../configs/weathercodeMap"
import { ForecastType } from "../types/ForecastType"

export const ForecastPage = ({data}:{data:ForecastType}) => {

  const dailyForecasts = data.timelines.daily
  console.log('data', data.timelines.daily)

  return (
    <section className="bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-semibold mb-4">5-Day Forecast</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
        {dailyForecasts.map((day, index) => {
          return (
            <div
              key={index}
              className="bg-gray-900 p-4 rounded-lg shadow-md">
              <h3 className="text-xl mb-2">{day.windSpeedAvg}</h3>
              <p className="text-lg mb-2">{day.temperatureAvg}°C</p>
              <p className="text-lg">{weathercodeMap.get(day.weatherCodeMin)}</p>
            </div>
          )
        }
        )}
      </div>
    </section>
  )
}
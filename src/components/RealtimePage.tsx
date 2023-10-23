import { CurrentWeatherType } from '../types/currentWeatherType'
import { weathercodeMap } from '../configs/weathercodeMap'
import { CalamityButton } from './CalamityButton'

export const RealtimePage = ({data, changeView}:{data:CurrentWeatherType, changeView:()=>void}) => {

  return (
    <>
      <section className="bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-semibold mb-4">Current Weather</h2>
        <div className="bg-gray-900 p-4 rounded-lg shadow-md">
          <div className="text-xl mb-2">Current Temperature: {data.data.values.temperature}°C</div>
          <div className="text-lg mb-2">Condition: {weathercodeMap.get(data.data.values.weatherCode)} </div>
          <div className="text-lg">Wind Speed: {data.data.values.windSpeed} km/h</div>
        </div>
      </section>
      <section className="bg-gray-800 text-white p-4">
        <CalamityButton changeView={changeView}/>
      </section>
    </>
  )
}
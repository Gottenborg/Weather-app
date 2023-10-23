import { createContext, useState, useEffect } from 'react';

import { getRealtimeWeather } from "../api/realtimeWeather"
import { getForecastWeather } from "../api/forecastWeather"
import { CurrentWeatherType } from '../types/currentWeatherType'
import { ForecastType } from '../types/ForecastType'

type WeatherContextType = {
  loading: boolean
  currentWeather: CurrentWeatherType | undefined
  forecasts: ForecastType | undefined
}

const WeatherContext = createContext<WeatherContextType>({
  loading: true,
  currentWeather: undefined,
  forecasts: undefined,
});

const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherType>();
  const [forecasts, setForecastWeather] = useState<ForecastType>();
  const [loading, setLoading] = useState<boolean>(true)


  useEffect(() => {
    const fetchData = async() => {
      const realtime = await getRealtimeWeather()
      const forecast = await getForecastWeather()
      setCurrentWeather(realtime)
      setForecastWeather(forecast)
      setLoading(false)
    }
    fetchData()
  }, []);

  return (
    <WeatherContext.Provider value={{ currentWeather, forecasts, loading  }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };

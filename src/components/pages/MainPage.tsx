import { CALAMITY, FORECAST, REALTIME, ViewType } from '../../configs/globals'
import { ForecastPage } from '../../components/ForecastPage'
import { RealtimePage } from '../../components/RealtimePage'
import { useContext, useState } from 'react'
import { Loading } from '../Loading'
import { Navbar } from '../Navbar'
import { WeatherContext } from '../../context/weatherContext'
import { CalamityPage } from '../CalamityPage'

export const MainPage:() => React.ReactNode = () => {
  const [view, setView] = useState<ViewType>(REALTIME)

  const {loading, forecasts, currentWeather} = useContext(WeatherContext)

  const changeView = (value:ViewType) => {
    if(value === view) return

    setView(view)
  }

  const itsAnEmergency = () => {
    setView(CALAMITY)
  }

  return (
    <>
      {view === CALAMITY ?
       <CalamityPage />
      :
      loading === true ?
        <Loading/>
      :
        currentWeather === undefined || forecasts === undefined ?
        <div>WE do not have data dont risk it!</div>
      :
        <>
          <Navbar view={view} changeView={changeView}></Navbar>
          {view === REALTIME && <RealtimePage data={currentWeather} changeView={itsAnEmergency} />}
          {view === FORECAST && <ForecastPage data={forecasts} />}
        </>
      }
    </>
  )
}
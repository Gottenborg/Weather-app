import { useEffect, useState } from "react"
import { CalamityType } from "../types/CalamityType"
import { Loading } from "./Loading"

export const CalamityPage = () => {
  const [calamity, setCalamity] = useState<CalamityType>()

  const calamityEvents = [
    {
      temperature: "-20",
      windspeed: "Tornado",
      weatherCondition: "Hurricane"
    },
    {
      temperature: "-40",
      windspeed: "Cyclone",
      weatherCondition: "Flood"
    },
    {
      temperature: "10",
      windspeed: "5",
      weatherCondition: "Tsunami warning"
    }
  ];

  const calamityEvent = () => {
    const randomIndex = Math.floor(Math.random() * calamityEvents.length);
    return calamityEvents[randomIndex];
  }

  useEffect(() => {
    const calamity = calamityEvent()
    setCalamity(calamity)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  

  return (
    calamity === undefined  ?
      <Loading/>
    :
      <section className="bg-red-600 text-white p-4 h-screen">
        <h2 className="text-2xl font-semibold mb-4 text-center">DO NOT GO IN</h2>
        <div className="bg-red-900 p-4 rounded-lg shadow-md">
          <div className="text-xl mb-2">Current Temperature: {calamity.temperature} °C</div>
          <div className="text-lg mb-2">Condition: {calamity.weatherCondition} </div>
          <div className="text-lg">Wind Speed: {calamity.windspeed} km/h</div>
        </div>
      </section>
      )
    }
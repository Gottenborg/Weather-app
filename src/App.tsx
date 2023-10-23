import './App.css'

import { WeatherProvider  } from './context/weatherContext'
import { MainPage } from './components/pages/MainPage'

function App() {
  return (
    <WeatherProvider>
      <main className='bg-gray-800 h-screen'>
          <MainPage/>
      </main>
    </WeatherProvider>
  )
}

export default App

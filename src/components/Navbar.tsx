import classnames from "classnames";
import { REALTIME, FORECAST, ViewType } from '../configs/globals'

type NavbarType = {
  view: ViewType
  changeView: (value:ViewType) => void
}

export const Navbar = ({view, changeView}:NavbarType) => {
  return (
    <header className="bg-gray-800 text-white py-4 w-full">
      <div className="flex justify-center">
        <div
          className={classnames(
            "w-1/2 text-center py-2 cursor-pointer",
            {
              "bg-blue-500": view === REALTIME,
              "bg-gray-800": view !== REALTIME,
            }
          )}
          onClick={() => changeView(REALTIME)}
        >
          Realtime
        </div>
        <div
          className={classnames(
            "w-1/2 text-center py-2 cursor-pointer",
            {
              "bg-blue-500": view === FORECAST,
              "bg-gray-800": view !== FORECAST,
            }
          )}
          onClick={() => changeView(FORECAST)}
        >
          Forecast
        </div>
      </div>
    </header> 
  );
}
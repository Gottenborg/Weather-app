import { useEffect, useState } from "react"
import { SunnyIcon } from './icons/SunnyIcon'
import {RainyIcon} from './icons/RainyIcon'
import { CloudyIcon } from './icons/CloudyIcon'

export const Loading = () => {
  const icons = [<SunnyIcon />, <RainyIcon />, <CloudyIcon />];
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 1000);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      {icons[currentIconIndex]}
    </div>
  );
}
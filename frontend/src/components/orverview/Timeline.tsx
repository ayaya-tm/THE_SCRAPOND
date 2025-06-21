import React,{useState} from "react";
import TimelineDetail from "./TimelineaDetail";

const Timeline = () => {
  const [year, setyear] = useState(2023);
  const clickYear = (year: number) => {
    setyear(year);
  };

  return (
    <>
      <div className="flex">
        <div className="px-6 py-2 bg-yellow-400/80 text-red-900 font-semibold shadow-md hover:bg-yellow-300 transition duration-200">
          <button onClick={() => clickYear(2023)}>2023</button></div>
        <div className="px-6 py-2 bg-yellow-400/80 text-red-900 font-semibold shadow-md hover:bg-yellow-300 transition duration-200">
          <button onClick={() => clickYear(2024)}>2024</button></div>
        <div className="px-6 py-2 bg-yellow-400/80 text-red-900 font-semibold shadow-md hover:bg-yellow-300 transition duration-200">
          <button onClick={() => clickYear(2025)}>2025</button></div>
      </div>
      <TimelineDetail year={year} />
    </>


  )
};
export default Timeline;
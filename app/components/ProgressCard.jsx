"use client";
import { useEffect, useState } from "react";

export const ProgressCard = ({ character }) => {
  const [totalMovies, setTotalMovies] = useState(150);
  const [producedMovies, setProducedMovies] = useState(120);
  const [percentage, setPercentage] = useState(
    Math.ceil((producedMovies / totalMovies) * 100)
  );

  useEffect(() => {
    if (Object.keys(character).length === 0) return;
    if (!character) return;
    setTotalMovies(
      Number(character?.series?.available) +
        Number(character?.stories?.available)
    );
    setProducedMovies(Number(character?.series?.available));
    setPercentage(Math.ceil((producedMovies / totalMovies) * 100));
  }, [character, totalMovies, producedMovies, percentage]);

  return (
    <div className="bg-content-card rounded-md border-[#42331A] border-[0.7px] p-5">
      <h2 className="uppercase text-lg text-center font-medium">
        Progress of produced movies
      </h2>
      <div className="flex flex-col items-end py-4">
        <span className="text-gold text-xs">{totalMovies} Movies</span>
        <span className="text-gold text-xs">Production Goal</span>
      </div>
      <div className="flex justify-center">
        <div className="flex bg-progress-card shadow-progress w-11/12 -skew-x-12 p-1 justify-center">
          <div
            className={`h-4 w-full border-r border-[#111111] ${
              percentage < 10 ? "bg-[#D9D9D9]" : "bg-progress-bar"
            }`}
          />
          <div
            className={`h-4 w-full border-r border-[#111111] ${
              percentage < 20 ? "bg-[#D9D9D9]" : "bg-progress-bar"
            }`}
          />
          <div
            className={`h-4 w-full border-r border-[#111111] ${
              percentage < 30 ? "bg-[#D9D9D9]" : "bg-progress-bar"
            }`}
          />
          <div
            className={`h-4 w-full border-r border-[#111111] ${
              percentage < 40 ? "bg-[#D9D9D9]" : "bg-progress-bar"
            }`}
          />
          <div
            className={`h-4 w-full border-r border-[#111111] ${
              percentage < 50 ? "bg-[#D9D9D9]" : "bg-progress-bar"
            }`}
          />
          <div
            className={`h-4 w-full border-r border-[#111111] ${
              percentage < 60 ? "bg-[#D9D9D9]" : "bg-progress-bar"
            }`}
          />
          <div
            className={`h-4 w-full border-r border-[#111111] ${
              percentage < 70 ? "bg-[#D9D9D9]" : "bg-progress-bar"
            }`}
          />
          <div
            className={`h-4 w-full border-r border-[#111111] ${
              percentage < 80 ? "bg-[#D9D9D9]" : "bg-progress-bar"
            }`}
          />
          <div
            className={`h-4 w-full border-r border-[#111111] ${
              percentage < 90 ? "bg-[#D9D9D9]" : "bg-progress-bar"
            }`}
          />
          <div
            className={`h-4 w-full border-r border-[#111111] ${
              percentage < 100 ? "bg-[#D9D9D9]" : "bg-progress-bar"
            }`}
          />
        </div>
      </div>
      <div className="flex flex-col items-end mr-36 pt-4">
        <span className="text-progress text-xs">{producedMovies} Movies</span>
        <span className="text-progress text-xs">Produced Movies</span>
      </div>
    </div>
  );
};

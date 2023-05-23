"use client";

import { useEffect, useState } from "react";
import { CharacterCard } from "../components/CharacterCard";
import { ContentCards } from "../components/ContentCards";
import { Pagination } from "../components/Pagination";
import { auth, baseUrl } from "../api/baseUrl";

export default function Characters() {
  const [currentView, setCurrentView] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [selected, setSelected] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const limit = 5;

  const paginate = (pageNumber) => setCurrentView(pageNumber);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(
        `${baseUrl}characters?orderBy=-modified&limit=50&offset=100${auth}`
      );
      const { code, data } = await response.json();
      try {
        if (code === 200) {
          setCharacters(data.results);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCharacters();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center pt-20">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-gold border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <section className="">
      <ContentCards selected={selected} />
      <CharacterCard
        characters={characters}
        currentView={currentView}
        limit={limit}
        setSelected={setSelected}
        selected={selected}
      />
      <Pagination
        dataPerView={limit}
        totalData={characters.length}
        paginate={paginate}
        currentView={currentView}
      />
    </section>
  );
}

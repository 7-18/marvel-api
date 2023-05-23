import Image from "next/image";
import { useMemo, useState } from "react";

export const CharacterCard = ({
  characters,
  currentView,
  limit,
  setSelected,
  selected,
}) => {
  const charactersToShow = useMemo(() => {
    const startIndex = (currentView - 1) * limit;
    const endIndex = startIndex + limit;
    return characters.slice(startIndex, endIndex);
  }, [characters, currentView, limit]);

  const formatName = (name) => {
    if (name.includes("(")) {
      const endIndex = name.indexOf("(");
      return name.substring(0, endIndex).trim();
    } else {
      return name.length > 15 ? `${name.substring(0, 15)}...` : name;
    }
  };

  const [hoveredCharacter, setHoveredCharacter] = useState(null);

  return (
    <div className="lg:grid lg:grid-cols-5 py-5 lg:gap-5 flex flex-1 lg:px-8 px-2 pr-0 overflow-x-auto">
      <div className="flex flex-nowrap">
        {charactersToShow.map((character) => (
          <div
            className={`lg:flex-shrink-0 flex-shrink w-full border border-[#3C3C41] rounded-md bg-[url('/polygonal-background.webp')] relative cursor-pointer mx-2 ${
              selected && selected.id === character.id
                ? "shadow-active-card"
                : ""
            }`}
            key={character.id}
            onClick={() => setSelected(character)}
            onMouseEnter={() => setHoveredCharacter(character.id)}
            onMouseLeave={() => setHoveredCharacter(null)}
          >
            <div className="bg-character-card w-full h-full absolute -z-10" />
            <div className="p-10 flex flex-col gap-5">
              <h3 className="font-medium text-xs uppercase flex justify-center items-center h-8">
                <span className="w-full">
                  <Image
                    src="/ch-vector.svg"
                    alt="vector"
                    width={28}
                    height={16}
                  />
                </span>
                <span className="text-center">
                  {formatName(character.name)}
                </span>
                <span className="w-full transform -scale-x-100">
                  <Image
                    src="/ch-vector.svg"
                    alt="vector"
                    width={28}
                    height={16}
                  />
                </span>
              </h3>
              <div className="flex justify-center py-4">
                <Image
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                  width={122}
                  height={122}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/circle.svg";
                  }}
                  className="rounded-full w-56 h-36"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center flex-col justify-center gap-5">
                <div className="border rounded-md border-[#5B5A56] bg-progress-card py-2 px-4 w-full">
                  <span className="text-sm w-full flex gap-5 items-center font-spiegel">
                    Comics:
                    <b className="font-medium text-xl">
                      {character.comics.available}
                    </b>
                  </span>
                </div>
                <div className="border rounded-md border-[#5B5A56] bg-progress-card py-2 px-4 w-full">
                  <span className="text-sm w-full flex gap-5 items-center font-spiegel">
                    Series:
                    <b className="font-medium text-xl">
                      {character.series.available}
                    </b>
                  </span>
                </div>
              </div>
              {hoveredCharacter === character.id && (
                <div className="absolute bg-white rounded-md px-4 py-2 bottom-5 left-5 right-5 text-center">
                  <p className="text-sm text-gray-700">
                    {character.description || "No description available"}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

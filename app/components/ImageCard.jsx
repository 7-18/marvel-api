import Image from "next/image";

export const ImageCard = () => {
  return (
    <div className="bg-content-card rounded-md border-[#42331A] border-[0.7px] w-full">
      <Image alt="Infinity War Poster" src="/infinity-war.webp" width={382} height={192} className="w-full h-full" loading="lazy" />
    </div>
  );
};

import { ImageCard } from "./ImageCard";
import { ProgressCard } from "./ProgressCard";
import { VideoCard } from "./VideoCard";

export const ContentCards = ({ selected }) => {
  return (
    <div className="lg:grid lg:grid-cols-3 gap-5 flex flex-col px-4 lg:px-10 mt-5">
      <ProgressCard character={selected} />
      <VideoCard />
      <ImageCard />
    </div>
  );
};

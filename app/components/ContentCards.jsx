import { ImageCard } from "./ImageCard";
import { ProgressCard } from "./ProgressCard";
import { VideoCard } from "./VideoCard";

export const ContentCards = () => {
  return (
    <div className="flex gap-5">
      <ProgressCard />
      <VideoCard />
      <ImageCard />
    </div>
  );
};

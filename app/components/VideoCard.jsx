export const VideoCard = () => {
  return (
    <div className="bg-content-card rounded-md border-[#42331A] border-[0.7px]">
      <iframe
        src="https://www.youtube.com/embed/h_h6oMhD6MA"
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
        loading="lazy"
      />
    </div>
  );
};

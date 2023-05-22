export const ProgressCard = () => {
  return (
    <div className="w-[510px] bg-content-card rounded-md border-[#42331A] border-[0.7px] p-5">
      <h2 className="uppercase text-lg text-center font-medium">
        Progreso de películas producidas
      </h2>
      <div className="flex flex-col items-end py-4">
        <span className="text-gold text-xs">XX Películas</span>
        <span className="text-gold text-xs">Meta de Producción</span>
      </div>
      <div className="flex justify-center">
        <div className="flex bg-progress-card shadow-progress w-11/12 -skew-x-12 p-1 justify-center">
          <div className="h-4 w-full bg-progress-bar border-r border-[#111111]" />
          <div className="h-4 w-full bg-progress-bar border-r border-[#111111]" />
          <div className="h-4 w-full bg-progress-bar border-r border-[#111111]" />
          <div className="h-4 w-full bg-progress-bar border-r border-[#111111]" />
          <div className="h-4 w-full bg-progress-bar border-r border-[#111111]" />
          <div className="h-4 w-full bg-progress-bar border-r border-[#111111]" />
          <div className="h-4 w-full bg-progress-bar border-r border-[#111111]" />
          <div className="h-4 w-full bg-progress-bar border-r border-[#111111]" />
          <div className="h-4 w-full bg-[#D9D9D9] border-r border-[#111111]" />
          <div className="h-4 w-full bg-[#D9D9D9] border-r border-[#111111]" />
        </div>
      </div>
      <div className="flex flex-col items-end mr-36 pt-4">
        <span className="text-progress text-xs">XX Películas</span>
        <span className="text-progress text-xs">Producidas</span>
      </div>
    </div>
  );
};

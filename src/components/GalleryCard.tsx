import { useModeStore } from "../store";
import { Proyect } from "../types";

type GalleryCardProps = {
  proyect: Proyect;
};

export default function GalleryCard({ proyect }: GalleryCardProps) {
  const mode = useModeStore((state) => state.mode);

  const selectProject = useModeStore((state) => state.selectProject);
  return (
    <div
      className={
        mode
          ? "flex flex-col max-w-sm min-w-80 h-[460px] bg-linear-180 from-BsYellow-100 to-BsGold-100 shadow-2xl shadow-BsGold-50  rounded-lg p-2 sm:p-0"
          : "flex flex-col max-w-sm min-w-80 h-[460px]  bg-linear-180 from-white to-BsGray-100 shadow-2xl shadow-BsSilver-50 rounded-lg "
      }>
      <div className=" h-[340px] overflow-hidden rounded-t-md">
        <img
          src={`/${proyect.image}.webp`}
          alt={proyect.image}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="p-4 flex flex-col justify-center items-center gap-2">
        <h6
          className={
            mode
              ? " text-BsYellow-100 text-xl text-center font-BsDisplay"
              : "mb-2 text-white text-xl text-center font-BsDisplay"
          }>
          {proyect.name}
        </h6>
        <p className="text-white text-center text-xl leading-normal font-light">
          {proyect.category}
        </p>
        <button
          onClick={() => selectProject(proyect.id)}
          className={
            mode
              ? "py-2 px-1.5 bg-linear-10 from-BsGold-100 to-BsYellow-100 text-white font-medium rounded-sm max-w-28 shadow-sm cursor-pointer hover:bg-linear-90"
              : "py-2 px-1.5 bg-linear-10 from-BsGray-100 to-BsSilver-100 text-white font-medium rounded-sm max-w-28 shadow-sm cursor-pointer hover:bg-linear-90"
          }>
          View Project
        </button>
      </div>
    </div>
  );
}

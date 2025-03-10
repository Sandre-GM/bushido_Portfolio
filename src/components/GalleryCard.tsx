import { useModeStore } from "../store";
import { Proyect } from "../types";

type GalleryCardProps = {
  proyect: Proyect;
};

export default function GalleryCard({ proyect }: GalleryCardProps) {
  const mode = useModeStore((state) => state.mode);
  return (
    <div
      className={
        mode
          ? "flex flex-col md:w-3/7 lg:w-2/7  bg-linear-180 from-BsYellow-100 to-BsGold-100 shadow-2xl  rounded-lg "
          : "flex flex-col md:w-3/7 lg:w-2/7  bg-linear-180 from-white to-BsGray-100 shadow-2xl  rounded-lg "
      }>
      <div className=" h-56 overflow-hidden rounded-t-md">
        <img
          src={`/${proyect.image}.webp`}
          alt={proyect.image}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="p-4">
        <h6
          className={
            mode
              ? "mb-2 text-BsYellow-100 text-xl text-center font-BsDisplay"
              : "mb-2 text-white text-xl text-center font-BsDisplay"
          }>
          {proyect.name}
        </h6>
        <p className="text-white text-center text-xl leading-normal font-light">
          {proyect.category}
        </p>
        <p
          className={
            mode
              ? "text-BsGray-100 leading-normal font-light"
              : "text-white leading-normal font-light"
          }>
          {proyect.details.date}
        </p>
        <p
          className={
            mode
              ? "text-BsGray-100 leading-normal font-light"
              : "text-white leading-normal font-light"
          }>
          {proyect.description}
        </p>
      </div>
      <div className="px-4 pb-4 pt-0 mt-2"></div>
    </div>
  );
}

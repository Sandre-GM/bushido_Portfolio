import { useModeStore } from "../store";
import { Proyect } from "../types";

type CarrouselCardProps = {
  proyect: Proyect;
};

export default function CarrouselCard({ proyect }: CarrouselCardProps) {
  const mode = useModeStore((state) => state.mode);
  return (
    <div className="flex flex-col md:flex-col justify-center items-center ">
      <div className=" w-full">
        <div className="h-96 w-full overflow-hidden ">
          <img
            src={`/${proyect.image}.webp`}
            alt={proyect.name}
            className="object-cover  w-full h-full"
          />
        </div>
        <div
          className={
            mode
              ? "bg-linear-90 from-BsYellow-100 to-BsGold-100 rounded-b-xl"
              : "bg-linear-90 from-white to-BsGray-100 rounded-b-xl"
          }>
          <h3 className="text-center p-2 text-lg md:text-2xl font-BsDisplay text-white">
            {proyect.name}
          </h3>
          <p className="text-center p-2 font-light text-white">
            {proyect.category}
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-around mt-5 gap-4 lg:gap-10">
        <div className="w-full lg:w-2/5">
          <h2 className="font-BsDisplay text-center text-white text-xl md:text-2xl mb-3 md:mb-5">
            Description
          </h2>
          <p className="overflow-hidden text-clip font-light text-white text-sm md:text-base">
            {proyect.description}
          </p>
        </div>
        <div className="w-full lg:w-2/5">
          <h2 className="font-BsDisplay text-center text-white text-xl md:text-2xl mb-3 md:mb-5">
            Details
          </h2>
          <ul className="overflow-hidden text-clip font-light text-white text-sm md:text-base">
            <li> {proyect.details.date} </li>
            <li> {proyect.details.tech} </li>
            <li> {proyect.details.challenge} </li>
            <li> {proyect.details.url} </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

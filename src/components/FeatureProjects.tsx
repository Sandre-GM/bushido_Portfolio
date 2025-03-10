import { NavLink } from "react-router-dom";
import { useModeStore } from "../store";

export default function FeatureProjects() {
  const mode = useModeStore((state) => state.mode);
  return (
    <>
      {mode ? (
        <div className="bg-BsYellow-100 pt-96 sm:pt-0   md:h-65 lg:h-96    flex flex-col items-center justify-center gap-5">
          <h2 className=" text-center text-BsGray-100 font-BsDisplay font-bold p-2 mt-5 text-2xl md:text-3xl lg:text-4xl">
            Featured Projects
          </h2>
          <p className=" text-center text-BsGray-100 font-BsDisplay font-bold text-2xl md:text-3xl lg:text-4xl">
            Designer
          </p>
          <NavLink
            className=" text-center p-8 mb-4 md:mb-0 bg-BsGray-100 rounded-xl text-BsYellow-100 font-BsDisplay text-2xl 
          cursor-pointer hover:bg-linear-150 from-BsYellow-100 to-BsGold-100 hover: border-2 border-BsGray-100 hover:text-white transition duration-300 ease-in-out
          "
            to="/gallery">
            View Project Gallery
          </NavLink>
        </div>
      ) : (
        <div className="bg-white pt-96 sm:pt-0   md:h-65 lg:h-96   flex flex-col items-center justify-center gap-5">
          <h2 className=" text-center text-BsBlue-100 font-BsDisplay font-bold p-2 mt-5 text-2xl md:text-3xl lg:text-4xl">
            Featured Projects
          </h2>
          <p className=" text-center text-BsBlue-100 font-BsDisplay font-bold text-2xl md:text-3xl lg:text-4xl">
            Developer
          </p>
          <NavLink
            to="/gallery"
            className=" text-center p-8 mb-4 md:mb-0 bg-BsBlue-100 rounded-xl text-white font-BsDisplay text-2xl cursor-pointer hover:bg-linear-150 from-white to-BsBlue-100 hover:border-2 border-BsBlue-100 hover:text-BsBlue-100 transition duration-300 ease-in-out">
            View Project Gallery
          </NavLink>
        </div>
      )}
    </>
  );
}

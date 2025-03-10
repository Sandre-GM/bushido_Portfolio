import { useModeStore } from "../store";
import { useNavigate } from "react-router-dom";

import cvDesign from "../../Public/Docs/cvDesign.pdf";
import cvDeveloper from "../../Public/Docs/cvDeveloper.pdf";
import Avatar from "../assets/avatar.webp";
import Avatar2 from "../assets/avatar2.webp";

export default function ButtonsMode() {
  const changeMode = useModeStore((state) => state.changeMode);
  const mode = useModeStore((state) => state.mode);
  const navigate = useNavigate(); 

  return (
    <>
      {mode ? (
        <div className="h-65 flex lg:flex-row flex-col md:flex-wrap ">
          <div className="flex-1/3 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 p-4">
            <img
              src={Avatar}
              alt="Avatar"
              className="h-20 w-20 md:h-25 md:w-25"
            />

            <div>
              <h2 className="text-2xl font-bold font-BsText text-BsYellow-100">
                Sandre Mauricio
              </h2>
              <div className="flex gap-2 my-2">
                <span className="bg-BsYellow-50 p-0.5 rounded-sm text-BsGray-100">
                  Designer
                </span>
                <span className="bg-BsYellow-50 p-0.5 rounded-sm text-BsGray-100">
                  Creative Thinker
                </span>
                <span className="bg-BsYellow-50 p-0.5 rounded-sm text-BsGray-100">
                  Curiosity
                </span>
              </div>
              <p className="text-BsGold-100">
                Passionate about creating unique <br /> designs
              </p>
            </div>
          </div>
          <div className="flex-1/3 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 p-4 bg-BsGray-100  ">
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-2 md:px-10 md:py-3 bg-linear-90 from-BsYellow-100 to-BsGold-100 rounded-sm text-white font-bold cursor-pointer hover:-bg-linear-45 ease-linear text-sm md:text-base">
              Contact Me
            </button>
            <button className="px-8 py-2 md:px-10 md:py-3 border-1 border-BsGold-100 rounded-sm font-bold text-white cursor-pointer hover:bg-linear-90 from-BsYellow-100 to-BsGold-100 ease-in-out text-sm md:text-base">
              <a
                href={cvDesign}
                target="-blank"
                rel="noopener noreferrer"
                download="cvDesign.pdf">
                Download CV
              </a>
            </button>
          </div>
          <div className="flex-1/3 pr-0 md:pr-15 lg:pr-30 w-full md:w-auto">
            <div className="bg-BsYellow-100 h-65 flex flex-wrap md:flex-col md:gap-5 justify-center items-center">
              <h3 className="text-center md:px-4 font-bold">
                You are in
                <span className="text-white bg-BsGray-100 rounded-sm p-1">
                  {" "}
                  Designer{" "}
                </span>
                mode, press to change
              </h3>
              <button
                onClick={changeMode}
                className=" py-3  md:px-8 md:mx-3 md:py-5  rounded-md bg-BsGray-100 font-BsDisplay text-xl md:text-3xl font-light text-white cursor-pointer hover:bg-linear-90 from-BsYellow-100 to-BsGold-100 ease-in-out hover:border-2 w-full md:w-auto">
                War Mode
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-65 flex lg:flex-row flex-col md:flex-wrap">
          <div className="flex-1/3 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 p-4">
            <img
              src={Avatar2}
              alt="Avatar"
              className="h-20 w-20 md:h-25 md:w-25"
            />

            <div>
              <h2 className="text-2xl font-bold font-BsText text-white">
                Sandre Mauricio
              </h2>
              <div className="flex gap-2 my-2">
                <span className="bg-BsSilver-50 p-0.5 rounded-sm text-BsBlue-100">
                  Developer{" "}
                </span>
                <span className="bg-BsSilver-50 p-0.5 rounded-sm text-BsBlue-100">
                  Adaptability
                </span>
                <span className="bg-BsSilver-50 p-0.5 rounded-sm text-BsBlue-100">
                  Solving
                </span>
              </div>
              <p className="text-BsSilver-100">
                Passionate about creating unique <br /> projects
              </p>
            </div>
          </div>
          <div className="flex-1/3 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 p-4 bg-BsBlue-100">
            <button
            onClick={() => navigate("/contact")} 
            className="px-8 py-2 md:px-10 md:py-3 bg-linear-90 from-white to-BsGray-100 rounded-sm text-white font-bold cursor-pointer hover:-bg-linear-45 ease-linear text-sm md:text-base">
              Contact Me
            </button>
            <button className="px-8 py-2 md:px-10 md:py-3 border-1 border-white rounded-sm font-bold text-white cursor-pointer hover:bg-linear-90 from-white to-BsGray-100 ease-in-out text-sm md:text-base">
              <a
                href={cvDeveloper}
                target="-blank"
                rel="noopener noreferrer"
                download="cvDeveloper.pdf">
                Download CV
              </a>
            </button>
          </div>
          <div className="flex-1/3 pr-0 md:pr-15 lg:pr-30 w-full md:w-auto">
            <div className="bg-white h-65 flex flex-wrap md:flex-col md:gap-5 justify-center items-center">
              <h3 className="text-center md:px-4 font-bold">
                You are in
                <span className="text-white bg-BsBlue-100 rounded-sm p-1">
                  {" "}
                  Developer{" "}
                </span>
                mode, press to change
              </h3>
              <button
                onClick={changeMode}
                className="py-3  md:px-8 md:mx-3 md:py-5 rounded-md bg-BsBlue-100 font-BsDisplay text-xl md:text-3xl font-light text-white cursor-pointer hover:bg-linear-90 from-white to-BsGray-100 ease-in-out hover:border-2 hover:border-BsBlue-100 w-full md:w-auto">
                Zen Mode
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

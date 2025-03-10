import { useModeStore } from "../store";
import Figma from "../assets/Figma.webp";
import ReactImage from "../assets/React.webp";

export default function Footer() {
  const mode = useModeStore((state) => state.mode);
  return (
    <footer className={mode ? "bg-BsGray-100" : "bg-BsBlue-100"}>
      <p className="text-2xl text-center font-light text-white p-6 ">
        This website has been{" "}
        {mode ? (
          <span className="font-BsDisplay text-BsYellow-100">Designed</span>
        ) : (
          <span className="font-BsDisplay text-white">Developed</span>
        )}{" "}
        with:
      </p>
      <div
        className={
          mode
            ? "bg-BsYellow-100 flex justify-center h-30 "
            : "bg-white flex justify-center h-30 "
        }>
        <img src={mode ? Figma : ReactImage} alt="figma" />
      </div>
      <div className="h-36 flex justify-center items-baseline">
        <p className="text-center text-white  pt-20">
          Copyright BushidoBytes 2025
        </p>
      </div>
    </footer>
  );
}

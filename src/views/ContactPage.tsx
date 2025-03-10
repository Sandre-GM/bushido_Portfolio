import Contact from "../components/Contact";
import { useModeStore } from "../store";

export default function ContactPage() {
  const mode = useModeStore((state) => state.mode);
  return (
    <>
      <div
        className={
          mode
            ? "bg-BsGray-100 h-screen flex flex-col justify-center items-center  mt-50 md:mt-0 md:pt-10 "
            : "bg-BsBlue-100 h-screen flex flex-col justify-center items-center mt-50 md:mt-0 md:pt-10 "
        }>
        <h2
          className={
            mode
              ? "font-BsDisplay md:text-3xl lg:text-6xl text-BsYellow-100"
              : "font-BsDisplay md:text-3xl lg:text-6xl text-white"
          }>
          Contact with me
        </h2>

        <Contact />
      </div>
    </>
  );
}

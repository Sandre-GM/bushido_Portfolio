import { useEffect } from "react";
import GalleryCard from "../components/GalleryCard";
import { db } from "../data/db";
import { useModeStore } from "../store";

export default function Gallery() {
  const handleData = useModeStore((state) => state.handleData);
  const mode = useModeStore((state) => state.mode);
  const proyects = useModeStore((state) => state.proyects);

  useEffect(() => {
    handleData(db);
  }, []);

  return (
    <>
      <div className="w-full relative mt-50 md:mt-20 ">
        <video
          src="/backgroundVideo.mp4"
          className="
        md:w-full md:h-screen object-cover h-96"
          autoPlay
          muted></video>
        <h2
          className={
            mode
              ? "font-BsDisplay bg-BsGold-50 rounded-2xl p-8 text-3xl lg:text-5xl text-center text-BsYellow-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              : "font-BsDisplay bg-BsBlue-50 rounded-2xl p-8 text-3xl lg:text-5xl text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          }>
          Gallery Projects
        </h2>
      </div>
      <div className=" w-full md:max-w-8/12 flex flex-wrap justify-center mx-auto gap-10 mt-10  ">
        {proyects.map((proyect) => {
          return <GalleryCard key={proyect.id} proyect={proyect} />;
        })}
      </div>
    </>
  );
}

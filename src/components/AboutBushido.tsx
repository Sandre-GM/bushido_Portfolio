import Axes from "../assets/Axes.png";

export default function AboutBushido() {
  return (
    <>
      <h1 className="text-center text-2xl  md:text-4xl lg:text-6xl font-BsDisplay text-BsYellow-100  pt-10">
        About Bushido Bytes
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 p-10">
        <p className="text-wrap text-center  md:w-1/2 lg:w-1/3 font-BsDisplay text-white text-xl">
          <span className="text-center text-wrap text-BsYellow-100 ">
            Bushido Bytes
          </span>{" "}
          is the design and development brand that believes in and is guided by
          the principles of bushido, the <span> samurai </span>
          code of ethics to meet all challenges.
        </p>
        <img src={Axes} alt="axes.png" />
      </div>
      <p className="text-center font-light px-10 text-white">
        I believe in honesty at work, commitment to excellence, and perseverance
        to overcome challenges in every project where the spirit of the most
        legendary warrior cultures is embodied: Viking, Samurai and Spartan.
      </p>
    </>
  );
}

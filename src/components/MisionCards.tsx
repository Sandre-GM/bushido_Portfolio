import Values from "../assets/values.png";
import Mision from "../assets/mision.png";
import Vision from "../assets/vision.png";

export default function MisionCards() {
  return (
    <>
      <div className=" flex flex-col lg:flex-row gap-5 justify-center items-center mt-20">
        <div className="w-full md:w-1/2 lg:w-4/5 xl:w-1/5 p-3 lg:p-2 ">
          <div className="bg-linear-45 from-BsSilver-100 to-BsGray-100   flex justify-center h-25 p-3 rounded-tr-4xl">
            <img src={Values} alt="values" />
          </div>
          <div className="bg-linear-90 from-BsGold-100 to-BsYellow-100 h-96 flex items-center justify-center ">
            <ul className="text-center text-2xl text-white py-10 flex flex-col gap-5">
              <li>Integrity</li>
              <li>Team Spirit</li>
              <li>Viking Bravery</li>
              <li>Samurai Discipline</li>
              <li>Spartan Excellence</li>
            </ul>
          </div>
          <div className="bg-linear-45 from-BsSilver-100 to-BsGray-100   h-25 rounded-bl-4xl flex flex-col justify-end items-end ">
            <p className="p-5  text-right inline-block font-BsDisplay text-2xl  bg-linear-90 from-BsGold-100 to-BsYellow-100 text-white">
              VALUES
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-4/5 xl:w-1/5 p-3 lg:p-2">
          <div className="bg-linear-45 from-BsSilver-100 to-BsGray-100   flex justify-center h-25 p-3 rounded-tr-4xl">
            <img src={Mision} alt="mision" />
          </div>
          <div className="bg-linear-90 from-BsGold-100 to-BsYellow-100 h-96 flex items-center justify-center">
            <p className="text-center text-2xl text-white py-10 w-80">
              Forging impactful visual solutions that inspire courage,
              discipline and excellence.
            </p>
          </div>
          <div className="bg-linear-45 from-BsSilver-100 to-BsGray-100   h-25 rounded-bl-4xl flex flex-col justify-end items-end ">
            <p className="p-5  text-right inline-block font-BsDisplay text-2xl  bg-linear-90 from-BsGold-100 to-BsYellow-100 text-white">
              MISION
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-4/5 xl:w-1/5 p-3 lg:p-2">
          <div className="bg-linear-45 from-BsSilver-100 to-BsGray-100   flex justify-center h-25 p-3 rounded-tr-4xl">
            <img src={Vision} alt="vision" />
          </div>
          <div className="bg-linear-90 from-BsGold-100 to-BsYellow-100 h-96 flex justify-center items-center">
            <p className="text-center text-2xl text-white py-10 w-80">
              To become the design and development reference that fuses
              strength, strategy and creativity, inspiring our clients to reach
              their full potential.
            </p>
          </div>
          <div className="bg-linear-45 from-BsSilver-100 to-BsGray-100   h-25 rounded-bl-4xl flex flex-col justify-end items-end ">
            <p className="p-5  text-right inline-block font-BsDisplay text-2xl  bg-linear-90 from-BsGold-100 to-BsYellow-100 text-white">
              VISION
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

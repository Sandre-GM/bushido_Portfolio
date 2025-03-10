import { useModeStore } from "../store";
import constancia1 from "../assets/constancia1.png";
import constancia2 from "../assets/constancia2.jpg";
import constancia3 from "../assets/constancia3.jpg";
import constancia4 from "../assets/constancia4.webp";

export default function Extra() {
  const mode = useModeStore((state) => state.mode);
  return (
    <>
      <div className="flex flex-wrap gap-5 justify-center my-15 ">
        <div
          className={
            mode
              ? "flex justify-center items-center rounded-2xl bg-white shadow-BsYellow-100 shadow-2xl"
              : "flex justify-center items-center rounded-2xl bg-white shadow-white shadow-2xl "
          }>
          <div className="max-w-[720px] mx-auto">
            <div className="relative flex flex-col text-gray-700   bg-clip-border rounded-xl w-96">
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                <img
                  src={constancia1}
                  alt="card-image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    “Create your first 2D video game”.{" "}
                  </p>
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    PYTHON
                  </p>
                </div>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                  Taught through discord where I learned to improve the
                  management of object oriented programming, with an approach to
                  python.
                </p>
              </div>
              <div className="p-6 pt-0"></div>
            </div>
          </div>
        </div>
        <div
          className={
            mode
              ? "flex justify-center items-center rounded-2xl bg-white shadow-BsYellow-100 shadow-2xl"
              : "flex justify-center items-center rounded-2xl bg-white shadow-white shadow-2xl"
          }>
          <div className="max-w-[720px] mx-auto ">
            <div className="relative flex flex-col text-gray-700   bg-clip-border rounded-xl w-96">
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                <img
                  src={constancia2}
                  alt="card-image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    “Hackathon Enactus Monterrey”.{" "}
                  </p>
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    SWIFT
                  </p>
                </div>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                  I had access to this hackathon because I came in 2nd place in
                  a first local hackathon with my team “Hurracan”. In Monterrey
                  we participated for the BBVA team incorporating test
                  functionalities for their app.
                </p>
              </div>
              <div className="p-6 pt-0"></div>
            </div>
          </div>
        </div>
        <div
          className={
            mode
              ? "flex justify-center items-center rounded-2xl bg-white shadow-BsYellow-100 shadow-2xl"
              : "flex justify-center items-center rounded-2xl bg-white shadow-white shadow-2xl"
          }>
          <div className="max-w-[720px] mx-auto ">
            <div className="relative flex flex-col text-gray-700  bg-clip-border rounded-xl w-96">
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                <img
                  src={constancia3}
                  alt="card-image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    “Hackathon 2024-2 Local IOS Lab”.{" "}
                  </p>
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    SWIFT
                  </p>
                </div>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                  Local hackathon 2nd place winners for developing full-hands as
                  an app for ios together with the team “Hurracan”.
                </p>
              </div>
              <div className="p-6 pt-0"></div>
            </div>
          </div>
        </div>
        <div
          className={
            mode
              ? "flex justify-center items-center rounded-2xl bg-white shadow-BsYellow-100 shadow-2xl"
              : "flex justify-center items-center rounded-2xl bg-white shadow-white shadow-2xl"
          }>
          <div className="max-w-[720px] mx-auto ">
            <div className="relative flex flex-col text-gray-700  bg-clip-border rounded-xl w-96">
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                <img
                  src={constancia4}
                  alt="card-image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    “Semana de Posgrado”.{" "}
                  </p>
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    Photographer
                  </p>
                </div>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                  Participation in the postgraduate week as a photographer
                  together with the designer Lara Julieta, for the official
                  presentation of the book “Guia de campo del GEOPARQUE de la
                  COMARCA MINERA por Carles Canet Miquel” in FES-Acatlán UNAM.
                </p>
              </div>
              <div className="p-6 pt-0"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

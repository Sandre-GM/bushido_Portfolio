import { useModeStore } from "../store";
import { Service } from "../types";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const mode = useModeStore((state) => state.mode);

  return (
    <div className=" w-6/8 md:w-1/2 lg:w-3/12 py-10 px-5 lg:h-96 bg-BsSilver-25 rounded-2xl flex flex-col  gap-10 justify-center items-center">
      <h3
        className={
          mode
            ? "text-center font-BsDisplay text-BsYellow-100   md:text-3xl"
            : "text-center font-BsDisplay text-white  md:text-3xl"
        }>
        {service.name}
      </h3>
      <img
        src={`/${service.image}.png`}
        alt="aqui va el alternativo del servicio"
        className="w-32"
      />
      <p className="text-center text-white text-sm md:text-base">
        {service.description}
      </p>
    </div>
  );
}

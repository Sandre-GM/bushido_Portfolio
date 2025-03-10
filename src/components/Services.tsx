import { useEffect } from "react";
import { useModeStore } from "../store";
import { designerService, developerService } from "../utility";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const services = useModeStore((state) => state.services);
  const setServices = useModeStore((state) => state.setServices);
  const mode = useModeStore((state) => state.mode);

  useEffect(() => {
    if (mode) {
      setServices(designerService);
    } else {
      setServices(developerService);
    }
  }, [mode, setServices]);

  return (
    <>
      <h2
        className={
          mode
            ? "text-center m-10 font-BsDisplay text-5xl text-BsYellow-100 "
            : "text-center m-10 font-BsDisplay text-5xl text-white "
        }>
        My Services
      </h2>
      <div className="flex flex-wrap gap-10 justify-center mt-10">
        {services.map((service) => {
          return <ServiceCard key={service.id} service={service} />;
        })}
      </div>
    </>
  );
}

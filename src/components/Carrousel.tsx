import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarrouselCard from "./CarrouselCard";
import { useModeStore } from "../store";
import { useEffect } from "react";
import { designerProyects, developerProyects } from "../utility";

function Carrousel() {
  const settings = {
    className: "p-5 mx-10",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  const handleData = useModeStore((state) => state.handleData);
  const mode = useModeStore((state) => state.mode);
  const proyects = useModeStore((state) => state.proyects);

  useEffect(() => {
    if (mode) {
      handleData(designerProyects);
    } else {
      handleData(developerProyects);
    }
  }, [mode, handleData]);

  return (
    <div>
      <Slider {...settings}>
        {proyects.map((proyect) => (
          <CarrouselCard key={proyect.id} proyect={proyect} />
        ))}
      </Slider>
    </div>
  );
}

export default Carrousel;

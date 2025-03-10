import BushidoName from "../icons/BushidoName";
import FaceBookIcon from "../icons/FaceBookIcon";
import FacebookIcon2 from "../icons/FacebookIcon2";
import GitHubIcon from "../icons/GitHubIcon";
import InstagramIcon from "../icons/InstagramIcon";
import InstagramIcon2 from "../icons/InstagramIcon2";
import LinkedinIcon from "../icons/LinkedinIcon";
import LinkedinIcon2 from "../icons/LinkedinIcon2";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import WhatsAppIcon2 from "../icons/WhatsAppIcon2";
import { useModeStore } from "../store";

export default function HeroHome() {
  const mode = useModeStore((state) => state.mode);

  return (
    <>
      {mode ? (
        <div className="bg-[url(/bg_01sm.webp)] sm:bg-[url(/bg_01.webp)] min-h-screen bg-no-repeat bg-cover">
          <div className="flex flex-col gap-4 items-center justify-center h-screen p-4 md:p-8 lg:p-12">
            <BushidoName className="min-w-20 sm:w-20 md:w-96 lg:w-220" />

            <h1 className="font-BsDisplay text-2xl sm:text-3xl text-white text-center px-4">
              <span className="text-BsYellow-100">WEB DESIGNER </span> &{" "}
              <span className="text-white"> DEVELOPER</span>
            </h1>
            <div className="flex justify-center lg:pt-52 md:pt-32 sm:pt-20 w-full px-4 ">
              <ul className=" flex flex-wrap gap-8 justify-center">
                <li>
                  <a target="_blank" href="https://www.youtube.com">
                    <FaceBookIcon className="cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/bushido_bytes/">
                    <InstagramIcon className="cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/mauricio-gm-sandre-728519280/?trk=public-profile-join-page">
                    <LinkedinIcon className="cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="tel:+5255743247">
                    <WhatsAppIcon className="cursor-pointer" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[url(/bg_02sm.webp)] sm:bg-[url(/bg_02.webp)] min-h-screen bg-no-repeat bg-cover">
          <div className="flex flex-col gap-4 items-center justify-center h-screen p-4 md:p-8 lg:p-12">
            <BushidoName className="min-w-20 sm:w-20 md:w-96 lg:w-220" />
            <h1 className="font-BsDisplay text-2xl sm:text-3xl text-black text-center px-4">
              <span>WEB DESIGNER </span> &{" "}
              <span className="text-white"> DEVELOPER</span>
            </h1>
            <div className="flex justify-center lg:pt-52 md:pt-32 sm:pt-20 w-full px-4 ">
              <ul className="flex flex-wrap gap-4 justify-center">
                <li>
                  <a target="_blank" href="https://www.youtube.com">
                    <FacebookIcon2 className="cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/Sandre-GM">
                    <GitHubIcon className="cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/bushido_bytes/">
                    <InstagramIcon2 className="cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/mauricio-gm-sandre-728519280/?trk=public-profile-join-page">
                    <LinkedinIcon2 className="cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="tel:+5255743247">
                    <WhatsAppIcon2 className="cursor-pointer" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import FaceBookIcon from "../icons/FaceBookIcon";
import FacebookIcon2 from "../icons/FacebookIcon2";
import GitHubIcon2 from "../icons/GitHubIcon2";
import InstagramIcon from "../icons/InstagramIcon";
import InstagramIcon2 from "../icons/InstagramIcon2";
import LinkedinIcon from "../icons/LinkedinIcon";
import LinkedinIcon2 from "../icons/LinkedinIcon2";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import WhatsAppIcon2 from "../icons/WhatsAppIcon2";
import { useModeStore } from "../store";
import Form from "./Form";

export default function Contact() {
  const mode = useModeStore((state) => state.mode);
  return (
    <>
      <div
        id="contact"
        className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl mt-10">
        <div>
          <h1
            className={
              mode
                ? "text-BsYellow-100 text-3xl font-extrabold font-BsDisplay"
                : "text-white text-3xl font-extrabold font-BsDisplay"
            }>
            Contact
          </h1>
          <p className="text-sm text-white mt-4">
            Have some big idea or brand to develop and need help? Then reach out
            we'd love to hear about your project and provide help.
          </p>

          <div className="mt-12">
            <h2
              className={
                mode
                  ? "text-BsYellow-100 text-base font-bold font-BsDisplay"
                  : "text-white text-base font-bold font-BsDisplay"
              }>
              Email
            </h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div
                  className={
                    mode
                      ? "bg-BsGold-100 h-10 w-10 rounded-full flex items-center justify-center"
                      : "bg-white h-10 w-10 rounded-full flex items-center justify-center"
                  }>
                  <svg
                    className={mode ? "fill-white" : "fill-BsBlue-100"}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 479.058 479.058">
                    <path
                      d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
                <a
                  className={
                    mode
                      ? "text-BsYellow-100 text-sm ml-4"
                      : "text-white text-sm ml-4"
                  }>
                  <small className="block">Mail</small>
                  <strong>sandre9477@gmail.com</strong>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h2
              className={
                mode
                  ? "text-BsYellow-100 text-base font-bold font-BsDisplay "
                  : "text-white text-base font-bold font-BsDisplay "
              }>
              Socials
            </h2>

            {mode ? (
              <ul className="flex mt-4 space-x-4 gap-3">
                <li className=" h-10 w-10 flex items-center justify-center shrink-0">
                  <a href="javascript:void(0)" target="_blank">
                    <FaceBookIcon />
                  </a>
                </li>
                <li className=" h-10 w-10 flex items-center justify-center shrink-0">
                  <a
                    href="https://www.instagram.com/bushido_bytes/"
                    target="_blank">
                    <InstagramIcon />
                  </a>
                </li>
                <li className="h-10 w-10 flex items-center justify-center shrink-0">
                  <a
                    href="https://www.linkedin.com/in/mauricio-gm-sandre-728519280/?trk=public-profile-join-page"
                    target="_blank">
                    <LinkedinIcon />
                  </a>
                </li>
                <li className="h-10 w-10 flex items-center justify-center shrink-0">
                  <a href="tel:+5255743247" target="_blank">
                    <WhatsAppIcon />
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="flex mt-4 space-x-4 gap-3">
                <li className=" h-10 w-10 flex items-center justify-center shrink-0">
                  <a href="javascript:void(0)" target="_blank">
                    <FacebookIcon2 />
                  </a>
                </li>
                <li className=" h-10 w-10 flex items-center justify-center shrink-0">
                  <a
                    href="https://www.instagram.com/bushido_bytes/"
                    target="_blank">
                    <InstagramIcon2 />
                  </a>
                </li>
                <li className="h-10 w-10 flex items-center justify-center shrink-0">
                  <a
                    href="https://www.linkedin.com/in/mauricio-gm-sandre-728519280/?trk=public-profile-join-page"
                    target="_blank">
                    <LinkedinIcon2 />
                  </a>
                </li>
                <li className="h-10 w-10 flex items-center justify-center shrink-0">
                  <a href="tel:+5255743247" target="_blank">
                    <WhatsAppIcon2 />
                  </a>
                </li>
                <li className="h-10 w-10 flex items-center justify-center shrink-0">
                  <a href="https://github.com/Sandre-GM" target="_blank">
                    <GitHubIcon2 />
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
        <Form />
      </div>
      ;
    </>
  );
}

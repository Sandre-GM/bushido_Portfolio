import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useModeStore } from "../store";

export default function Modal() {
  const modal = useModeStore((state) => state.modal);
  const mode = useModeStore((state) => state.mode);
  const closeModal = useModeStore((state) => state.closeModal);
  const selectedProject = useModeStore((state) => state.selectedProject);
  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-BsGray-75" />
          </Transition.Child>

          <div className="fixed  inset-0 overflow-y-auto flex justify-center items-center m-auto md:h-8/12 md:w-8/12 p-2 rounded-2xl  ">
            <div
              className="grid grid-cols-3  bg-cover bg-no-repeat w-full h-full rounded-2xl overflow-auto"
              style={{
                backgroundImage: `url(/${selectedProject.image}.webp)`,
              }}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel
                  className={
                    mode
                      ? "relative flex flex-col justify-center  gap-5 bg-BsGold-75 col-span-5 md:col-span-3 lg:col-span-2  xl:col-span-1 p-4 "
                      : "relative flex flex-col justify-center  gap-5 bg-BsGray-75 col-span-5 md:col-span-3 lg:col-span-2  xl:col-span-1 p-4"
                  }>
                  <Dialog.Title
                    as="h3"
                    className="text-white text-2xl font-BsDisplay  ">
                    {selectedProject.name}
                  </Dialog.Title>
                  <Dialog.Title
                    as="h3"
                    className="text-white text-sm font-BsText ">
                    {selectedProject.details?.date}
                  </Dialog.Title>
                  <Dialog.Title as="p" className="text-white  font-BsText ">
                    {selectedProject.description}
                  </Dialog.Title>
                  <Dialog.Title as="p" className="text-white  font-BsText ">
                    The challenge: {selectedProject.details?.challenge}
                  </Dialog.Title>
                  <Dialog.Title as="h3" className="text-white  font-BsText ">
                    Tech:
                    <span
                      className={
                        mode
                          ? "text-BsYellow-100 shadow-2xs shadow-white"
                          : "text-white shadow-2xs shadow-BsSilver-100"
                      }>
                      {selectedProject.details?.tech}
                    </span>
                  </Dialog.Title>
                  <Dialog.Title
                    as="h4"
                    className={
                      mode
                        ? "text-wrap  text-end text-white hover:text-BsYellow-100 hover:underline bg-BsGray-100 inline-block py-1 px-2 rounded-sm "
                        : "text-wrap  text-end text-white  hover:underline bg-BsBlue-100 inline-block py-1 px-2 rounded-sm "
                    }>
                    <a
                      href={selectedProject.details?.url}
                      target="_blank"
                      className="text-">
                      {selectedProject.details?.url}
                    </a>
                  </Dialog.Title>
                  <button
                    onClick={closeModal}
                    className={
                      mode
                        ? "py-2 px-1.5 bg-BsGray-100 border border-BsYellow-100 text-white font-medium rounded-sm  shadow-sm cursor-pointer   transition ease-in-out hover:bg-linear-90 from-BsYellow-100 to-BsGold-100 "
                        : "py-2 px-1.5 bg-BsGray-100 border border-BsSilver-100 text-white font-medium rounded-sm  shadow-sm cursor-pointer   transition ease-in-out hover:bg-linear-90 from-BsBlue-100 to-BsSilver-100 "
                    }>
                    Close
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

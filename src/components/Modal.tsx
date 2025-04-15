import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useModeStore } from "../store";

export default function Modal() {
  const modal = useModeStore((state) => state.modal);
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
            <div className="fixed inset-0 bg-BsGray-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto flex justify-center alin items-center ">
            <div
              className="grid grid-cols-3 overflow-hidden h-8/12 w-8/12 bg-cover bg-no-repeat rounded-2xl"
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
                <Dialog.Panel className="relative flex flex-col justify-center  gap-5 bg-BsGold-75 col-span-5 md:col-span-3 lg:col-span-2 xl:col-span-1 p-4">
                  <Dialog.Title
                    as="h3"
                    className="text-white text-4xl font-BsDisplay  ">
                    {selectedProject.name}
                  </Dialog.Title>
                  <Dialog.Title
                    as="h3"
                    className="text-white text-xl font-BsText ">
                    {selectedProject.details?.date}
                  </Dialog.Title>
                  <Dialog.Title
                    as="h3"
                    className="text-white text-2xl font-BsText ">
                    {selectedProject.description}
                  </Dialog.Title>
                  <Dialog.Title
                    as="h3"
                    className="text-white text-2xl font-BsText ">
                    Tech:
                    <span className="text-BsYellow-100 shadow-2xs shadow-white">
                      {selectedProject.details?.tech}
                    </span>
                  </Dialog.Title>
                  <Dialog.Title
                    as="h3"
                    className="text-white text-2xl font-BsText  text-end">
                    <a href={selectedProject.details?.url} target="_blank">
                      {selectedProject.details?.url}
                    </a>
                  </Dialog.Title>
                  <button
                    onClick={closeModal}
                    className="py-2 px-1.5 bg-BsGray-100 border border-BsYellow-100 text-white font-medium rounded-sm  shadow-sm cursor-pointer   transition ease-in-out hover:bg-linear-90 from-BsYellow-100 to-BsGold-100 ">
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

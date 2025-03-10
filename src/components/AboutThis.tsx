export default function AboutThis() {
  return (
    <>
      <h3 className="text-center text-2xl  md:text-4xl lg:text-6xl font-BsDisplay text-BsYellow-100  pt-10">
        About this proyect "My Portfolio"
      </h3>
      <div className="w-full flex flex-col justify-center items-center p-10">
        <p className="text-wrap text-2xl text-white md:w-4/5 text-left">
          This is a personal portfolio that I have created to showcase my skills
          and experience as a developer and designer when combined. All the
          skills and technologies that I learned and will learn through a
          diversity of projects and the sub-technologies to understand the rest.
          Some of the technologies applied in this project are:
        </p>
        <ul className="text-white flex gap-5 flex-wrap justify-center mt-10 md:text-2xl">
          <li className="bg-BsYellow-50 rounded-full py-1 px-3 text-center block ">
            TypeScript
          </li>
          <li className="bg-BsYellow-50 rounded-full py-1 px-3 text-center block ">
            ECMAScript6
          </li>
          <li className="bg-BsYellow-50 rounded-full py-1 px-3 text-center block ">
            Zustand
          </li>
          <li className="bg-BsYellow-50 rounded-full py-1 px-3 text-center block ">
            Zod
          </li>
          <li className="bg-BsYellow-50 rounded-full py-1 px-3 text-center block ">
            ReacHook-Form
          </li>
          <li className="bg-BsYellow-50 rounded-full py-1 px-3 text-center block ">
            TailwindCss
          </li>
          <li className="bg-BsYellow-50 rounded-full py-1 px-3 text-center block ">
            EmailJs
          </li>
          <li className="bg-BsYellow-50 rounded-full py-1 px-3 text-center block ">
            Figma
          </li>
          <li className="bg-BsYellow-50 rounded-full py-1 px-3 text-center block ">
            Photoshop
          </li>
          <li className="bg-BsYellow-50 rounded-full py-1 px-3 text-center block ">
            Illustrator
          </li>
          <li className="bg-BsYellow-50 rounded-full py-1 px-3 text-center block ">
            Blender 3D
          </li>
          <li className="bg-BsYellow-50 rounded-full py-1 px-3 text-center block ">
            React-toastify
          </li>
        </ul>
      </div>
    </>
  );
}

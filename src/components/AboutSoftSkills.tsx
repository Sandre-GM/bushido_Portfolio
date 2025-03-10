import AboutThis from "./AboutThis";
import Avatar3 from "../assets/avatar_02.webp";
export default function AboutSoftSkills() {
  return (
    <>
      <div>
        <video
          src="/backgroundVideo2.mp4"
          className="md:w-full md:h-[50rem] object-cover h-96"
          autoPlay
          muted></video>
      </div>
      <AboutThis />
      <h1 className="text-center text-2xl  md:text-4xl lg:text-6xl font-BsDisplay text-BsYellow-100  pt-10">
        About Me
      </h1>
      <div className="flex flex-wrap justify-center p-10">
        <div className="flex flex-col  md:w-3/5 lg:w-1/3 justify-center p-8">
          <img src={Avatar3} alt="avatar_02.webp" />

          <p className="text-wrap text-2xl w-85 md:w-full text-white p-8 text-left font-light">
            Welcome to my{" "}
            <span className="text-BsYellow-100 font-semibold">portfolio</span>,
            my name is{" "}
            <span className="text-BsYellow-100 font-semibold">
              Sandre Mauricio
            </span>
            , creator of
            <span className="text-BsYellow-100 font-semibold">
              {" "}
              Bushido Bytes
            </span>{" "}
            for web{" "}
            <span className="text-BsYellow-100 font-semibold">
              design
            </span> and{" "}
            <span className="text-BsYellow-100 font-semibold">development</span>{" "}
            solutions. I will be happy to help you find a solution to your
            problems or join your
            <span className="text-BsYellow-100 font-semibold">
              {" "}
              development / creative team.
            </span>
          </p>
        </div>
        <div className="flex justify-center items-center md:w-3/5 lg:w-1/3">
          <svg
            width="291"
            height="281"
            viewBox="0 0 291 281"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.753 31.0171C24.4784 23.1123 32.1557 15.1863 40.005 7.40896C42.3646 5.07153 44.8205 1.86287 47.4966 0L47.6548 0.0637483C48.9825 1.52996 51.1701 19.167 51.9337 22.6235C59.0332 54.7598 79.4165 85.7981 109.651 99.1356C111.502 97.294 113.091 95.0911 114.728 93.0512C121.779 84.2752 128.941 75.5558 136.219 66.9853C139.232 63.4366 142.555 59.98 145.3 56.233C147.136 59.1584 151.518 63.7483 153.878 66.6098L171.042 87.4272C174.289 91.3512 177.735 95.1974 180.776 99.2914C182.922 98.4698 185.007 97.5561 187.036 96.4653C220.298 78.6583 235.597 44.6238 241.541 8.54935C241.988 5.83651 241.954 3.03158 242.827 0.403739C247.581 2.5216 260.906 17.9345 265.233 22.3756C267.173 24.366 272.739 29.395 273.846 31.2296C273.716 36.0248 272.257 41.0255 271.115 45.6438C262.998 78.4458 242.071 109.682 212.841 126.363C209.834 128.077 206.594 129.451 203.849 131.619C205.528 133.971 208.087 135.819 210.302 137.611L218.537 144.248C220.793 146.061 223.118 147.818 225.12 149.929C218.316 160.894 212.435 172.425 206.181 183.722C193.599 174.231 178.21 162.487 165.078 154.2L165.25 206.162C165.284 217.105 165.284 228.084 165.649 239.021C186.513 234.523 203.643 226.972 219.424 212.02C247.519 185.387 255.107 148.923 249.067 111.623C250.236 109.718 251.798 108.004 253.181 106.247C264.779 91.5921 271.397 78.8708 278.139 61.8075C282.383 72.9068 284.681 79.9261 287.048 92.0241C292.737 121.093 292.833 152.578 283.704 180.896C271.776 223.112 235.522 257.94 195.608 272.325C120.238 299.496 34.9006 260.964 8.17449 182.936C-3.78861 147.995 -3.01813 95.1195 13.1207 60.915C14.7167 71.6176 27.4916 92.3783 33.6829 100.637C36.4828 104.377 39.9225 107.699 42.5228 111.559C40.3008 118.685 40.0257 126.689 39.9706 134.098C39.5579 186.697 75.0413 229.38 125.487 239.368C125.088 211.552 124.896 182.285 125.515 154.483C122.742 156.24 120.163 158.28 117.507 160.206L102.799 170.859C97.1995 174.84 90.2102 178.913 85.092 183.191C78.4328 174.465 72.1382 159.477 66.2977 149.546C71.9043 143.993 81.4115 136.577 87.6786 131.399C49.7186 114.159 22.0019 72.503 16.753 31.0171Z"
              fill="url(#paint0_linear_292_89)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_292_89"
                x1="145.5"
                y1="0"
                x2="145.5"
                y2="281"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#F7C873" />
                <stop offset="1" stop-color="#917544" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="md:w-3/5 lg:w-1/3 p-8 ">
          <div className="bg-BsSilver-50 w-80 md:w-full h-full rounded-tr-[60px] p-8 rounded-bl-[60px] flex flex-col justify-center items-center">
            <h3 className="font-BsDisplay text-3xl md:text-4xl lg:text-5xl text-BsYellow-100 p-5">
              Soft Skills
            </h3>
            <ul className="text-center text-white font-bold text-xl md:text-2xl lg:text-3xl flex flex-col gap-2">
              <li>Effective Communication </li>
              <li>Creativity and Innovation</li>
              <li>Time Management</li>
              <li>Customer Empathy </li>
              <li>Attention to Detail </li>
              <li>Problem Solving</li>
              <li> Adaptability </li>
              <li>Teamwork</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

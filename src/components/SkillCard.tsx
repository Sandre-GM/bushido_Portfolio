import { useModeStore } from "../store";
import { Skill } from "../types";

type SkillCardProps = {
  skill: Skill;
};

export default function SkillCard({ skill }: SkillCardProps) {
  const mode = useModeStore((state) => state.mode);

  return (
    <>
      {mode ? (
        <div className="bg-linear-90 from-BsYellow-100 to-BsGold-100 gap-6 flex  w-3/4  md:w-2/4 lg:w-1/4 justify-center items-center rounded-2xl ">
          <img
            src={`/${skill.image}.png`}
            alt={skill.image}
            className="w-24 object-contain object-center "
          />

          <div className="w-30 flex justify-center align-center">
            <h2 className="text-center font-BsDisplay text-white p-2">
              {skill.name}
            </h2>
          </div>
        </div>
      ) : (
        <div className="bg-linear-90 from-white to-BsGray-100 gap-6 flex  w-3/4  md:w-2/4 lg:w-1/4 justify-center items-center rounded-2xl ">
          <img
            src={`/${skill.image}.png`}
            alt={skill.image}
            className="w-24 object-contain object-center "
          />

          <div className="w-30 flex justify-center align-center">
            <h2 className="text-center font-BsDisplay text-white p-2">
              {skill.name}
            </h2>
          </div>
        </div>
      )}
    </>
  );
}

import { useEffect } from "react";
import { useModeStore } from "../store";
import { designerSkills, developerSkills } from "../utility";
import SkillCard from "./SkillCard";

export default function Skills() {
  const skills = useModeStore((state) => state.skills);
  const setSkills = useModeStore((state) => state.setSkills);
  const mode = useModeStore((state) => state.mode);


  useEffect(() => {
    if (mode) {
      setSkills(designerSkills);
    } else {
      setSkills(developerSkills);
    }
  }, [mode, setSkills]);
  return (
    <>
      <h3
        className={
          mode
            ? "text-center p-8 font-BsDisplay text-5xl mt-10 text-BsYellow-100"
            : "text-center p-8 font-BsDisplay text-5xl mt-10 text-white"
        }>
        My Skills
      </h3>
      <div className="flex flex-wrap gap-5 justify-center">
        {skills.map((skill) => {
          return <SkillCard key={skill.id} skill={skill} />;
        })}
      </div>
    </>
  );
}

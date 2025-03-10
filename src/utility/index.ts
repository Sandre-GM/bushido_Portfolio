import { skillsDb, db, ServiceDb } from "../data/db";



const proyects = db;
export const designerProyects = proyects.filter((proyect) => (proyect.category === "Designer") && (proyect.top === true))
export const developerProyects = proyects.filter((proyect) => (proyect.category === "Developer") && (proyect.top === true))

const skills = skillsDb
export const designerSkills = skills.filter((skill) => (skill.category === "Designer"))
export const developerSkills = skills.filter((skill) => (skill.category === "Developer"))

const service = ServiceDb
export const designerService = service.filter((service) => (service.category === "Designer"))
export const developerService = service.filter((service) => (service.category === "Developer"))
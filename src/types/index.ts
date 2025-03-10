import { z } from "zod";
import { Contact, Proyect, Proyects, Service, Services, Skill, Skills } from "../Schema";


export type Proyects = z.infer<typeof Proyects>
export type Proyect = z.infer<typeof Proyect>
export type Skills = z.infer<typeof Skills>
export type Skill = z.infer<typeof Skill>
export type Services = z.infer<typeof Services>
export type Service = z.infer<typeof Service>
export type Contact = z.infer<typeof Contact>
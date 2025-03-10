import { z } from "zod"


export const Contact = z.object({
    message: z.string().min(1, "message is required").max(500, "message must be less than 500 characters"),
    email: z.string(),
    name: z.string().min(1, "name is required").max(50, "name must be less than 50 characters"),
    subject: z.string(),
})

export const Proyects = z.array(
    z.object({
        id: z.number(),
        name: z.string(),
        image: z.string(),
        description: z.string(),
        details: z.object({
            date: z.string(),
            tech: z.string(),
            url: z.string(),
            challenge: z.string()
        }),
        category: z.string(),
        top: z.boolean()
    })
)

export const Proyect = z.object({
    id: z.number(),
    name: z.string(),
    image: z.string(),
    description: z.string(),
    details: z.object({
        date: z.string(),
        tech: z.string(),
        url: z.string(),
        challenge: z.string()
    }),
    category: z.string(),
    top: z.boolean()
})

export const Skills = z.array(
    z.object({
        id: z.number(),
        name: z.string(),
        image: z.string(),
        category: z.string()
    })
)

export const Skill = z.object({
    id: z.number(),
    name: z.string(),
    image: z.string(),
    category: z.string()
})

export const Services = z.array(
    z.object({
        id: z.number(),
        name: z.string(),
        image: z.string(),
        category: z.string(),
        description: z.string(),
    })
)

export const Service = z.object({
    id: z.number(),
    name: z.string(),
    image: z.string(),
    category: z.string(),
    description: z.string(),
})




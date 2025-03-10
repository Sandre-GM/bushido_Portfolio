import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { Proyects, Services, Skills } from './types'


type ModeStore = {
    mode: boolean,
    proyects: Proyects,
    skills: Skills,
    services: Services,
    changeMode: () => void,
    handleData: (proyects: Proyects) => void,
    setSkills: (skills: Skills) => void,
    setServices: (services: Services) => void
}



export const useModeStore = create<ModeStore>()(
    devtools(
        persist((set, get) => ({
            mode: true,
            proyects: [],
            skills: [],
            services: [],
            changeMode: () => {
                set(() => ({
                    mode: !get().mode
                }))
            },
            handleData: (proyects: Proyects) => {
                set(() => ({
                    proyects: proyects
                }))
            },
            setSkills: (skills: Skills) => {
                set(() => ({
                    skills: skills
                }))
            },
            setServices: (services: Services) => {
                set(() => ({
                    services: services
                }))
            }



        }), {
            name: 'bushidoStorage',
            storage: createJSONStorage(() => sessionStorage)
        })
    ))

import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { Proyect, Proyects, Services, Skills } from './types'

import { getProyectById } from './utility'


type ModeStore = {
    mode: boolean,
    modal: boolean,
    proyects: Proyects,
    skills: Skills,
    services: Services,
    selectedProject: Proyect
    changeMode: () => void,
    handleData: (proyects: Proyects) => void,
    setSkills: (skills: Skills) => void,
    setServices: (services: Services) => void,
    selectProject: (id: Proyect['id']) => Promise<void>,
    closeModal: () => void
}



export const useModeStore = create<ModeStore>()(
    devtools(
        persist((set, get) => ({
            mode: true,
            modal: false,
            proyects: [],
            skills: [],
            services: [],
            selectedProject: {} as Proyect,
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
            },
            selectProject: async (id) => {
                const selected = await getProyectById(id)
                set(() => ({
                    selectedProject: selected,
                    modal: true
                }))
            },
            closeModal: () => {
                set(() => ({
                    modal: false,
                    selectedProject: {} as Proyect
                }))
            },
        }), {
            name: 'bushidoStorage',
            storage: createJSONStorage(() => sessionStorage)
        })
    ))

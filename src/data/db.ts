import { Proyects, Services, Skills } from "../types";

export const db: Proyects = [
    {
        id: 1,
        name: 'Buscador de Clima',
        image: 'proyect1',
        description: 'Project development with access to 2 APIs to obtain the weather, through axios and validation with zod',
        details: {
            date: "1 de Febrero de 2025",
            tech: "React TypeScript Axios ZOD",
            url: "https://climatypescriptsandre.netlify.app",
            challenge: "Different types of data validation such as volibot, classic method and zod to choose the appropriate one"
        },
        category: "Developer",
        top: true
    },
    {
        id: 2,
        name: 'Planificador de Gastos',
        image: 'proyect2',
        description: 'For the Expense Control project, tailwindCSS was used as a styler, ContextAPI generating its own context for the application, creating its own hook to access the context and the Reducer. Headles UI was also used to create a modal window. The state was placed in a LocalStorage.',
        details: {
            date: "13 de Diciembre de 2024",
            tech: "React TypeScript ContextApi Tailwindcss Headles UI UseReducer",
            url: "https://checatusgastos.netlify.app",
            challenge: "The challenge implement Headles UI"
        },
        category: "Developer",
        top: true
    },
    {
        id: 3,
        name: 'GuitarLa',
        image: 'proyect3',
        description: 'Creation of GuitarLa project with the migration of a JavaScript project to a TypeScript Project with the management of UseReducer for the state and the use of React Hooks for the management of the state of the application',
        details: {
            date: "5 de Agosto de 2024",
            tech: "React TypeScript UseReducer ",
            url: "https://chic-beijinho-3eea32.netlify.app",
            challenge: "Migrate the project to TypeScript"
        },
        category: "Developer",
        top: false
    },
    {
        id: 4,
        name: 'Cotizador de Criptomonedas',
        image: 'proyect4',
        description: 'Real-time Cryptocurrency Quoter with TypeScript Zustand status manager along with ReduxDevTools for web observation and data validation with Zod',
        details: {
            date: "1 de Febrero de 2025",
            tech: " React ReduxDevTools Zod TypeScript  Zustand ",
            url: "https://cryptoreactsandre.netlify.app",
            challenge: "Api data validation"
        },
        category: "Developer",
        top: true
    },
    {
        id: 5,
        name: 'COPECLA',
        image: 'proyect5',
        description: 'Development of website for COPECLA Council of Experts, informative website, layout and email service with EmailJs',
        details: {
            date: "4 de Julio de 2024",
            tech: "React JavaScript EmailJs BootStrap",
            url: "https://www.consejodeperitos.com",
            challenge: "Integration of EmailJs"
        },
        category: "Developer",
        top: true
    },
    {
        id: 6,
        name: 'Cocktail',
        image: 'proyect6',
        description: 'Construction of Cocktail, drink recipe page with ReactRouterDom integration with multiple Stores with Zustand fetch API ',
        details: {
            date: "28 de Enero de 2025",
            tech: "React TypeScript Zod Zustand Axios",
            url: "https://happywebsandre.netlify.app",
            challenge: "The Multiple Stores"
        },
        category: "Developer",
        top: true
    },
    {
        id: 7,
        name: 'CalorieTracker',
        image: 'proyect7',
        description: 'Calorie counter depending on the users exercise and food consumption',
        details: {
            date: "1 de Febrero de 2025",
            tech: "React TypeScript UseReducer",
            url: "https://calorietrackerbysandre.netlify.app",
            challenge: ""
        },
        category: "Developer",
        top: false
    },
    {
        id: 8,
        name: 'Pacientes de veterinaria',
        image: 'proyect8',
        description: 'Creation for monitoring veterinary patients, where we validate the information using a form to have a list of patients to treat',
        details: {
            date: "10 de Febrero de 2025",
            tech: "React TypeScript Zustand React-Hook-Form Zustand ReduxDevTools React-Toastify LocalStorage",
            url: "https://veterinariareactzustand.netlify.app",
            challenge: ""
        },
        category: "Developer",
        top: false
    },
    {
        id: 9,
        name: 'Calculadora de propinas',
        image: 'proyect9',
        description: 'Creating tip calculator with the use of typescript and a built-in reducer',
        details: {
            date: "12 de Julio de 2024",
            tech: "React TypeScript Reducer Tailwindcss UseMemo",
            url: "https://propinasreact.netlify.app",
            challenge: ""
        },
        category: "Developer",
        top: false
    },
    {
        id: 10,
        name: 'Discipline',
        image: 'proyect10',
        description: 'Creation of logo for personal discipline brand, creation of patterns, styles and usage guide for the logo',
        details: {
            date: "18 de Enero de 2025",
            tech: "Adobe Ilustrator Creative Thinking",
            url: "https://bushidoportfolio.netlify.app",
            challenge: ""
        },
        category: "Designer",
        top: false
    },
    {
        id: 11,
        name: 'Crazy Brothers',
        image: 'proyect11',
        description: 'Creation of the Crazy Brother Brand, a brand valid until 2024, where they sold gummies with prepared fruit.',
        details: {
            date: "18 de Enero de 2022",
            tech: "Adobe Ilustrator Creative Thinking",
            url: "https://bushidoportfolio.netlify.app",
            challenge: ""
        },
        category: "Designer",
        top: false
    },
    {
        id: 12,
        name: 'RIEE',
        image: 'proyect12',
        description: 'Creación de Marca Personal RIEE estudio de uñas y estetica, creación de manual de identidad grafica',
        details: {
            date: "18 de Enero de 2025",
            tech: "Adobe Ilustrator Adobe InDesign Adobe Photoshop Creative Thinking",
            url: "https://bushidoportfolio.netlify.app",
            challenge: ""
        },
        category: "Designer",
        top: false
    },
    {
        id: 13,
        name: 'PIIB 34',
        image: 'proyect13',
        description: 'Logo creation for the "PIIB 34" brand, a bakery located in Tijuana Baja California.',
        details: {
            date: "18 de Enero de 2025",
            tech: "Adobe Ilustrator  Adobe Photoshop Creative Thinking",
            url: "https://bushidoportfolio.netlify.app",
            challenge: ""
        },
        category: "Designer",
        top: true
    },
    {
        id: 14,
        name: 'Burbu&Clean',
        image: 'Proyect14',
        description: 'Creation of Burbu & Clean, for a local business located in Azcapotzalco CMX, creation of labels for products in personalized format',
        details: {
            date: "2 de Junio de 2023",
            tech: "Ilustrator Adobe Photoshop Creative Thinking",
            url: "https://bushidoportfolio.netlify.app",
            challenge: ""
        },
        category: "Designer",
        top: true
    },
    {
        id: 15,
        name: 'PinkMoon-1',
        image: 'proyect15',
        description: 'Creation of logo for Pink Moon nail studio, with formal style, delivery of correct use manual',
        details: {
            date: "18 de Enero de 2025",
            tech: "Ilustrator Adobe Photoshop Creative Thinking",
            url: "https://bushidoportfolio.netlify.app",
            challenge: "Integrate a formal style"
        },
        category: "Designer",
        top: false
    },
    {
        id: 16,
        name: 'Hackaton Enactus Monterrey BBVA',
        image: 'proyect16',
        description: 'Integration of view design for the official BBVA application when participating in the hackathon Enactus Monterrey BBVA',
        details: {
            date: "Mayo de 2024",
            tech: "Figma Ilustrator",
            url: "https://bushidoportfolio.netlify.app",
            challenge: "The views must be correctly integrated with the current BBVA design"
        },
        category: "Designer",
        top: true
    },
    {
        id: 17,
        name: 'Full Hands Hackaton FES-A 2024',
        image: 'proyect17',
        description: 'Creation of views and total design of an application for IOS, stylizing and designing the flow of the application',
        details: {
            date: "Marzo 2024",
            tech: "Figma ",
            url: "https://bushidoportfolio.netlify.app",
            challenge: "The integration of IOS Styles "
        },
        category: "Designer",
        top: false
    },
    {
        id: 18,
        name: 'Hackaton FES-A-2 2024 SafePlace',
        image: 'proyect18',
        description: 'Creation of views and total design of an application for IOS, stylizing and designing the flow of the application',
        details: {
            date: "Noviembre 2024",
            tech: "Figma Aqui va la tech",
            url: "https://bushidoportfolio.netlify.app",
            challenge: "Maintain a secure appearance for development and design reasons"
        },
        category: "Designer",
        top: true
    },
    {
        id: 19,
        name: 'Campaña Publicitaria Casa Blanca',
        image: 'Proyect19',
        description: 'With the help of an integrated team of designers, we created a complete advertising campaign for the Salon Casa Blanca, where we created the strategy, implementation and the final result, as well as creating the Master Graphics for the publications.',
        details: {
            date: "8 Diciembre 2024",
            tech: "Photoshop Ilustrator ",
            url: "https://bushidoportfolio.netlify.app",
            challenge: "BTL ATL advertising campaign"
        },
        category: "Designer",
        top: true
    },
    {
        id: 20,
        name: 'Diseño de Constancias',
        image: 'Proyect20',
        description: 'Design of certificates for the IPN in the "Higher School of Engineering and Architecture" section collaborating with the designer Lara Julieta',
        details: {
            date: "8 Diciembre 2024",
            tech: "Photoshop Ilustrator ",
            url: "https://bushidoportfolio.netlify.app",
            challenge: ""
        },
        category: "Designer",
        top: true
    }
];

export const skillsDb: Skills = [
    {
        id: 1,
        name: 'Figma',
        image: 'Figma',
        category: "Designer"
    },
    {
        id: 2,
        name: 'Ilustrator',
        image: 'Illustrator',
        category: "Designer"
    },
    {
        id: 3,
        name: 'InDesign',
        image: 'Indesign',
        category: "Designer"
    },
    {
        id: 4,
        name: 'DaVinci Resolve',
        image: 'DaVinci',
        category: "Designer"
    },
    {
        id: 5,
        name: 'Blender',
        image: 'Blender3D',
        category: "Designer"
    },
    {
        id: 6,
        name: 'HTML5',
        image: 'Html',
        category: "Developer"
    },
    {
        id: 7,
        name: 'CSS 3',
        image: 'CSS3',
        category: "Developer"
    },
    {
        id: 8,
        name: 'JavaScript',
        image: 'JavaScript',
        category: "Developer"
    },
    {
        id: 9,
        name: 'TypeScript',
        image: 'TypeScript',
        category: "Developer"
    },
    {
        id: 10,
        name: 'React',
        image: 'React',
        category: "Developer"
    },
    {
        id: 11,
        name: 'TailwindCSS',
        image: 'Tailwind',
        category: "Developer"
    },
    {
        id: 12,
        name: 'BootStrap',
        image: 'Bootstrap',
        category: "Developer"
    },
    {
        id: 13,
        name: 'Photoshop',
        image: 'Photoshop',
        category: "Designer"
    },
    {
        id: 14,
        name: 'ECMAScript 6',
        image: 'JavaScript',
        category: "Developer"
    },
]

export const ServiceDb: Services = [
    {
        id: 1,
        name: 'Web Development',
        image: 'DeveloperService1',
        category: "Developer",
        description: "Development of web applications, using React, for Development solutions"
    },
    {
        id: 2,
        name: 'Web Layout',
        image: 'DeveloperService2',
        category: "Developer",
        description: "Design layout service for web pages"
    },
    {
        id: 3,
        name: 'Branding',
        image: 'DesignerService1',
        category: "Designer",
        description: "Creation of logos and brand identity"
    },
    {
        id: 4,
        name: 'Web Design',
        image: 'DesignerService2',
        category: "Designer",
        description: "Web page design, UI/UX design"
    },
    {
        id: 5,
        name: '3D Design',
        image: 'DesignerService3',
        category: "Designer",
        description: "Design and creation of objects and 3D models, scenarios and characters"
    }

]

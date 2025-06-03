import spotify from '../assets/spotify/img1.png'
import todo from '../assets/ToDoList/img2.png'
import eva from '../assets/Eva/Eva.png'

export interface itemProjects {
    id: number,
    project: string,
    link: string,
    img: string,
    description: string
}

export const projects : itemProjects[] = [
    {id: 1, project: 'Clone Spotify', link:'/', img: spotify , description: 'Feito em React, JavaScript, Tailwind CSS'},
    {id: 2, project: 'To Do List', link:'https://ypiaza.github.io/To-Do-List/', img: todo, description: 'Feito puramente em Html, CSS e javascript'},
    {id: 3, project: 'Assistente por voz (Ainda não finalizado)', link:'https://ypiaza.github.io/EvA-projeto-test/', img: eva, description: 'Feito em React, JavaScript, Tailwind CSS'},
]

export interface itemMoreProjects {
    title: string,
    link: string,
    description: string
}

export const moreProjects : itemMoreProjects[] = [
    {title: 'Mais projetos em desenvolvimento', link: 'https://github.com/ypiaza', description:'Acesse meu GitHub.'}
]
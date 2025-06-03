import React from "react"
import { IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";


export interface itemBtn {
    link: string,
    name: string,
    color: string,
    icon: React.ElementType
}

export const btn: itemBtn[] = [
    {
        link: 'https://wa.me/5579998671726',
        name: 'Fale comigo',
        color: '#25D366',
        icon: IoLogoWhatsapp
    },{
        link: 'https://www.linkedin.com/in/yuri-piaza-615b6730a',
        name: 'Meu LinkedIn',
        color: '#0A66C2',
        icon: IoLogoLinkedin
    }
]
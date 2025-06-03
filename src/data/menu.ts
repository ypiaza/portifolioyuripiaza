import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export interface itemMenuFooter {
    icon: React.ElementType,
    link: string
}

export const menuFooter : itemMenuFooter[] = [
    {icon: FaLinkedin, link: 'https://www.linkedin.com/in/yuri-piaza-615b6730a'},
    {icon: FaGithub, link: 'https://github.com/ypiaza'},
    {icon: FaWhatsapp, link: 'https://wa.me/5579998671726'}

]
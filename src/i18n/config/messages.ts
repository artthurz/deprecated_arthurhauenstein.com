import { MessageFile } from '@/i18n/protocols'

const messages: MessageFile = {
  pt: {
    home: 'Home',
    projects: 'Projetos',
    contact: 'Contato',
    open_menu: 'Abrir menu',
    close_menu: 'Fechar menu',
    fullstack: 'Full Stack Engineer',
    presentation: 'Olá, eu sou Arthur, esta pagína está em construção'
  },
  en: {
    home: 'Home',
    projects: 'Projects',
    contact: 'Contact',
    open_menu: 'Open menu',
    close_menu: 'Close menu',
    fullstack: 'Full Stack Engineer',
    presentation: "Hi, i'm Arthur, this page is under construction"
  },
  es: {
    home: 'Home',
    projects: 'Proyectos',
    contact: 'Contacto',
    open_menu: 'Abrir menú',
    close_menu: 'Cerrar menú',
    fullstack: 'Ingeniero Full Stack',
    presentation: 'Hola, soy Arthur, esta página está en construcción'
  }
} as const

export default messages

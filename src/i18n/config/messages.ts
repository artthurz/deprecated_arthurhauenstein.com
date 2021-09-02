import { MessageFile } from '@/i18n/protocols'

const messages: MessageFile = {
  pt: {
    home: 'Home',
    projects: 'Projetos',
    contact: 'Contato',
    open_menu: 'Abrir menu',
    close_menu: 'Fechar menu',
    fullstack: 'Full Stack Engineer',
    presentation: 'Olá, eu sou Arthur, esta pagína está em construção',
    not_found_message:
      'Opss, parece que a página que você tentou acessar não existe!',
    go_back_home: 'Voltar para home'
  },
  en: {
    home: 'Home',
    projects: 'Projects',
    contact: 'Contact',
    open_menu: 'Open menu',
    close_menu: 'Close menu',
    fullstack: 'Full Stack Engineer',
    presentation: "Hi, i'm Arthur, this page is under construction",
    not_found_message:
      "Oops, it looks like the page you tried to access doesn't exist!",
    go_back_home: 'Return to home'
  },
  es: {
    home: 'Home',
    projects: 'Proyectos',
    contact: 'Contacto',
    open_menu: 'Abrir menú',
    close_menu: 'Cerrar menú',
    fullstack: 'Ingeniero Full Stack',
    presentation: 'Hola, soy Arthur, esta página está en construcción',
    not_found_message:
      '¡Upss, parece que la página a la que intentó acceder no existe!',
    go_back_home: 'Volver a la home'
  }
} as const

export default messages

import { type Comic } from '../types';

export function comicsWithFrontPage(comics: Comic[], url: string) {
  return comics.filter(comic => comic.thumbnail && comic.thumbnail.path && comic.thumbnail.path !== url)
}

export function formatDateString(dateString: string) {
  // Crear un objeto Date a partir de la cadena de fecha
  const date = new Date(dateString)
  
  // Obtener el día, el mes y el año de la fecha
  const day = date.getDate()
  const year = date.getFullYear()

  // Array con los nombres de los meses en español
  const months = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ]

  // Obtener el nombre del mes
  const month = months[date.getMonth()]

  // Formatear la fecha en el formato deseado
  return `${day} de ${month} del ${year}`
}
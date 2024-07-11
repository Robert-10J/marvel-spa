import { KEYS, URL_COMIC_WHITHOUT_IMG } from '../constants'
import { comicsWithFrontPage } from '../helpers'
import { type Root } from '../types'

const ID_COMIC = 0

const ENDPOINTS_API = {
  COMICS: `http://gateway.marvel.com/v1/public/comics?ts=${KEYS.TS}&apikey=${KEYS.API_KEY}&hash=${KEYS.HASH}`,
  COMIC: `http://gateway.marvel.com/v1/public/comics/${ID_COMIC}?ts=${KEYS.TS}&apikey=${KEYS.API_KEY}&hash=${KEYS.HASH}`
}

export const fetchComics = async () => {
  const response = await fetch(ENDPOINTS_API.COMICS)
  const data = await response.json() as Root
  const dataComics = comicsWithFrontPage(data.data.results, URL_COMIC_WHITHOUT_IMG)
  return dataComics
}

/* export const fetchComicsPromises = () => {
  return fetch(ENDPOINTS_API.COMICS)
   .then(response => response.json() as unknown as Root)
   .then(data => {
      const dataComics = comicsWithFrontPage(data.data.results, URL_COMIC_WHITHOUT_IMG)
      console.log(dataComics)
      return dataComics
   })
   .catch(error => console.error('Error:', error))
} */
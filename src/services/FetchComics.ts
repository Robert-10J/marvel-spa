import { KEYS, URL_COMIC_WHITHOUT_IMG } from '../constants'
import { comicsWithFrontPage } from '../helpers'
import { Comic, type ResponseComics } from '../types'

const idComic = 0

const ENDPOINTS_API = {
  COMICS: `http://gateway.marvel.com/v1/public/comics?limit=100&ts=${KEYS.TS}&apikey=${KEYS.API_KEY}&hash=${KEYS.HASH}`,
  COMIC: `http://gateway.marvel.com/v1/public/comics/${idComic}?ts=${KEYS.TS}&apikey=${KEYS.API_KEY}&hash=${KEYS.HASH}`
}

export const fetchComics = async () => {
  try {
    const response = await fetch(ENDPOINTS_API.COMICS)
    const data = await response.json() as ResponseComics
    const dataComics = comicsWithFrontPage(data.data.results, URL_COMIC_WHITHOUT_IMG)
    return dataComics
  } catch (error) {
    console.log('Error:', error)
    throw error
  }
}

export const fetchComicById = async (idComic: number): Promise<Comic> => {
  try {
    const response = await fetch(`http://gateway.marvel.com/v1/public/comics/${idComic}?ts=${KEYS.TS}&apikey=${KEYS.API_KEY}&hash=${KEYS.HASH}`)
    const data = await response.json() as ResponseComics
    const dataComic = data.data.results[0]
    return dataComic
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

/* export const fetchComicsPromises = () => {
  return fetch(ENDPOINTS_API.COMICS)
   .then(response => response.json() as unknown as ResponseComics)
   .then(data => {
      const dataComics = comicsWithFrontPage(data.data.results, URL_COMIC_WHITHOUT_IMG)
      console.log(dataComics)
      return dataComics
   })
   .catch(error => console.error('Error:', error))
} */
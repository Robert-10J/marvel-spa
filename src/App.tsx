import { useEffect, useState } from 'react'
import ComicCard from './components/ComicCard'
import { type Comic, type Root } from './types'
import Spinner from './components/Spinner'
import { KEYS, URL_COMIC_WHITHOUT_IMG } from './constants'
import { comicsWithFrontPage } from './helpers'


function App() {
  const URL_API = `http://gateway.marvel.com/v1/public/comics?ts=${KEYS.TS}&apikey=${KEYS.API_KEY}&hash=${KEYS.HASH}`

  const [comics, setComics] = useState<Comic[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchComics = async () => {
      setIsLoading(!isLoading)
      const response = await fetch(URL_API)
      const data = await response.json() as Root
      const dataComics = comicsWithFrontPage(data.data.results, URL_COMIC_WHITHOUT_IMG)
      console.log(dataComics)
      setComics(dataComics)
      setIsLoading(isLoading)
    }
    fetchComics()
  }, [])

  return (
    <>
      <header className='h-24 sticky top-0 w-full flex items-center shadow-lg bg-gray-100'>
        <h1 className='text-7xl roboto-black py-1 px-0 bg-red-600 text-white'>Marvel</h1>
      </header>

      { isLoading && <Spinner /> }

      <main className='grid lg:grid-cols-4 md:grid-cols-1 gap-y-10 p-4 overflow-y-auto'>
        { 
          comics.map(comic => {
            return (
              <ComicCard 
                key={comic.id}
                comic={comic}
              />
            )
          })
        }
      </main>
    </>
  )
}

export default App

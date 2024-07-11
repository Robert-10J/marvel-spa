import { useEffect, useState } from 'react'
import ComicCard from './components/ComicCard'
import { type Comic } from './types'
import Spinner from './components/Spinner'
import { fetchComics } from './services/FetchComics'

function App() {
  const [comics, setComics] = useState<Comic[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    //fetchComicsPromises()

    try {
     const getComics = async () => {
      setIsLoading(!isLoading)
      const dataComics = await fetchComics()
      setComics(dataComics)
      setIsLoading(isLoading)
     }

     getComics()
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <>
      <header className='h-16 sticky top-0 z-50 w-full flex items-center shadow-lg bg-gray-100'>
        <h1 
          className='text-6xl roboto-black py-1 px-0 h-full mx-2 bg-gradient-to-r from-red-600 via-red-400 to-red-600 inline-block text-transparent bg-clip-text'
        >Marvel</h1>
      </header>

      { isLoading && <Spinner /> }

      <main className='grid lg:grid-cols-4 md:grid-cols-1 md:mx-20 gap-10 py-10 gap-y-20 mt-3 overflow-y-auto relative'>
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

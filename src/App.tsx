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
      {isLoading && <Spinner />}

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
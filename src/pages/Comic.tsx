import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchComicById } from '../services/FetchComics'
import { type Comic } from '../types'
import { formatDateString } from '../helpers'
import Spinner from '../components/Spinner'

const Comic = () => {
  const params = useParams()
  const idComic = params.id as unknown as number

  const [comic, setComic] = useState<Comic>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    try {
      const getComics = async () => {
        setIsLoading(!isLoading)
        const dataComic = await fetchComicById(idComic)
        setComic(dataComic)
        setIsLoading(isLoading)
      }
      getComics()
    } catch (error) {
      console.error(error)
    }
  }, [])

  const isEmptyCreators = comic?.creators.items.length === 0
  const isEmptyDescription = comic?.textObjects[0].text.length === 0

  return (
    <>
      <div className='m-3'>
        <Link
          to="/"
          className='hover:text-red-500 font-medium text-lg'
        >{'<'} Volver</Link>
      </div>

      {isLoading && <Spinner />}

      <div className='h-screen grid md:grid-cols-2 mt-10 mx-10'>
        <div className="w-full md:mb-3 flex justify-center">
          <img
            src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`}
            alt={`Imagen de portada del comic ${comic?.title}`}
            className='md:w-2/3 h-2/3 bg-transparent'
          />
        </div>

        <div className="w-full md:mt-5">
          <h2
            className='roboto-bold text-3xl text-center bg-gradient-to-r from-red-600 via-red-400 to-red-600 inline-block text-transparent bg-clip-text'
          >{comic?.title}</h2>

          <div className='mt-5'>
            <p className='roboto-medium'>
              Publicado:
              <span className='roboto-regular'> {formatDateString(comic?.dates[0].date as unknown as string)}</span>
            </p>
            <p className='roboto-medium'>Creadores: {''}</p>
            {isEmptyCreators ? (
              <p>Sin autores registrados</p>
            ) : (
              <ul>
                {
                  comic?.creators.items.map(creator => (
                    <li key={creator.resourceURI}>
                      {creator.name} - <span className='capitalize'>{creator.role}</span>
                    </li>
                  ))
                }
              </ul>
            )}
          </div>

          <div className='mt-10'>
            <p className='text-xl roboto-medium'>Resumen:</p>
            <p>
              {isEmptyDescription ? (
                <p>Este comic no tiene un resumen</p>
              ) : (
                <>
                  {comic?.textObjects[0]?.text}
                </>
              )}
            </p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Comic
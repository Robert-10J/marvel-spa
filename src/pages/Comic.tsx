import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchComicById } from '../services/FetchComics'
import { type Comic } from '../types'

const Comic = () => {
  const idComic = useParams()
  const ID_COMIC = idComic.id as unknown as number

  console.log(ID_COMIC)

  const [comic, setComic] = useState<Comic>({} as Comic)

  useEffect(() => {
    try {
      const getComics = async () => {
        const dataComic = await fetchComicById(ID_COMIC)
        setComic(dataComic)
      }
      
      getComics()
    } catch (error) {
      console.error(error)
    }
  }, [])
  console.log(comic)

  const AUTHORS_IS_EMPTY = comic?.creators.items.length === 0

  return (
    <>
      <nav className='w-full mt-2 mx-5'>
        <Link 
          to="/"
          className='hover:text-red-600 font-semibold'
        >{'<'} Volver</Link>
      </nav>

      <div className='h-screen grid md:grid-cols-2 mt-10 mx-10'>

        <div className="w-full md:mb-3 flex justify-center">
          <img
            src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`}
            alt={`Imagen de portada del comic ${comic?.title}`}
            className='md:w-1/2 bg-transparent'
          />
        </div>

        <div className="w-full md:mt-5">
          <h2
            className='roboto-bold text-3xl text-center bg-gradient-to-r from-red-600 via-red-400 to-red-600 inline-block text-transparent bg-clip-text'
          >{comic?.title}</h2>

          <div className='mt-5'>
            <p className='roboto-medium'>Creadores: {''}</p>
            { AUTHORS_IS_EMPTY ? (
              <p>Sin autores registrados</p>
            ) : (
              <ul>
                {
                  comic?.creators.items.map(creator => (
                    <li key={creator.resourceURI}>
                      {creator.name} - <span>{creator.role}</span>
                    </li>
                  ))
                }
              </ul>
            )}
          </div>


          <div className='mt-10'>
            <p className='text-xl roboto-medium'>Resumen:</p>
            <p>{comic?.textObjects[0].text ?? 'No hay resumen del comic'}</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Comic
import { Link } from 'react-router-dom'
import { type Comic } from '../types'

const ComicCard = ({ comic }: { comic: Comic }) => {

  const { title, thumbnail } = comic

  return (
    <div
      className='p-2 shadow-lg bg-transparent rounded-md flex flex-col items-center justify-center gap-2 w-full hover:transition hover:duration-300 hover:scale-105'
    >
      <img
        src={`${thumbnail.path}.jpg`}
        alt={`Imagen del comic ${title}`}
        className='w-3/4'
      />

      <div className='mt-5 flex flex-col items-center justify-center gap-5 w-full'>
        <p className='roboto-regular text-xl text-start'>
          {title}
        </p>

        <Link
          to={`/comic/${comic.id}`} 
          className='text-center roboto-medium py-2 rounded-lg hover:cursor-pointer w-1/2 uppercase text-white bg-gradient-to-tr from-red-500 to-red-700 hover:to-red-800'
        >Ver más</Link>
      </div>
    </div>
  )
}

export default ComicCard
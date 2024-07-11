import { type Comic } from '../types'

const ComicCard = ({ comic }: { comic: Comic}) => {
  
  const { title, thumbnail, prices } = comic
  
  return (
    <div className='p-2 shadow-lg rounded-md flex flex-col gap-2 w-3/4 hover:transition hover:duration-300 hover:scale-105'>
      <img 
        src={`${thumbnail.path}.jpg`} 
        alt={`Imagen del comic ${title}`}
        className='w-full'
      />
      <p className='roboto-medium text-xl text-start'>
        {title}
      </p>
      <p>
        {
          prices.map(price => (
            <p
              key={price.type}
              className='text-gray-600'
            >
              Precio: <span className='roboto-light'>${price.price}</span>
            </p>
          ))
        }
      </p>
    </div>
  )
}

export default ComicCard
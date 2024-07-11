import { type Comic } from '../types'

const ComicCard = ({ comic }: { comic: Comic}) => {
  
  const { title, thumbnail, prices } = comic
  
  return (
    <div className='p-2 shadow-lg bg-gray-100 rounded-md flex flex-col items-center justify-center gap-2 w-full hover:transition hover:duration-300 hover:scale-105'>
      <img 
        src={`${thumbnail.path}.jpg`} 
        alt={`Imagen del comic ${title}`}
        className='w-3/4'
      />

      <div>
        <p className='roboto-medium text-xl text-start'>
          {title}
        </p>

        
        {/* <>
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
        </> */}
      </div>
    </div>
  )
}

export default ComicCard
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='text-center'>
        <Link to="/">        
          <h1 
            className='text-6xl roboto-black py-1 px-0 h-full mx-2 bg-gradient-to-r from-red-600 via-red-400 to-red-600 inline-block text-transparent bg-clip-text'
          >Marvel 404</h1>
        </Link>

        <p className='mt-5'>
          Parece ser que ese comic no existe
        </p>
        <Link to="/" className='hover:cursor-pointer text-red-500'>Regresar</Link>
      </div>
      
    </div>
  )
}

export default ErrorPage
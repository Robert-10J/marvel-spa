import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header className='h-16 sticky top-0 z-50 w-full flex items-center shadow-lg bg-gray-100'>
        <Link to="/">
          <h1 
            className='text-6xl roboto-black py-1 px-0 h-full mx-2 bg-gradient-to-r from-red-600 via-red-400 to-red-600 inline-block text-transparent bg-clip-text'
          >Marvel Comics</h1>
        </Link>
      </header>

      <Outlet/>
    </>
  )
}

export default Layout
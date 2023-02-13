import airplaneSVG from './assets/airplane.svg'
import { Link } from 'react-router-dom'

export default function Header({user}){
    return (
        <header className='p-2 flex mb-2 justify-between fixed top-0 left-0 bg-white w-full'>
        {/* Logo and Name */}
        <a href="/" className='flex items-center gap-1'>
            <button className='p-2 rounded-2xl bg-transparent hover:-scale-100 transition-all duration-300'>
                <img src={airplaneSVG} alt="arrow-right" className='h-8' />
            </button>
            <span className='font-semibold text-2xl -ml-2' id='brand'>QuickStay</span>
        </a>
        {/* Navigation */}
        <nav className='flex items-center gap-4 p-2 px-4 md:pl-6 rounded-3xl border border-gray-300 shadow-md shadow-gray-200'>
            <div><input style={{all: 'unset'}} size='5' type="text" placeholder='Anywhere'/></div>
            <div className="border-l h-6 border-gray-300"></div>
            <div>Any week</div>
            <div className="border-l h-6 border-gray-300"></div>
            <div>Add guests</div>
            <button className='bg-primary p-2 -mr-2 text-white rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4"> <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
            </button>
        </nav>
        {/* User */}
        <div className='flex items-center gap-1 px-1 my-0 mr-1 md:my-1 rounded-3xl border border-gray-300'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-1"> <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            <Link to={'/login'} className='bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 relative top-1">  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" /></svg>
            </Link>
            {!!user && (<div className='mr-1'>{user.name}</div>)}
        </div>
    </header>
    );
}
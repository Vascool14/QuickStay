import airplaneSVG from './assets/airplane.svg'
import { Link } from 'react-router-dom'

export default function Header(){
    return (
        <header className='px-2 flex justify-between'>
        {/* Logo and Name */}
        <a href="/" className='flex items-center gap-1'>
            <img src={airplaneSVG} alt="arrow-right" className='h-6' />
            <span className='font-semibold text-xl'>QuickStay</span>
        </a>
        {/* Navigation */}
        <nav className='flex items-center gap-2 p-2 px-4 rounded-3xl border border-gray-300 shadow-md shadow-gray-200'>
            <div>Anywhere</div>
            <div className="border-l h-6 border-gray-300"></div>
            <div>Any week</div>
            <div className="border-l h-6 border-gray-300"></div>
            <div>Add guests</div>
            <button className='bg-primary p-1 text-white rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"> <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
            </button>
        </nav>
        {/* User */}
        <div className='flex items-center gap-2 p-2 px-4 rounded-3xl border border-gray-300'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            <Link to={'/login'} className='bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" /></svg>
            </Link>
        </div>
    </header>
    );
}
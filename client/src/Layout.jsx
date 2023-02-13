import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'

export default function Layout({ children, user }) {
return (
    <div className='p-2 mt-16 md:px-4  flex flex-col h-full'>
        <Header user={user}/>
        <Outlet />
    </div>
    )
}
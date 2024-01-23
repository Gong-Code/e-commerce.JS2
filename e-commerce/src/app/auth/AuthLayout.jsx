import { Outlet } from 'react-router-dom'

function AuthLayout() {
    return (
        <div className='h-screen flex items-center justify-center'>
            <Outlet/>
        </div>
    )
}

export default AuthLayout
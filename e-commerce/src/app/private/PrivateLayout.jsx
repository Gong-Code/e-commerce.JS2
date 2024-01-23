import { Outlet, useNavigate } from 'react-router-dom'
import { AuthContext, useAuthContext } from '../../context/AuthContext';
import { useEffect } from 'react';

const PrivateLayout = () => {
    const navigate = useNavigate();
    const { token } = useAuthContext(AuthContext);  

    useEffect(() => {
        if (!token) {
            navigate("/auth/login");
        }
    }, [token, navigate]);

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default PrivateLayout
import { Outlet, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie';

const PrivateRoutes = () => {
    let cookie = Cookies.get("access-token");
    let storage = localStorage.getItem("tortilla");
    return(
        cookie ? <Outlet/> :
        storage ? <Outlet/> :
        <Navigate to="/"/>
    )
};

export default PrivateRoutes
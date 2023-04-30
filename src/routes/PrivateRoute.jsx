import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    console.log(location);
    if(loading){
        return <Spinner animation="border" variant="primary" />
    }
    if(user){
        return children                        
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;


/**
 *  -----------------
 *          STEPS
 *  -----------------
 *  1. check user is logged in or not
 *  2. If user is logged in, then allow then to visit the route 
 *  3. Else redirect hte use to the login page
 *  4. setup the private router
*/
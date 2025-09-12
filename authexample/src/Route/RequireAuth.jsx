import useAuth from "../Context/useAuth";
import { Navigate, Outlet } from "react-router-dom";
//Navigate helps us in redirecting to some other route
//Outlet helps us in rendering child routes inside parent routes

export default function RequireAuth(){
const { user } = useAuth();



    if(!user){
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}
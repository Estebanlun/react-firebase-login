import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";


export default function ProtectedRoutes({children}) {
    const {user, loading} = useAuth();

    if(loading) return <p>Loading...</p>;

    if(!user) return <Navigate to="/login"/>;

    return <> {children} </>;
}

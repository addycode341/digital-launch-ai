import { Navigate } from "react-router-dom";


function ProtectedRoute({children}){


const payment =
localStorage.getItem("paymentStatus");


const login =
localStorage.getItem("userLoggedIn");



if(payment==="success" || login==="true"){

return children;

}


return <Navigate to="/login" replace />;


}


export default ProtectedRoute;
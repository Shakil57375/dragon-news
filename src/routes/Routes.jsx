import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Home/Category";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/News/News/News";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
const router = createBrowserRouter([
    {
            path : '/',
            element : <LoginLayout></LoginLayout>,
            children : [
                {
                    path : '/',
                    element : <Navigate to='/category/0'></Navigate>
                },
                {
                    path : '/login',
                    element : <Login></Login>
                },
                {
                    path : "/register",
                    element : <Register></Register>
                }
            ]
    },
    {
        path: "category",
        element: <Main></Main>,
        children : [
            {
                path : ':id',
                element : <Category></Category>,
                loader : ({params})=> fetch(`http://localhost:5000/catagories/${params.id}`)
            }
        ]
    },
    {
        path : "/news",
        element : <NewsLayout></NewsLayout>,
        children : [
            {
                path : ':id',
                element : <News></News>,
                loader : ({params}) => fetch(`http://localhost:5000/news/${params.id}`),
            }
        ]        
    }
]);

export default router
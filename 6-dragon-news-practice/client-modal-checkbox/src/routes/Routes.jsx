import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../pages/home/category/Category";
import LoginLayout from "../layouts/LoginLayouts";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import About from "../pages/about/About";
import Career from "../pages/career/Career";
import Terms from "../shared/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to={'/category/0'}></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'career',
                element: <Career></Career>
            },
            {
                path: 'terms',
                element: <Terms></Terms>
            }
        ]

    },
    {
        path: 'category',
        element: <Main />,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]

    }
])
export default router;
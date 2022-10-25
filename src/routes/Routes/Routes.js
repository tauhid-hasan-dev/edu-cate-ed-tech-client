import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import CourseContent from "../../components/CourseContent/CourseContent";
import CourseDetails from "../../components/Courses/CourseDetails";
import Courses from "../../components/Courses/Courses";
import Faq from "../../components/Faq/Faq";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login/Login";
import Register from "../../components/Login/Register/Register";
import Checkout from "../../components/Other/Checkout/Checkout";
import ErrorElement from "../../components/Other/ErrorElement/ErrorElement";
import NotFound from "../../components/Other/NotFound/NotFound";
import Terms from "../../components/Other/Terms/Terms";
import Main from "../../layouts/Main/Main";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                errorElement: <ErrorElement></ErrorElement>,
                children: [
                    {
                        path: '/courses/',
                        element: <CourseContent></CourseContent>,
                        /* errorElement: <ErrorElement></ErrorElement>, */
                        loader: () => fetch('https://b610-lerning-platform-server-side.vercel.app/courses')
                    },
                    {
                        path: '/courses/:id',
                        element: <CourseDetails></CourseDetails>,
                        /*  errorElement: <ErrorElement></ErrorElement>, */
                        loader: ({ params }) =>
                            fetch(`https://b610-lerning-platform-server-side.vercel.app/courses/${params.id}`),
                    }
                ]
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({ params }) =>
                    fetch(`https://b610-lerning-platform-server-side.vercel.app/courses/${params.id}`),
            }
        ]
    },
    { path: '*', element: <NotFound></NotFound> }
])



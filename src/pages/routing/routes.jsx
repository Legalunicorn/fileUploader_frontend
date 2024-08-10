import { createBrowserRouter,Outlet } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'



import Layout from './Layout'
//import pages 
import Login from "../auth/Login"
import Signup from '../auth/Signup'



const router = createBrowserRouter([
    {
        element: <Layout/>,
        children:[
            {
                element: <p> hii</p>,
                path:"/", 
            },
            {
                path:"/auth/login",
                element: <Login/>
            },
            {
                path:"/auth/signup",
                element: <Signup/>
            },
            {
                path:"/user",
                element: <ProtectedRoute/>,
                children:[
                    {
                    path:"folders/:folderId",
                    element:<p>folder</p>,
                    children:[
                        {
                            path:"file/:fildId",
                            element: <p>file</p>

                        }
                    ]
                }
                ]
            }
        ]
    }
])

// const router = createBrowserRouter([
//     {
//         element:<p>hi</p>,
//         path:"/"
//     }
// ])

export default router



// const router = createBrwoserRouter([
//     {
//         path:"/",

//     }
// ])

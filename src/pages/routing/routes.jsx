import { createBrowserRouter,Outlet } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'



import Layout from './Layout'
//import pages 
import Login from "../auth/Login"
import Signup from '../auth/Signup'
import UserPage from '../UserPage/UserPage'
import Folder from '../Folder/Folder'
import UploadFile from '../uploadFile/UploadFile'
import CreateFolder from '../createFolder/CreateFolder'



const router = createBrowserRouter([
    {
        element: <Layout/>,
        children:[
            {
                element: <p> Landing page</p>,
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
                        path:"",
                        element:<UserPage/>
                    },
                    {
                        path:"new",
                        element:<CreateFolder/>
                    },
                    {
                        path:"folders/:folderId",
                        children:[
                            {
                                path:"",
                                element:<Folder/>
                            },
                            {
                                path:"new",
                                element:<UploadFile/>
                            },
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

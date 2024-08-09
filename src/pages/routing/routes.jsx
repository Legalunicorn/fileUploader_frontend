import { createBrowserRouter,Outlet } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'




//import pages 



const router = createBrowserRouter([
    {
        element: <p> hii</p>,
        path:"/", 
    },
    {
        path:"/auth/login",
        element: <p>login</p>
    },
    {
        path:"/auth/signup",
        element: <p>signup</p>
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

import Home from './pages/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const App = () => {
    const router=createBrowserRouter([
        {
            path:"/",
            element:<Home/>
        }
    ])
  return <RouterProvider router={router}/>
}

export default App
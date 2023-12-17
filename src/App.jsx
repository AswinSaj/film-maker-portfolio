import AboutUs from './pages/AboutUs/AboutUs'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeRoot from './pages/HomeRoot'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeRoot />,
    children: [{ path: 'connect', element: <AboutUs /> }],
  },
])
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

import { createBrowserRouter ,  createRoutesFromElements , Route , RouterProvider } from 'react-router-dom'
import { Header, Login, Browser} from './component/index'
import  { Toaster } from 'react-hot-toast';
function App() {
 //routing
 const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Header/>}>
        <Route  path='/login' element ={<Login/>} />
        <Route path='/browser' element ={<Browser/>} />
    </Route>
  )
 )
  return (
    <>
    <RouterProvider router={routes} />
    <Toaster/>
    </>
  )
}

export default App

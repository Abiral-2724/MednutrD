import './App.css'
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom'
import Register from './Pages/Register';
import Login from './Pages/Login';
import PatientHome from './Pages/PatientHome';
import DoctorHome from './Pages/DoctorHome';
import Navbar from './Pages/Navbar';
import Explore from './Pages/Explore';
import DietChart from './Pages/DietChart';
import Consulation from './Pages/Consultation';
import Cart from './Pages/Cart';
import Subscription from './Pages/Subscription';
import Medicine from './Pages/Medicine';
import Schedule from './Pages/Schedule';
import Scheduleavideocall from './Pages/Scheduleavideocall';
import DoctorServece from './Pages/DoctorServece';


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<PatientHome></PatientHome>
  },
  {
    path:'/doctor-home',
    element:<DoctorHome></DoctorHome>
  } ,
  {
    path:'/register',
    element:<Register></Register>
  } ,
  {
    path:'/login',
    element:<Login></Login>
  } ,
  {
    path:'/navbar',
    element:<Navbar/>
  },
  {
    path:'/explore',
    element:<Explore/>
  },
  {
    path :'/dietchart',
    element:<DietChart/>
  },
  {
    path:'/consultation',
    element:<Consulation/>
  },
  {
    path:'/cart',
    element:<Cart/>
  },
  {
    path:'subscription',
    element : <Subscription></Subscription>
  },
  {
    
    path:'purchasemedicine',
    element: <Medicine></Medicine>
  },{
    path : 'schedule',
    element : <Schedule></Schedule>
  },{
    path : 'videocall',
    element : <Scheduleavideocall></Scheduleavideocall>
  },{
    path:'doctor-services',
    element:<DoctorServece></DoctorServece>
  }
])
function App() {
  
  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
      
    </>
  )
}

export default App

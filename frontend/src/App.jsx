import './App.css'
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom'
import Register from './Pages/Register';
import Home from './Pages/Home';
import Login from './Pages/Login';
import PatientHome from './Pages/PatientHome';
import DoctorHome from './Pages/DoctorHome';

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

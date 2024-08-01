import './App.css'
import Home from "./components/Home";
import NavBar from './components/NavBar'
import Homedetails from './components/Homedetails';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Portofolio from './components/Portofolio';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from './components/Layout';



function App() {

  const router = createBrowserRouter([ 
  
    {
      path : "",
      element : <Layout/>,
      children : [
        {
          path : "/home",
          element : <Home/>
        },
        {
          path : "/about",
          element : <About/>
        },
        {
          path : "/portofolio",
          element : <Portofolio/>
        },
        {
          path : "/contact",
          element : <Contact/>
        },
      ]
    }
  
  ]);
  return (
    <div>

    
    <RouterProvider router={router}/>
    
    </div>
  )
}

export default App

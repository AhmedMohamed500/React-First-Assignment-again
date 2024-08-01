import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Homedetails from "./Homedetails"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div>

      <NavBar/>

      <Outlet/>

      <Homedetails/>
      <Footer/>
    </div>
  )
}

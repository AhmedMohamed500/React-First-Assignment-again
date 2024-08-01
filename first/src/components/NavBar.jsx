
import {NavLink} from "react-router-dom"

export default function NavBar() {
    return (
        
        <div>
            <ul className="bg-indigo-950 font-bold flex justify-around items-center p-4 fixed top-0 left-0 right-0 	">
            <NavLink to={'/home'} className="text-white">START FRAMEWORK</NavLink>

            <li>
            <NavLink to={'/about'} className="text-white">About</NavLink>
            </li>
            <li>
                <NavLink to={'/portofolio'} className="text-white">Portofolio</NavLink>
            </li>
            <li>
                <NavLink to={'/contact'} className="text-white">Contact</NavLink>
            </li>
        </ul>

        </div>
    )
}

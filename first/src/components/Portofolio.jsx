import NavBar from "./NavBar"
import homepic from "../assets/images/poert1.png";
import cakeimg from "../assets/images/cake.png";
import shopimg from "../assets/images/shop.png"


export default function Portofolio() {
    
    return (
    <div>
        <NavBar/>
        <h1 className="text-blue-950 text-center font-bold mt-24 mb-4 text-4xl">PORTOFOLIO COMPONENT</h1>
        <div className="icon text-2xl text-center">
        <i class="fa-solid fa-grip-lines  me-3 text-blue-950"></i>
        <i class="fa-solid fa-star  text-center text-blue-950"></i>
        <i class="fa-solid fa-grip-lines  ms-3 text-blue-950"></i>

        <div className="cards flex justify-around mt-16 p-1">
            <div className="card w-3/12	 ">
                <img src={homepic} alt="home" className="rounded-lg" />
            </div>

            <div className="card w-3/12	">
                <img src={cakeimg} alt="home" className="rounded-lg" />
            </div>

            <div className="card w-3/12 ">
                <img src={shopimg} alt="home" className="rounded-lg" />
            </div>

            
        </div>

        <div className="cards flex justify-around mt-16 p-1">
            <div className="card w-3/12	 ">
                <img src={homepic} alt="home" className="rounded-lg" />
            </div>

            <div className="card w-3/12	">
                <img src={cakeimg} alt="home" className="rounded-lg"/>
            </div>

            <div className="card w-3/12 ">
                <img src={shopimg} alt="home" className="rounded-lg" />
            </div>

            
        </div>
        </div>


        

    </div>
    )
}

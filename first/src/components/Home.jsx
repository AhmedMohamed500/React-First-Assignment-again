import avatarImg from "../assets/images/avataaars.svg";



export default function Home() {
  return (
    <div className="hello p-14">
      
        <img className="w-52	mx-auto mt-14	 " src={avatarImg} alt="avatar" />
        <h2 className="text-white text-4xl font-bold text-center m-3">START FRAMEWORK</h2>
        <div className="icon text-2xl text-center">
        <i class="fa-solid fa-grip-lines text-white me-3"></i>
        <i class="fa-solid fa-star text-white text-center"></i>
        <i class="fa-solid fa-grip-lines text-white ms-3"></i>
        </div>
        <p className="text-white text-center p-2">Graphic Artist - Web Designer - Illustrator</p>

      
    
    </div> 
  )
}
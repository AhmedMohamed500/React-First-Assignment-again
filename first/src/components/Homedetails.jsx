
export default function Homedetails() {
  return (
    <div className="bg-indigo-900 w-full flex mt-0 justify-around text-center font-bold items-center p-3 min-h-60">
        <div className="item">
            <h2 className="text-3xl">LOCATION</h2>
            <p>2215 John Daniel DriveClark, MO 65243</p>
        </div>
        
        <div className="item">
            <h2 className="text-3xl">AROUND THE WEB</h2>
            <i class="fa-brands fa-facebook p-2 text-2xl"></i>
            <i class="fa-brands fa-twitter p-2 text-2xl"></i>
            <i class="fa-brands fa-linkedin p-2 text-2xl"></i>
            <i class="fa-solid fa-globe p-2 text-2xl"></i>
        </div>

        <div className="item">
            <h2 className="text-3xl">ABOUT FREELANCER</h2>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
    </div>
  )
}

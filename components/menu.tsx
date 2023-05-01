import Link from "next/link";

const menuList = ["Chat", "Image"];

function Menu () {
    return (
        <div className="navbar bg-base-300 rounded-box">
  <div className="flex-1 px-2 lg:flex-none">
    <a className="text-lg font-bold">IMLAB</a>
  </div> 
  <div className="flex justify-end flex-1 px-2">
    {menuList.map((item) => {

        if (item ==="Chat") {
            return(
                <div key={item} className="flex items-stretch">
                    <Link href="/Chat">
                        <p className="btn btn-ghost rounded-btn">{item}</p>
                    </Link>
                
                </div>
            )
        }

        if (item === "Image") {
            return (
                <div key={item} className="flex items-stretch">
                <Link href="/img">
                    <p className="btn btn-ghost rounded-btn">{item}</p>
                </Link>
            
            </div>
            )
        }
        
    })}

  </div>
</div>
    )
}

export default Menu;
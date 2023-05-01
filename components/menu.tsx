import Link from "next/link";

const menuList = ["Chat", "Image"];

function Menu () {
    return (
        <div>
            {menuList.map((item) => {
                if (item === "Chat") {
                    return (
                        <div key={item}>
                         <ul className="menu bg-base-100 w-56 rounded-box">
                       
                            <Link href={"/chat"}>
                            <li><a>{item}</a></li></Link>
                        
                        {/* <li className="hover-bordered"><a>Hover me</a></li> */}
                      </ul>
                      </div>
                    )
                }

                if (item === "Image") {
                    return (
                        <div key={item}>
                         <ul className="menu bg-base-100 w-56 rounded-box">
                            <Link href={"/img"}>
                            <li><a>{item}</a></li></Link>
                        {/* <li className="hover-bordered"><a>Hover me</a></li> */}
                      </ul>
                      </div>
                    )
                }
             
            })}
        </div>
   
    )
}

export default Menu;
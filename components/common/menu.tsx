import Image from "next/image";
import Link from "next/link";
import logo from '../../public/logo.png';

// Menu Component
// const menuList = ["Chat", "Image", "Edit", "Song","S-R"];
const menuList = ["Chat", "Image", "Edit"];

// className="text-lg font-bold btn"
function Menu () {
    
    return (
        <div className="navbar bg-base-300 rounded-box">
            <div className="flex-1 px-2 lg:flex-none">
                <Link href="/">
                    <Image src={logo} alt="logo" width={50} height={50} />
                </Link>
                
            </div> 
            <div className="flex justify-end flex-1 px-2">
                
            {menuList.map((item) => {
                if (item ==="Chat") {
                    return(
                        <div key={item} className="flex items-stretch">
                            <Link className="btn btn-ghost rounded-btn" href={"/chat"}>{item}</Link>
                        </div>
                    )
                }

                if (item === "Image") {
                    return (
                        <div key={item} className="flex items-stretch">
                            <Link className="btn btn-ghost rounded-btn" href={"/generate"}>{item}</Link>
                        </div>
                    )
                }

                // if ( item === "Song" )
                // {
                //     return (
                //         <div key={item} className="flex items-stretch">
                //             <Link className="btn btn-ghost rounded-btn" href={"/song"}>{item}</Link>
                //         </div>
                //     )
                // }

                // if (item ==="S-R") {
                //     return (
                //         <div key={item} className="flex items-stretch">
                //             <Link className="btn btn-ghost rounded-btn"  href={"/resolution"}>{item}</Link>
                //         </div>
                //     )
                // }
            })}
        </div>
    </div>
    )
}

export default Menu;
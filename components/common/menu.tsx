import Image from "next/image";
import logo from '../../public/logo.png';
import Link from "next/link";
import { useRouter } from "next/router";

// Menu Component
const menuList = ["Chat", "Image", "Edit", "S-R"];
// className="text-lg font-bold btn"
function Menu () {
    const router = useRouter()
    
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
                            <Link className="btn btn-ghost rounded-btn" onClick={() => router.reload()} href={"/chat"}>{item}</Link>
                        </div>
                    )
                }

                if (item === "Image") {
                    return (
                        <div key={item} className="flex items-stretch">
                            <Link className="btn btn-ghost rounded-btn" onClick={() => router.reload()} href={"/generate"}>{item}</Link>
                        </div>
                    )
                }

                if (item ==="S-R") {
                    return (
                        <div key={item} className="flex items-stretch">
                            <Link className="btn btn-ghost rounded-btn" onClick={() => router.reload()} href={"/resolution"}>{item}</Link>
                        </div>
                    )
                }
            })}
        </div>
    </div>
    )
}

export default Menu;
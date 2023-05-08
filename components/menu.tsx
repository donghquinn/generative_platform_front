import { useRouter } from "next/router";

const menuList = ["Chat", "Image", "Edit"];

function Menu () {
    const router = useRouter();

    return (
        <div className="navbar bg-base-300 rounded-box">
            <div className="flex-1 px-2 lg:flex-none">
                <a className="text-lg font-bold btn" onClick={() =>  router.push("/")}>IMLAB</a>
            </div> 
        <div className="flex justify-end flex-1 px-2">
            {menuList.map((item) => {
                if (item ==="Chat") {
                    return(
                        <div key={item} className="flex items-stretch">
                                <a className="btn btn-ghost rounded-btn" onClick={() => {router.push("/chat")}}>{item}</a>
                        </div>
                    )
                }

                if (item === "Image") {
                    return (
                        <div key={item} className="flex items-stretch">
                            <a className="btn btn-ghost rounded-btn" onClick={() => router.push("/generate")}>{item}</a>
                        </div>
                    )
                }

                if (item ==="Edit") {
                    return (
                        <div key={item} className="flex items-stretch">
                            <a className="btn btn-ghost rounded-btn" onClick={() => router.push("/edit")}>{item}</a>
                        </div>
                    )
                }
            })}
        </div>
    </div>
    )
}

export default Menu;
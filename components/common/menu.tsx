import Image from "next/image";
import Link from "next/link";
import logo from '../../public/logo.png';
import { Divider } from "@mantine/core";

// Menu Component
// const menuList = ["Chat", "Image", "Edit", "Song","S-R"];
const menuList = [
    { name: "Chat", link: "/chat" },
    { name: "Image", link: "/generate" },
    // { name: "Edit", link: "/edit" }
];

// className="text-lg font-bold btn"
function Menu () {
    
    return (
  <header className="flex flex-col sm:flex-row justify-between items-center" style={{ backgroundColor: 'white' }}>
    <div className="navbar-start relative" style={{ marginLeft: '5%' }}>
      <div className="flex flex-row flex-start cursor-pointer transform hover:scale-102 m-3">
        <Link href={'/'}>
          <Image src={logo} alt="logo" height={65} width={65}></Image>
        </Link>
        <Link href={'/'}>
          <p className="text-3xl normal-case font-extrabold ml-3" style={{ color: 'white', marginTop: '10%' }}>
            Scraper
          </p>
        </Link>
      </div>
    </div>

    <div className="flex flex-grow justify-evenly max-w-sm" style={{ marginRight: '8%' }}>
      <div className="flex flex-col items-start group ">
        <h1 className="text-ml ml-2" style={{ color: 'black', fontSize: '160%', fontWeight:"bold" }}>
          Scraped Categories
        </h1>
        <div className="flex flex-row">
          {menuList.map((item) => {
            return (
              <div key={item.name}>
                <Link className="transform" href={item.link}>
                  <p
                    className="m-2 cursor-pointer"
                    style={{
                      color: 'black',
                    }}
                  >
                    {item.name}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
                </div>
            </div>
  </header>
    )
}

export default Menu;
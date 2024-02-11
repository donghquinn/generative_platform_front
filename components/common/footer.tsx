import Link from 'next/link';
import github from '../../public/github-mark.png';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="footer p-10 bg text-content">
            <div className="flex flex-col space-y-2 px-2">
                <div className="flex justify-center">
          <Link href="https://github.com/donghquinn/generative_platform_front"
            style={{ marginRight: "1%", marginBottom: "1%" }}
          >
            <Image width={'30'} height="20" alt="github" src={github}/>
        </Link>
        <p style={{color: "black"}}>
          donghquinn
          <br />
        </p>
        </div>
        </div>
            <div className="flex flex-col space-y-2 px-2">
              <div className="flex justify-center">
                <span className="footer-title" style={{color: "black"}}>Contact</span>
                <p style={{color: "black"}}>ehdgus1524@gmail.com</p>
              </div>
          </div>
    </footer>
  );
}

export default Footer;

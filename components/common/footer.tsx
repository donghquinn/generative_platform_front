import Link from 'next/link';
import github from '../../public/github-mark.png';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="footer p-10 bg text-content">
      <div>
        <Link href="https://github.com/donghquinn">
          <Image width={'30'} height="20" alt="github" src={github}>
          </Image>
        </Link>
        <p style={{color: "black"}}>
          donghquinn
          <br />
        </p>
      </div>
      <div>
        <span className="footer-title" style={{color: "black"}}>Contact</span>
        <p style={{color: "black"}}>ehdgus1524@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;

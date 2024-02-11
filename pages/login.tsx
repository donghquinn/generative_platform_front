import { useRecoilState } from "recoil";
import LoginComponent from "../components/user/login";
import { signinUserUuidRecoil } from "../src/recoil/login.recoil";
import { useRouter } from "next/router";


const LoginHome = () =>
{
    const [ uuid, setUuid ] = useRecoilState( signinUserUuidRecoil );
    const router = useRouter();
    
    if ( uuid.length > 5 )
    {
        alert( "You are already Logined. Ignore." );
        router.push( "/mypage" );
    }

    return (
        <div className="flex flex-col space-y-2 px-2 mt-5">
            <div className="flex justify-center">
                <LoginComponent></LoginComponent>
            </div>
        </div>
    )
};

export default LoginHome;
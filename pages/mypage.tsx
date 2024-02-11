import { useRecoilState } from "recoil";
import { signinUserEmailRecoil, signinUserUuidRecoil } from "../src/recoil/login.recoil";
import { getMyPageInfo } from "../src/user/mypage.lib";
import { useRouter } from "next/router";
import { use, useState } from "react";
import { MyPageDataResAccount, MyPageDataResAccountTransaction } from "../src/types/user.type";

const MyPageHome = () =>
{
    const [ uuid, setUuid ] = useRecoilState( signinUserUuidRecoil );
    const [ resCode, setResCode ] = useState( "200" );
  const [ globalEmail, setGlobalEmail ] = useRecoilState( signinUserEmailRecoil );

    const [ address, setAddress ] = useState( "" );
    const [ networkInfo, setNetworkInfo ] = useState( "" );
    const [ name, setName ] = useState( "" );
    const [ profileImage, setProfileImage ] = useState("");

    const [ accountInfo, setAccount ] = useState<MyPageDataResAccount>();
    const [ txInfo, setTx ] = useState<MyPageDataResAccountTransaction>();

    const router = useRouter();
    
    const requestMyPage = async () => {
        const response = await getMyPageInfo( globalEmail );

        setResCode( response.resCode );

        if ( resCode !== "200" ) {
            alert( "Failed to load my page info" );

        }
    }

    if ( uuid.length < 1 )
    {
        alert( "Login First Please." )
        router.push( "/login" );
    }
}
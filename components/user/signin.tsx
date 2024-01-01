import { useState } from "react";
import { signinRequest } from "../../src/user/signin.lib";
import { signinUserUuidZustand } from "../../src/recoil/signin.recoil";

// Not Completed Components
function SignIn ()
{
    const [ email, setEmail ] = useState<string>();
    const [ password, setPassword ] = useState<string>();

    // const { userUuid, setUserUuid } = signinUserUuidZustand();

    const onClick = async () =>
    {
        const uuid = await signinRequest( email, password );

        // setUserUuid( uuid );
    }
}

export default SignIn;
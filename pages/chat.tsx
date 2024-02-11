import { Alert, Select } from "@mantine/core";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { signinUserUuidRecoil } from "../src/recoil/login.recoil";

// Chat page
function Chat ()
{
    const [ uuid, setUuid ] = useRecoilState( signinUserUuidRecoil );

    const [model, setModel] = useState<string>();
    if ( uuid.length < 1 )
    {
        return (
            <div>
                <Alert variant="light" color="red" title="Alert title">
                    Generate Chat Error. Please Login First.
                </Alert>
                <Link href="/login">Confirm</Link>
            </div>
        )
    } else
    {
    const SendChat = dynamic( () => import( "../components/chat/chat" ) );
    
    // const modelArray = ["gpt-4", "gpt-4-0314", "gpt-4-32k", "gpt-4-32k-0314", "gpt-3.5-turbo", "gpt-3.5-turbo-0301"];
    const modelArray = ["gpt-3.5-turbo"];

    // const [showDropdown, setShowDropDown] = useState(false);


    return (
        <div>
        <div className="flex flex-col space-y-2 px-2">
        <div className="flex justify-center">
            <div className="dropdown" style={{marginBottom: "5%", marginTop:"5%"}}>
                <h1 style={{fontSize: "150%"}}>Select Models</h1>
                    <Select
                        label="Select Model"
                        placeholder="Select Model"
                        data={modelArray}
                        onChange={setModel}
                    ></Select>
            </div>

            </div>
          
                <SendChat model={model}></SendChat>
                
            </div>
        </div>
    )
    }

   
}

export default Chat;
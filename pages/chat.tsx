import { Select } from "@mantine/core";
import dynamic from "next/dynamic";
import { useState } from "react";

// Chat page
function Chat ()
{
        console.log( "Start Chat Page" );
    const SendChat = dynamic( () => import( "../components/chat/chat" ) );
    
    // const modelArray = ["gpt-4", "gpt-4-0314", "gpt-4-32k", "gpt-4-32k-0314", "gpt-3.5-turbo", "gpt-3.5-turbo-0301"];
    const modelArray = ["gpt-3.5-turbo"];

    // const [showDropdown, setShowDropDown] = useState(false);

    const [model, setModel] = useState<string>();
    const [ment, setMent] = useState("Select Model");

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

export default Chat;
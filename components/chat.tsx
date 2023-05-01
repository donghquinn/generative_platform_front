import { useEffect, useState } from "react";
import { chatRequest } from "../src/chat.lib";

function Chat() {
    const url = process.env.NEXT_PUBLIC_CHAT_URL;
    const [response, setResponse] = useState<string | string[]>();

    // const [model, setModel] = useState("")


    const requestChatCompletetion = async() => {
        const response = await chatRequest("gpt-3.5-turbo", message );

        if (response.resCode === "200") {
            setResponse(response.dataRes);
        }
    };

    useEffect(() => {
        requestChatCompletetion();
    }, []);
    
    return (
        <div>
            {response.map((item) => {
                return(
                    <div></div>
                )
            })}
        </div>
    )
}
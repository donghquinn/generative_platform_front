import { useEffect, useState } from "react";
import { chatRequest } from "../src/chat.lib";
import ChatBubble from "./bubble";

function SendChat({model}) {
    const [sent, setSent] = useState(false);
    const [success, setSuccess] = useState(false);
    const [prompt, setPrompt] = useState();

    const request = async() => {
        setSent(true);
        const response = await chatRequest(model, prompt);

        if (response.resCode === "200") {
            setSuccess(true)
        }
    }

    const onChange = (e) => setPrompt(e.target.value);


 
    if (sent === true) {
        return (
            <button className="btn loading">Waiting For chatGPT</button>
        )
    }

    if (success) {
        <ChatBubble message={prompt}></ChatBubble>
    }

    return(
        <div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={onChange}/>
            <button className="btn" style={{marginLeft: "2%"}} onClick={(event) => {request()}}>확인</button>
        </div>
    )

}

export default SendChat;
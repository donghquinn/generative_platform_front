import { useState } from "react";
import { chatRequest } from "../src/chat.lib";
import ChatBubble from "./bubble";
import { useRecoilState } from "recoil";
import { requestSuccess, responseRecoil } from "../src/chat.recoil";

function SendChat({model}) {
    const [sent, setSent] = useState(false);
    const [success, setSuccess] = useRecoilState(requestSuccess);
    const [prompt, setPrompt] = useState();
    const [ response, setResponse] = useRecoilState(responseRecoil);

    

    const request = async() => {
        setSent(true);

        const response = await chatRequest(model, prompt);

        if (response.resCode === "200") {
            setSuccess(true)
            setResponse(response.dataRes);
        }
    }

    const onChange = (e) => setPrompt(e.target.value);


 
    if (sent === true) {
        return (
            <button className="btn loading">Waiting For chatGPT</button>
        )
    }

    return(
        <div>
            <div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={onChange}/>
                <button className="btn" style={{marginTop: "2%"}} onClick={(event) => {request()}}>보내기</button>
            </div>
            <div>
                <ChatBubble message={prompt} response={response} success={success}></ChatBubble>
            </div>
        </div>
    )

    
}

export default SendChat;
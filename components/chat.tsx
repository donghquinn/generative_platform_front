import { useState } from "react";
import { useRecoilState } from "recoil";
import { chatRequest } from "../src/chat.lib";
import { errMsgRecoil, requestSuccess, responseRecoil } from "../src/chat.recoil";
import ChatBubble from "./bubble";
import ErrorBubble from "./error/bubble.error";

function SendChat({model}) {
    const [sent, setSent] = useState(false);
    const [success, setSuccess] = useRecoilState(requestSuccess);

    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useRecoilState(responseRecoil);

    const [ errors, setErrors ] = useState(false);
    const [errMsg, setErrmsg] = useRecoilState(errMsgRecoil);
    

    const request = async() => {
        setSent(true);

        const response = await chatRequest(model, prompt);

        console.log(response.resCode);
        // console.log(response.dataRes[0].response);

        if (response.resCode === "200") {
            setSuccess(true);
            setSent(false);
            setResponse(response.dataRes.result);
          
            setErrors(false);
        } 
        
        if (response.resCode === "500") {
            setSuccess(false);
            setSent(false);
            setErrmsg(response.errMsg);
       
            setErrors(true);
        }
    }

    const onChange = (e) => setPrompt(e.target.value);


    if (sent) {
        return (
            <div>
                <button className="btn loading">Waiting For chatGPT</button>
            </div>
        )
    };

    if (errors) {
        return(
            <div>
            <div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={onChange}/>
                <button className="btn" style={{marginTop: "2%"}} onClick={(event) => {request()}}>보내기</button>
            </div>
            <div>
                <ErrorBubble message={prompt} errMsg={errMsg} ></ErrorBubble>
            </div>
        </div>
        )
    };


        return (
            <div>
                <div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={onChange}/>
                    <button className="btn" style={{marginTop: "2%"}} onClick={(event) => {request()}}>보내기</button>
                </div>
                <div style={{marginTop: "5%"}}>
                    <ChatBubble message={prompt} response={response}></ChatBubble>
                </div>
            </div>
        )
 
   
}

export default SendChat;
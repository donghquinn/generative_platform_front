import { useState } from "react";
import { useRecoilState } from "recoil";
import { chatRequest } from "../../src/chat/chat.lib";
import { errMsgRecoil, requestSuccess, responseRecoil } from "../../src/chat/chat.recoil";
import ChatBubble from "./bubble";
import ErrorBubble from "../error/bubble.error";

function SendChat({model}) {
    const [sent, setSent] = useState(false);
    const [success, setSuccess] = useRecoilState(requestSuccess);

    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useRecoilState(responseRecoil);

    const [ errors, setErrors ] = useState(false);
    const [errMsg, setErrmsg] = useRecoilState(errMsgRecoil);
    

    const request = async() => {
        setSent(true);

        const response = await chatRequest(model, prompt, "1");

        if (response.resCode === "200") {
            setSuccess(true);
            setSent(false);
            setResponse(response.dataRes.result);
          
            setErrors(false);
        } 

        // if ( response.resCode === "429" )
        // {
        //     setErrors( true );
        //     setSuccess( false );
        // }
        
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
                <div className="flex flex-col space-y-2 px-2">
                    <div className="flex justify-center">
                        <button className="btn loading">Waiting For chatGPT</button>
                    </div>
                </div>
            </div>
        )
    };

    if (errors) {
        return(
            <div>
            {/* <div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={onChange}/>
                <button className="btn" onClick={(event) => {request()}}>보내기</button>
            </div> */}
                <div className="flex flex-col space-y-2 px-2">
                    <div className="flex justify-center">
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={onChange}/>
                        <button className="btn"style={{marginLeft: "2%"}} onClick={(event) => {request()}}>보내기</button>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 px-2">
                    <div className="flex justify-center">
                        <ErrorBubble message={prompt} errMsg={errMsg} ></ErrorBubble>
                </div>
            </div>
        </div>
        )
    };


        return (
            <div>
                <div className="flex flex-col space-y-2 px-2">
                    <div className="flex justify-center">
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={onChange}/>
                        <button className="btn"style={{marginLeft: "2%"}} onClick={(event) => {request()}}>보내기</button>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 px-2" style={{marginTop: "3%"}}>
                    <div className="flex justify-center">
                        <ChatBubble message={prompt} response={response}></ChatBubble>
                    </div>
                </div>
            </div>
        )
}

export default SendChat;
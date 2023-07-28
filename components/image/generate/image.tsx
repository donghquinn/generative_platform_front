import { useState } from "react";
import { useRecoilState } from "recoil";
import { requestImg } from "../../../src/image/image.lib";
import { imageErrMsgRecoil, imageRequestSuccess, imageResponseRecoil } from "../../../src/image/image.recoil";
import ErrorBubble from "../../error/bubble.error";
import ImageBubble from "./imgbubble";

// Send Image request and shows the response
function SendImage({size, imgNumber}) {
    const [sent, setSent] = useState(false);
    const [success, setSuccess] = useRecoilState(imageRequestSuccess);

    // const [size, setSize] = useRecoilState(imageSizeRecoil);
    
    const [prompt, setPrompt] = useState("");
    // const [imgNumber, setNumber] = useState("1");
    // const [imgNumber, setNumber] = useRecoilState(imageNumberRecoil);

    const [response, setResponse] = useRecoilState(imageResponseRecoil);

    const [ errors, setErrors ] = useState(false);
    const [errMsg, setErrmsg] = useRecoilState(imageErrMsgRecoil);
    
    const request = async() => {
        setSent(true);
        // Request Image Generate
        const imageResponse = await requestImg(prompt, imgNumber, size);

        console.log(imageResponse.resCode);
        // console.log(response.dataRes[0].response);

        if (imageResponse.resCode === "200") {
            setSuccess(true);
            setSent(false);
            setResponse(imageResponse.dataRes.result);
          
            setErrors(false);
        } 
   
        // Error Handling
        if (imageResponse.resCode === "500") {
            setSuccess(false);
            setSent(false);
            setErrmsg(imageResponse.errMsg);
       
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

    // Error Handling
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
                <div className="flex flex-col space-y-2 px-2">
                    <div className="flex justify-center">
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={onChange}/>
                    <button className="btn" style={{marginLeft: "2%"}} onClick={(event) => {request()}}>보내기</button>
                    </div></div>
                </div>
                <div style={{marginTop: "5%"}}>
                    <ImageBubble message={prompt} response={response}></ImageBubble>
                </div>
            </div>
        )
 
}

export default SendImage;
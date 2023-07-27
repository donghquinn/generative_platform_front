import { useState } from "react";
import { useRecoilState } from "recoil";
import { ImageReseponse, editImage, requestEdit } from "../../../src/image/image.lib";
import { imageEditFile, imageErrMsgRecoil, imageRequestSuccess, imageResponseRecoil, imageUpload } from "../../../src/image/image.recoil";
import EditBubble from "./edit.bubble";
import ErrorBubble from "../../error/bubble.error";

// Not Completed Component
function EditImage({size, imgNumber}) {
    const [sent, setSent] = useState(false);
    const [success, setSuccess] = useRecoilState(imageRequestSuccess);

    // const [size, setSize] = useRecoilState(imageSizeRecoil);
    
    const [prompt, setPrompt] = useState("");
    // const [imgNumber, setNumber] = useState("1");
    // const [imgNumber, setNumber] = useRecoilState(imageNumberRecoil);

    const [ errors, setErrors ] = useState(false);
    const [errMsg, setErrmsg] = useRecoilState(imageErrMsgRecoil);

  const [response, setResponse] = useRecoilState(imageResponseRecoil);

  const [selectedImage, setSelectedImage] = useRecoilState(imageUpload);



  const handleImageEdit = async () => {
    setSent(true);

        // const response = await editImage(selectedImage, prompt, imgNumber, size);
    
  
    // const response = await requestEdit();
  
        // if (response.resCode === "200") {
        //     setSuccess(true);
        //     setSent(false);
        //     setResponse(response.dataRes.result);
          
        //     setErrors(false);
        // } 
   
        // if (response.resCode === "500") {
        //     setSuccess(false);
        //     setSent(false);
        //     setErrmsg(response.errMsg);
       
        //     setErrors(true);
        // }
      
      console.log(response);
  };


    // const request = async() => {
    //     setSent(true);

    //     const imageResponse = await requestImg(prompt,imgNumber, size);

    //     console.log(imageResponse.resCode);
    //     // console.log(response.dataRes[0].response);

      
    // }

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
                <button className="btn" style={{marginTop: "2%"}} onClick={(event) => {handleImageEdit()}}>보내기</button>
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
                            <button type="submit" className="btn" style={{marginLeft: "2%"}} onClick={(event) => {handleImageEdit()}}>보내기</button>
                        </div>
                    </div>
                </div>
                <div style={{marginTop: "5%"}}>
                    <EditBubble selectedImage={selectedImage} message={prompt} response={response}></EditBubble>
                </div>
            </div>
        )
 
}

export default EditImage;
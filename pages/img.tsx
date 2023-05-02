import { useState } from "react";
import SendImage from "../components/image";

function Image() {


 // const modelArray = ["gpt-4", "gpt-4-0314", "gpt-4-32k", "gpt-4-32k-0314", "gpt-3.5-turbo", "gpt-3.5-turbo-0301"];
 const sizeArray = ["256x256", "512x512", "1024x1024"];
 const imgNumberArray = ["1", "2", "3","4", "5", "6", "7", "8", "9", "10"];
 // const [showDropdown, setShowDropDown] = useState(false);

 const [size, setSize] = useState<string>();
 const [ment, setMent] = useState("Select Model")

 const [imgNumber, setNumber] = useState("1");
 const [imgMent, setImgMent] = useState("Select Number");

 return (
     <div>
     <div className="flex flex-col space-y-2 px-2">
     <div className="flex justify-center">
         <div className="dropdown" style={{marginBottom: "5%", marginTop:"5%"}}>
             <h1 style={{fontSize: "150%"}}>Select Size</h1>
             <label tabIndex={0} className="btn m-1">
                 {ment}
             </label>
             <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                 {sizeArray.map((item) => {
                     return (
                         <div key={item}>
                             <li onClick={(event) => { 
                                 setSize(item)
                                 setMent(item)
                                 
                                 }}>
                             <a>{item}</a></li>
                         </div>
                     )
                 })}
             </ul>
         </div>

         <div className="dropdown" style={{marginBottom: "5%", marginTop:"5%"}}>
             <h1 style={{fontSize: "150%"}}>Select Number of Images</h1>
             <label tabIndex={0} className="btn m-1">
                 {imgMent}
             </label>
             <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                 {imgNumberArray.map((item) => {
                     return (
                         <div key={item}>
                             <li onClick={(event) => { 
                                 setSize(item)
                                 setImgMent(item)
                                 }}>
                             <a>{item}</a></li>
                         </div>
                     )
                 })}
             </ul>
         </div>

         </div>
             <div className="flex flex-col space-y-2 px-2">
                 <div className="flex justify-center">
                     <SendImage size={size} imgNumber={imgNumber}></SendImage>
                 </div>
             </div>
         </div>
     </div>
    )
}

export default Image;
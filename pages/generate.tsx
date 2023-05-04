import { useState } from "react";
import SendImage from "../components/image";
import { Sizes } from "../src/image.type";

function Img() {
 // const modelArray = ["gpt-4", "gpt-4-0314", "gpt-4-32k", "gpt-4-32k-0314", "gpt-3.5-turbo", "gpt-3.5-turbo-0301"];
 const sizeArray: Array<Sizes> = ["256x256", "512x512", "1024x1024"];
 const imgNumberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
 // const [showDropdown, setShowDropDown] = useState(false);

 const [size, setSize] = useState("256x256");
 const [ment, setMent] = useState("Select Size");

 const [imgNumber, setNumber] = useState("1");
 const [imgMent, setImgMent] = useState("Select Number");

 return (
     <div>
     <div className="flex flex-col space-y-2 px-2">
     <div className="flex justify-center">
         <div className="dropdown" style={{marginBottom: "1%", marginTop:"5%"}}>
             <h1 style={{fontSize: "150%"}}>Select Size</h1>
             <label tabIndex={0} className="btn m-1">
                 {ment}
             </label>
             <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                 {sizeArray.map((item) => {
                     return (
                         <div key={item}>
                             <li>
                                <a onClick={(event) => { 
                                 setSize(item)
                                 setMent(item)
                                 }}>{item}</a>
                             </li>
                         </div>
                     )
                 })}
             </ul>
         </div>
         </div>
         <div className="flex flex-col space-y-2 px-2">
         <div className="flex justify-center">
         <div className="dropdown" style={{marginBottom: "1%", marginTop:"1%"}}>
             <h1 style={{fontSize: "150%"}}>Select Number of Images</h1>
             <label tabIndex={0} className="btn m-1">
                 {imgMent}
             </label>
             <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                 {imgNumberArray.map((item) => {
                     return (
                         <div key={item}>
                             <li >
                             <a onClick={(event) => { 
                                 setNumber(item)
                                 setImgMent(item)
                                 }}>{item}</a></li>
                         </div>
                     )
                 })}
             </ul>
                </div>
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

export default Img;
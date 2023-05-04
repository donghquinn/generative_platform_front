import { useRef, useState } from "react";
import Image from 'next/image';
import { Sizes } from "../src/image.type";
import { ImageReseponse } from "../src/image.lib";

function ImageUploader() {
    const sizeArray: Array<Sizes> = ["256x256", "512x512", "1024x1024"];

  const [selectedImage, setSelectedImage] = useState(null);

  const imgNumberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  // const [showDropdown, setShowDropDown] = useState(false);
 
  const [size, setSize] = useState("256x256");
  const [ment, setMent] = useState("Select Size");
 
  const [imgNumber, setNumber] = useState("1");
  const [imgMent, setImgMent] = useState("Select Number");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setSelectedImage(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleImageEdit = async () => {

        const url = process.env.NEXT_PUBLIC_IMAGE_URL;

        const options = {
            headers: {
                "Content-Type": "application/json", 
                key: process.env.NEXT_PUBLIC_KEY!
            },
            method: "POST",
            body: JSON.stringify({
                image: selectedImage,
                prompt,
                number: imgNumber,
                size,
            })
        };
    
        const response = await (await fetch(url, options)).json() as ImageReseponse;
    
      
      console.log(response);
  };

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
      <input type="file" onChange={handleImageUpload} />
      {selectedImage && (
        <>
          <div>
            <Image src={selectedImage} alt="Selected Image" width={300} height={300} />
          </div>
          <button onClick={handleImageEdit}>Edit Image</button>
        </>
      )}
      </div>
      </div>
   </div>
  );
}

export default ImageUploader;
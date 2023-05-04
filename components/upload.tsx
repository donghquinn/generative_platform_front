import { useState } from "react";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { imageEditFile } from "../src/image.recoil";

function UploadImage() {
    const [selectedImage, setSelectedImage] = useState(null);
    
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setSelectedImage(event.target.result);
    };

    reader.readAsDataURL(file);
  };

    return(
        <div>
            <input type="file" onChange={handleImageUpload} />
      
      {selectedImage && (
        <>
          <div>
          {/* <EditImage selectedImage={selectedImage} imgNumber={imgNumber} size={size}></EditImage> */}
            </div>
            <Image src={selectedImage} alt="Selected Image" width={300} height={300} /> 


        </>
      )}
        </div>
    )
}

export default UploadImage;
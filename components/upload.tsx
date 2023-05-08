import { useState } from "react";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { imageEditFile, imageFileName, imageUpload } from "../src/image.recoil";

function UploadImage() {
    const [selectedImage, setSelectedImage] = useRecoilState(imageUpload);
    const [fileName, setFileName] = useRecoilState(imageFileName);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setSelectedImage(event.target.result);
    };

    reader.readAsDataURL(file);

    setFileName(file.name)

    console.log(file.name)
  };

    return(
        <div>
          <input type="file" onChange={handleImageUpload} />
          {selectedImage && (
            <>
              <div>
              {/* <EditImage selectedImage={selectedImage} imgNumber={imgNumber} size={size}></EditImage> */}
                <Image src={selectedImage} alt="Selected Image" width={300} height={300} />
              </div>
        </>
      )}
        </div>
    );
}

export default UploadImage;
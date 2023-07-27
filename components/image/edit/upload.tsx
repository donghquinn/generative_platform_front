import { useState } from "react";
import { requestEdit } from "../../../src/image/image.lib";
import Image from "next/image";

// Not Completed Component. Purposed to upload image file to make variations 
/**
 * https://falsy.me/nextjs-api-routes%EB%A5%BC-%ED%86%B5%ED%95%B4-api-%EC%84%9C%EB%B2%84%EB%A1%9C-%ED%8C%8C%EC%9D%BC-%EB%B3%B4%EB%82%B4%EA%B8%B0/
 * @returns 
 */
function UploadImage ()
{
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL( URL.createObjectURL( i ) );
    
      console.log( URL.createObjectURL( i ) );
    }
  };

  const uploadFile = async (  ) =>
  {
    const formData = new FormData();

    formData.append( 'image', createObjectURL.current );

    const response = await requestEdit( formData, "pudding", "1", "256x256" );

    console.log( "ResCode: %o", { rescode: response.resCode } );

    if (response.resCode === "200") {
      console.log( "Response: %o", { result: response.dataRes.result } );
    } 
    else
    {
      console.log( "Error ResCode: %o", { errorCode:response.resCode, errMsg: response.errMsg } )
    }
  }

  return (
    <div>
      <div>
        {/* <img src={ createObjectURL }></img> */}
        </div>

      <div>
        <form encType="multipart/form-data" id="image">

      <input
        name="image"
        type="file"
          accept="image/png"  
          onChange={uploadToClient}
        />
          <button className="btn" onClick={ uploadFile }>Send</button>
                
   </form>
      </div>
      </div>
  );

  // return (
  //   <div>
  //     <form onSubmit={onSubmit}>
  //       <input type="file" onChange={onChange} />
  //       <input type="submit" value="upload" />
  //     </form>
  //     <progress value={pValue} />
  //   </div>
  //   );
}

export default UploadImage;

//                 <img src={selectedImage} alt="Selected Image" width={300} height={300} />

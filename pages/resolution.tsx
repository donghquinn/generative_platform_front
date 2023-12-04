import { useState } from "react";
import { ImageResUploadResponse } from "../src/types/res.type";
import Image from "next/image";

const SuperResolution = () =>
{
    const [ weight, setWeight ] = useState( "psnr-small" );
    const [ url, setUrl ] = useState( "" );
    const weights = [ "psnr-small", "psnr-large", "gans", "noise-cancel" ]

    const formData = new FormData();

    const upUrl = process.env.NEXT_PUBLIC_RES_UPLOAD_URL!;
    const resUrl = process.env.NEXT_PUBLIC_RES_URL!;

    const requesting = async () =>
    {
        const key = process.env.NEXT_PUBLIC_KEY!;

        const options = {
            method: "POST",
            headers: {
                key,
            },
            body: formData,
        };

        const response = await fetch( upUrl, options );

        const response2 = await response.json() as ImageResUploadResponse;
        
        const { uuid, versionId, uploadedFileName } = response2.dataRes;
            
        console.log( "VersionId: %o", { response: response2.dataRes, } );
        
       
        if ( versionId !== undefined ) {
                const options2 = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                        key,
                },
                body: JSON.stringify({
                    uuid,
                    fileName: uploadedFileName,
                    weights: weight,
                    versionId,
                }),
            }

            const resResult = await ( await fetch( resUrl, options2 ) ).json();
            console.log( resResult );
            setUrl( resResult.dataRes );
            return resResult;
        }
    }
          

    const handleSubmit = async (event) => {
    event.preventDefault();


    formData.append('file', event.target.file.files[0]);

    const response = await requesting();

    // Handle the response from the server
    if (response) {
      console.log('File uploaded successfully');
    } else {
      console.error('File upload failed');
    }
  };

    return (
        <div>
            <ul tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                {weights.map( ( item ) =>
                {
                    return (
                        <div key={item}>
                            <button onClick={() => setWeight(item)}>{item}</button>
                        </div>
                    )
                })}
            </ul>
            <Image src={url} alt="resoluted"></Image>
         <form onSubmit={handleSubmit}>
      <input type="file" name="file" accept="image/*" />
      <button type="submit">Upload Image</button>
    </form>
  </div>
  );
};

export default SuperResolution;
import { useRef, useState } from "react";
import { ImageResUploadResponse } from "../src/types/res.type";
import Image from "next/image";

const SuperResolution = () =>
{    console.log( "Deactivate SR Page" );
    const [ weight, setWeight ] = useState( "psnr-small" );
    const [ url, setUrl ] = useState( "Not Yet" );
    const [ image, setImage ] = useState( "" );
    const fileInput = useRef( null );
    
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
        
        const file = event.target.file.files[ 0 ];

        if ( !file ) return
        
        const reader = new FileReader();

        reader.onload = ( e: any ) =>
        {
            if ( reader.readyState === 2 )
            {
                // 파일 onLoad가 성공하면 2, 진행 중은 1, 실패는 0 반환
                setImage( e.target.result );
            }
        };

    formData.append('file', event.target.file.files[0]);

    const response = await requesting();

    // Handle the response from the server
    if (response) {
      console.log('File uploaded successfully');
    } else {
      console.error('File upload failed');
    }
    };
    
    

    if ( url == "Not Yet" )
    {
        return (
        <div className="flex flex-col space-y-2 px-2">
        <div className="flex justify-center">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <Image src={image}
                    alt="resoluted"
                    width={150}
                    height={150}
                    onClick={() => fileInput.current.click()}/>
                </figure>
            <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
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

            <div className="card-actions justify-end">
                 <form onSubmit={handleSubmit}>
                <input type="file" name="file" accept="image/*" />
                <button type="submit">Upload Image</button>
            </form>
        </div>
    </div>
    </div>
          </div>  
  </div>
  );
    }

    return (
        <div className="flex flex-col space-y-2 px-2">
        <div className="flex justify-center">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <Image src={url} alt="Movie" />
                </figure>
            <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
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
                <div className="card-actions justify-end">
                        <form onSubmit={handleSubmit}>
                        <input type="file" name="file" accept="image/*" />
                        <button type="submit">Upload Image</button>
                    </form>
                </div>
            </div>
        </div>    
    </div>
  </div>
  );
    
};

// export default SuperResolution;
import { useRef, useState } from "react";
import  Image  from 'next/image';
import { ImageResUploadResponse } from "../src/types/res.type";
        
const SuperResolution = () =>
{
    const [ image, setImage ] = useState( '' );
    const [ weight, setWeight ] = useState( "psnr-small" );
    const fileInput = useRef( null );

    const weights = [ "psnr-small", "psnr-large", "gans", "noise-cancel" ]

    const upUrl = process.env.NEXT_PUBLIC_RES_UPLOAD_URL!;
    const resUrl = process.env.NEXT_PUBLIC_RES_URL!;

    const handleImage = async ( e: any ) =>
    {
        // 내가 받을 파일은 하나기 때문에 index 0값의 이미지를 가짐
        const file = e.target.file;
        if ( !file ) return;
    
        // 이미지 화면에 띄우기
        const reader = new FileReader();
          
        // 파일을 불러오는 메서드, 종료되는 시점에 readyState는 Done(2)이 되고 onLoad 시작
        reader.readAsDataURL( file );
        reader.onload = ( e: any ) =>
        {
            if ( reader.readyState === 2 )
            {
                // 파일 onLoad가 성공하면 2, 진행 중은 1, 실패는 0 반환
                setImage( e.target.result );
            }
        };
        const formData = new FormData();

        formData.append( "image", file );

        const options = {
            method: "POST",
            body: formData,
        };

        const { uuid, versionId, uploadedFileName } = await ( await fetch( upUrl, options ) ).json() as ImageResUploadResponse;
        
        const options2 = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                uuid,
                fileName: uploadedFileName,
                weights: weight,
                versionId,
            }),
        }

        const resResult = await (await fetch(resUrl, options2)).json()
    }
          

    return (
        <div>
<ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                {weights.map( ( item ) =>
                {
                    return (
                        <div key={item}>
                            <button onClick={() => setWeight(item)}>{item}</button>
                        </div>
                    )
                })}
            </ul>
    	<a href="#" onClick={() => fileInput.current.click() } >
    		<Image src={image} width={150} height={150} alt="프로필 이미지" />
            </a>
            
            
            <label htmlFor="input-file" >Select the Image</label>
        <input type="file" name="image_URL" id="input-file" accept='image/*'
                style={{ display: "none" }} ref={fileInput} onChange={handleImage} />
    
        </div>
    )
};

export default SuperResolution;
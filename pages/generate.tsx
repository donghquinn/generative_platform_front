import dynamic from "next/dynamic";
import { useState } from "react";
import { Sizes } from "../src/types/image.type";
import { Select } from "@mantine/core";

// Image Generate Page
function Img ()
{
        console.log( "Start Image Page" );
    const SendImage = dynamic( () => import( "../components/image/generate/image" ) );

 // const modelArray = ["gpt-4", "gpt-4-0314", "gpt-4-32k", "gpt-4-32k-0314", "gpt-3.5-turbo", "gpt-3.5-turbo-0301"];
 const sizeArray: Array<Sizes> = ["256x256", "512x512", "1024x1024"];
 const imgNumberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

 const [size, setSize] = useState("256x256");

 const [imgNumber, setNumber] = useState("1");
 
 return (
     <div>
     <div className="flex flex-col space-y-2 px-2">
     <div className="flex justify-center">
         <div className="dropdown" style={{marginBottom: "1%", marginTop:"5%"}}>
             <h1 style={{fontSize: "150%"}}>Select Size</h1>

                    <Select
                            label="Select Size"
                            placeholder="Select Image Size"
                            data={sizeArray}
                            onChange={setSize}
                        ></Select>
         </div>
         </div>
         <div className="flex flex-col space-y-2 px-2">
         <div className="flex justify-center">
         <div className="dropdown" style={{marginBottom: "1%", marginTop:"1%"}}>
             <h1 style={{fontSize: "150%"}}>Select Number of Images</h1>
                <Select
                    label="Select Image Number"
                    placeholder="How many Images"
                    data={imgNumberArray}
                    onChange={setNumber}
                ></Select>
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
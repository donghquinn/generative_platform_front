import Image from "next/image";

function ImageBubble({message, response}) {
    return (
        <div>
            <div className="chat chat-start">
                <div className="chat-bubble">{message}</div>
            </div>
            {response.map((item) => {
                return (
                    <div key={item} className="chat chat-end">
                        <div className="chat-bubble" style={{"whiteSpace": "pre-line"}}>
                            <Image src={item} alt='image'></Image>
                        </div> 
                     </div>
                )   
            })}
        </div>
      )
}

export default ImageBubble;

// <Image alt={"Generated Image"} src={item} width={30} height={30}>{item}</Image>
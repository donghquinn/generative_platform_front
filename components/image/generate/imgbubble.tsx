import {Image} from "@mantine/core";

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
                            <Image radius="md" src={item} alt='image' h={200} w={200}></Image>
                        </div> 
                     </div>
                )   
            })}
        </div>
      )
}

export default ImageBubble;

// <Image alt={"Generated Image"} src={item} width={30} height={30}>{item}</Image>
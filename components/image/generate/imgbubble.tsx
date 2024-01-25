import {Image} from "@mantine/core";

function ImageBubble({message, response}) {
    return (
        <div>
            <div>
                <div className="user chatBubble">{message}</div>
            </div>
            {response.map((item) => {
                return (
                    <div className="bot chatBubble" key={item} style={{"whiteSpace": "pre-line"}}>
                        <Image radius="md" src={item} alt='image' h={200} w={200}></Image>
                    </div> 
                )   
            })}
        </div>
      )
}

export default ImageBubble;

// <Image alt={"Generated Image"} src={item} width={30} height={30}>{item}</Image>
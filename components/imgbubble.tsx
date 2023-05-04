import Link from 'next/link';

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
                            <img src={item} alt='image'></img>                       
                        {/* <Link href={item}>
                            <p>{item}</p>
                        </Link> */}
                        </div> 
                     </div>
                )
            })}
        </div>
      )
}

export default ImageBubble;

// <Image alt={"Generated Image"} src={item} width={30} height={30}>{item}</Image>
import Image from "next/image";

function EditBubble({selectedImage, message, response}) {
    return (
        <div>
             <>
          {/* <div>
            <Image src={selectedImage} alt="Selected Image" width={300} height={300} />
          </div> */}
          </>

            <div className="chat chat-start">
                <div className="chat-bubble">{message}</div>
        
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
        </div>
      )
}

export default EditBubble;
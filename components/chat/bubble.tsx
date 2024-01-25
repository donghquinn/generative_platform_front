function ChatBubble({message, response}) {
    // const [response, setResponse] = useRecoilState(responseRecoil);

      return (
        <div>
                <div className="user chatBubble">{message}</div>
            {response.map((item) => {
                return (

                    <div className="bot chatBubble" key={item}
                        style={{ "whiteSpace": "pre-line" }}>
                        <p>{item}</p>
                    </div>
             
                )
            })}
        </div>
      )
}

export default ChatBubble;
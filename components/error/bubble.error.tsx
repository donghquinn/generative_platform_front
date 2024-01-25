// Error Bubble.
function ErrorBubble({message, errMsg}) {
    return (
      <div>
        <div className="user chatBubble">{message}</div>
          
          {errMsg.map((item) => {
              return (
                <div className="bot errorChat" key={item}
                        style={{ "whiteSpace": "pre-line" }}>
                        <p>{item}</p>
                </div>
              )
          })}
      </div>
    )
}

export default ErrorBubble;
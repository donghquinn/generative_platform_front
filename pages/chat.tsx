import { useState } from "react";
import SendChat from "../components/chat/chat";

// Chat page
function Chat() {
    // const modelArray = ["gpt-4", "gpt-4-0314", "gpt-4-32k", "gpt-4-32k-0314", "gpt-3.5-turbo", "gpt-3.5-turbo-0301"];
    const modelArray = ["gpt-3.5-turbo"];

    // const [showDropdown, setShowDropDown] = useState(false);

    const [model, setModel] = useState<string>();
    const [ment, setMent] = useState("Select Model");

    return (
        <div>
        <div className="flex flex-col space-y-2 px-2">
        <div className="flex justify-center">
            <div className="dropdown" style={{marginBottom: "5%", marginTop:"5%"}}>
                <h1 style={{fontSize: "150%"}}>Select Models</h1>
                <label tabIndex={0} className="btn m-1">
                    {ment}
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    {modelArray.map((item) => {
                        return (
                            <div key={item}>
                                <li >
                                    <a onClick={(event) => { 
                                        setModel(item)
                                        setMent(item)
                                        }}>{item}</a>
                                </li>
                            </div>
                        )
                    })}
                </ul>
            </div>

            </div>
          
                <SendChat model={model}></SendChat>
                
            </div>
        </div>
    )
}

export default Chat;
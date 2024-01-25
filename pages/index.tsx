import { Button } from "@mantine/core";
import Link from "next/link";
import React from "react";

// Main Landing Page
function Home() {
    
    return (
        <div style={{ marginBottom:"13%", marginTop:"13%"}}>
            <div className="flex flex-col space-y-2 px-2">
                <div className="flex justify-center">
                    <h1 style={{fontSize: "200%",  marginBottom:"1%", fontWeight: "bold"}}>Chat With chatGPT</h1>
                </div>
            </div>

            <div className="flex flex-col space-y-2 px-2">
                <div className="flex justify-center">
                    <p>You will use chat-GPT generating Chats or Images</p>
                    <p></p>
                </div>
            </div>
            <div className="flex flex-col space-y-2 px-2">
                <div className="flex justify-center">
                    <Link href={"/chat"}>
                        <Button
                            variant="gradient"
                            gradient={{ from: 'indigo', to: 'orange', deg: 90 }}
                            >Generate Chats</Button>
                    </Link>
                    <Link href={"/generate"}>
                        <Button
                            variant="gradient"
                            gradient={{ from: 'red', to: 'lime', deg: 90 }}
                            style={{marginLeft: "2%"}}
                            >Generate Images</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;
import { useRouter } from 'next/router';
import Chat from './chat';

function Home() {
    const router = useRouter();
    
    return (
        <div>
            <div className="flex flex-col space-y-2 px-2">
                <div className="flex justify-center">
                    <h1 style={{fontSize: "200%", marginTop:"25%", fontWeight: "bold"}}>Chat With chatGPT</h1>
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
                    <button className="btn btn-outline" style={{marginTop: "5%", marginRight: "3%"}} onClick={() => router.push("/chat") }>Generate Chats</button>
                    <button className="btn btn-outline btn-primary"style={{marginTop: "5%", marginLeft: "3%"}} onClick={() =>  router.push("/img")}>Generate Images</button>
                </div>
            </div>
        </div>
    )
}

export default Home;
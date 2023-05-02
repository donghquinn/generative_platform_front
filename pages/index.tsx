import Chat from './chat';

function Home() {
    return (
        <div>
            <div className="flex flex-col space-y-2 px-2">
                <div className="flex justify-center">
                    <h1>Chat With chatGPT</h1>
                </div>
            </div>
            <div>
                <Chat></Chat>
            </div>
        </div>
    )
}

export default Home;
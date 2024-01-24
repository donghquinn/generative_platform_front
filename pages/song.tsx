import { CloseButton, Input, Select } from "@mantine/core";
import dynamic from "next/dynamic";
import { useState } from "react";

// Image Generate Page
function Song () {
    const GenerateSong = dynamic( () => import( "../components/song/generate" ) );

 // const modelArray = ["gpt-4", "gpt-4-0314", "gpt-4-32k", "gpt-4-32k-0314", "gpt-3.5-turbo", "gpt-3.5-turbo-0301"];
    const songList = [ 'Deck the Halls by Cecilia', 'Move your Body by Cecilia', 'Dark Trap by Jerry', 'Happy Birthday by Jerry', 'Levitate by Ed' ];
    const emotionList = [ '행복', "슬픔", "기쁨", "도전", "희망" ];
    
    const [ emotion, setEmotion ] = useState<string>(undefined);
    const [ song, setSong ] = useState<string>( );
    const [ lyric, setLyric ] = useState<string>( undefined );
 
 return (
     <div>
        <div className="flex flex-col space-y-2 px-2">
            <div className="flex justify-center">
                <div className="dropdown" style={{marginBottom: "1%", marginTop:"5%"}}>
                    <h1 style={{fontSize: "150%"}}>Select Size</h1>

                    <Select
                            label="Select Song"
                            placeholder="Select Song"
                            data={songList}
                            onChange={setSong}
                    ></Select>
                </div>
             </div>
             
            <div className="flex flex-col space-y-2 px-2">
                <div className="flex justify-center">
                    <div className="dropdown" style={{marginBottom: "1%", marginTop:"1%"}}>
                        <h1 style={{fontSize: "150%"}}>Select Number of Images</h1>
                        <Select
                        label="Select Emotion"
                        placeholder="Select Emotion"
                        data={emotionList}
                        onChange={setEmotion}
                        ></Select>
                    </div>
                </div>
             </div>
             
            <div className="flex flex-col space-y-2 px-2">
                <div className="flex justify-center">
                    <div className="dropdown" style={{marginBottom: "1%", marginTop:"1%"}}>
                        <h1 style={{fontSize: "150%"}}>Input Lyrics</h1>
                        <Input
                            placeholder="Clearable input"
                            value={lyric}
                            onChange={(event) => setLyric(event.currentTarget.value)}
                            rightSectionPointerEvents="all"
                            mt="md"
                            rightSection={
                            <CloseButton
                                aria-label="Clear input"
                                onClick={() => setLyric('')}
                                style={{ display: lyric ? undefined : 'none' }}
                            />
                        }
                        />
                    </div>
                </div>
             </div>
             
             <div className="flex flex-col space-y-2 px-2">
                 <div className="flex justify-center">
                     <GenerateSong select={song} lyric={lyric} emotion={emotion}></GenerateSong>
                 </div>
             </div>
         </div>
     </div>
    )
}

export default Song;
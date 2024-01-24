import { useState } from "react";
import { generateSong } from "../../src/song/request";
import SongPlayer from "./player";
import { Button, Loader } from "@mantine/core";

const GenerateSong = (prop: {select: string, lyric?: string, emotion?: string}) =>
{
    const { select, lyric, emotion } = prop;

    console.log({ select, lyric, emotion })
    const [ receivedurl, setUrl ] = useState<string>("");
    const [ sent, setSent ] = useState( false );
    const [ abnormal, setAbnormal ] = useState( false );

    const onClick = async () => {
        setSent( true );

        const url = await generateSong( select, lyric, emotion );
        
        console.log( url );
        
        if ( url.resCode === "200" ) {
            setUrl( url.dataRes.result[0].FileData.url );
        }
        
        else {
            setAbnormal( true );
        }
    }
    
    if ( sent ) {
        return (
            <div className="flex flex-col space-y-2 px-2" style={{ marginTop: '3%' }}>
            <div className="flex justify-center">
              <Loader color='blue'></Loader>
            </div>
    
          </div>
        )
    }

    if ( abnormal )
    {
        return (
            <>            <div className="flex flex-col space-y-2 px-2" style={{ marginTop: '3%' }}>
            <div className="flex justify-center">
                    <div>Error</div>
                </div>
                </div>
            </>
            
        )
    }

    return (
        <div>
            <Button onClick={onClick}> Click To Generate</Button>

            <SongPlayer url={receivedurl}></SongPlayer>
        </div>
    )
}


export default GenerateSong;
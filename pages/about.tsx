import { Text } from "@mantine/core";
import Link from "next/link";

const AboutHome = () =>
{
    const openaiText = ` Use OpenAI models to generate "Chat" and "Image"`;
    const musicUrl = "https://seawolf2357-hyejasong.hf.space/";
    const musicText = "Generate Lyrics and Song by emotions. The API is refered from "
    return (
          <div className="flex flex-col space-y-2 px-2" style={{ marginTop: '3%' }}>
            <div className="flex justify-center">
                <h1 style={{fontSize:"170%", fontWeight: "bold"}}>About This Generative Platform</h1>
            </div>

            <div className="flex justify-center">
                <Text>This Platform is Experimental Generative Web Application Platform using
                    <a style={{fontWeight: "bold"}}> openAI, Gradio, and BlockChain.</a>
                </Text>
            </div>

            <div className="flex justify-center">
                <Text>It is still in progress. Thank you so much.</Text>
            </div>

          <div className="flex flex-col space-y-2 px-2" style={{ marginTop: '2%' }}>
            <div className="flex justify-center">
                    <h1 style={{ fontSize: "140%", fontWeight: "bold" }}>Generate Models</h1>
                </div>

                <div className="flex justify-center">
       
                        <Text style={{ fontWeight: "bold" }}>OpenAI Models. </Text>
                        <Text>{openaiText}</Text>
                </div>
                 <div className="flex justify-center">
                        <Text style={{ fontWeight: "bold" }}>Gradio Models. </Text>
                        <Text>{musicText} </Text>
                        <Link href={musicUrl}>
                            <Text c="blue"> `Here`</Text>
                        .
                        </Link>
                    <Text>It is still on progress because of gradio package type issue. </Text>
                    </div>
            </div>

            <div className="flex justify-center">
                <h1 style={{fontSize:"140%", fontWeight: "bold"}}>Blockchain as Infrastructure</h1>
            </div>

            <div className="flex justify-center">
                <Text>This Platform is Experimentally using blockchain for request generating chats or images.</Text>
            </div>
            <div className="flex justify-center">
                <Text>It is on Sepolia Ethereum Testnet. You will get address instantly by signing in.</Text>
            </div>

        </div>
    )
};
export default AboutHome;
import fetch from "node-fetch"

export const requestChatImg = async(prompt: string, number: string, size: string) => {
    const url = "https://gpt-back.andongh.com/img/generate";
    
    const options = {
        body: JSON.stringify({
            prompt,
            number,
            size,
        })
    };

    const response = await fetch(url, options);
}
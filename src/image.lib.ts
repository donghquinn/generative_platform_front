import fetch from "node-fetch"

export const requestChatImg = async(prompt: string, number: string, size: string) => {
    const url = process.env.NEXT_PUBLIC_IMAGE_URL;

    const options = {
        body: JSON.stringify({
            prompt,
            number,
            size,
        })
    };

    const response = await fetch(url, options);
}
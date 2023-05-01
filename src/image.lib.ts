import fetch from "node-fetch"

interface ImageReseponse {
    resCode: string;
    dataRes: string[] | null;
    errMsg: string | string[] | null;
};

export const requestChatImg = async(prompt: string, number: string, size: string) => {
    const url = process.env.NEXT_PUBLIC_IMAGE_URL;

    const options = {
        body: JSON.stringify({
            prompt,
            number,
            size,
        })
    };

    const response = await (await fetch(url, options)).json() as ImageReseponse;

    return response;
}
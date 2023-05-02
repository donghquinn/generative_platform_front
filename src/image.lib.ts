import fetch from "node-fetch"

interface ImageReseponse {
    resCode: string;
    dataRes: ResultArray;
    errMsg: string | string[] | null;
}

interface ResultArray {
    result: Array<string | undefined> | null;
}


export type ImageResponseFormat = "url" | "b64_json";

export type SizeTypes = '256x256' | '512x512' | '1024x1024';


export const requestImg = async(prompt: string, number: string, size?: SizeTypes, responseFormat?: ImageResponseFormat, user?: string) => {
    const url = process.env.NEXT_PUBLIC_IMAGE_URL;

    const options = {
        body: JSON.stringify({
            prompt,
            number,
            size,
            responseFormat,
            user,
        })
    };

    const response = await (await fetch(url, options)).json() as ImageReseponse;

    return response;
}
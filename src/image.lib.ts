import fetch from "node-fetch"
import { Formats, Sizes } from "./image.type";

interface ImageReseponse {
    resCode: string;
    dataRes: ResultArray;
    errMsg: string | string[] | null;
}

interface ResultArray {
    result: Array<string | undefined> | null;
}

export const requestImg = async(prompt: string, number: string, size: Sizes, responseFormat?: Formats, user?: string) => {
    const url = process.env.NEXT_PUBLIC_IMAGE_URL;

    const options = {
        headers: {
            "Content-Type": "application/json", 
            key: process.env.NEXT_PUBLIC_KEY!
        },
        method: "POST",
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
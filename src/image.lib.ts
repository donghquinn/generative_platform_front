import { Formats, Sizes } from "./image.type";

export interface ImageReseponse {
    resCode: string;
    dataRes: ResultArray;
    errMsg: string | string[] | null;
}

export interface ResultArray {
    result: Array<string | undefined> | null;
}

export const requestImg = async(prompt: string, number: string, size?: Sizes, responseFormat?: Formats, user?: string) => {
    const url = process.env.NEXT_PUBLIC_IMAGE_URL;

    const options = {
        headers: {
            "Content-Type": "application/json", 
            key: process.env.NEXT_PUBLIC_KEY!,
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

export const editImage = async(selectedImage: string, prompt: string, number: string, size?: string ) => {
    const url = process.env.NEXT_PUBLIC_EDIT_IMAGE_URL;

    const formData = new FormData();

    formData.append("image", selectedImage);

    console.log("Form Data: %o", {selectedImage});
    
    const options = {
        headers: {
            'Content-Type': 'multipart/form-data',
            key: process.env.NEXT_PUBLIC_KEY!
        },
        method: "POST",
        body: JSON.stringify({
            image: formData,
            prompt,
            number,
            size,
        })
    };

    const response = await (await fetch(url, options)).json() as ImageReseponse;

    return response;
};


export const requestEdit = async ( formData: FormData, prompt: string, number: string, size?: string ) =>
{
    const options = {
        headers: {
            // 'Content-Type': 'multipart/form-data',
            key: process.env.NEXT_PUBLIC_KEY!
        },
        method: "POST",
        body: formData
    };
 
    const res = await ( await fetch( 'http://localhost:5543/img/edit', options ) ).json() as ImageReseponse;
 
    return res;
 
};

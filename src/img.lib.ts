interface ImageResponse {
    resCode: string;
    dataRes: ResultArray;
    errMsg: string[] | null;
};

interface ResultArray {
    result: Array<string | undefined> | null;
}

export const requestImage = async(prompt: string, number: string, size: string) => {
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
        })
    };

    const response = await (await fetch(url, options)).json() as ImageResponse;

    console.log(response);

    return response;
}
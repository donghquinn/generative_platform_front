interface ChatReseponse {
    resCode: string;
    dataRes: ResultArray;
    errMsg: string[] | null;
};

interface ResultArray {
    result: Array<string | undefined> | null;
}


export const chatRequest = async(model: string, content: string, name?: string, temperature?: number, topP?: number, number?: string, stream?: boolean, stop?: string | Array<string>, maxTokens?: number, presencePenalty?: number, frequencyPenalty?: number, user?: string) => {
    const url = process.env.NEXT_PUBLIC_CHAT_URL;

    const options = {
        headers: {
            "Content-Type": "application/json", 
            key: process.env.NEXT_PUBLIC_KEY!
        },
        method: "POST",
        body: JSON.stringify({
            model,
            content, 
            name,
            temperature,
            topP,
            number, 
            stream,
            stop,
            maxTokens,
            presencePenalty,
            frequencyPenalty,
            user
        })
    };

    const response = await (await fetch(url, options)).json() as ChatReseponse;

    // console.log);


    return response;
}
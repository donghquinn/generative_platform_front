interface ChatReseponse {
    resCode: string;
    dataRes: string[] | null;
    errMsg: string | string[] | null;
};


export const chatRequest = async(model: string,content: string, name?: string, temperature?: number, topP?: number, number?: number, stream?: boolean, stop?: string | Array<string>, maxTokens?: number, presencePenalty?: number, frequencyPenalty?: number, user?: string) => {
    const url = process.env.NEXT_PUBLIC_CHAT_URL;

    const options = {
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

    return response;
}
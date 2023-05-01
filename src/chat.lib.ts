export const chatRequest = async(model: string,content: string, name?: string, temperature?: number, topP?: number, number?: number, stream?: boolean, stop?: string | Array<string>, maxTokens?: number, presencePenalty?: number, frequencyPenalty?: number, user?: string) => {
    const url = "https://gpt-back.andongh.com/chat/generate";

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

    const response = await fetch(url, options);
}
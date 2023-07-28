interface ChatReseponse {
    resCode: string;
    dataRes: ResultArray;
    errMsg: string[] | null;
};

interface ResultArray {
    result: Array<string | undefined> | null;
}


/**
 * Request Chat Response
 * @param model Required. Select Large Language Model.
 * @param content Required. User Queries.
 * @param number Required. Numbers to generate
 * @param name 
 * @param temperature 
 * @param topP 
 * @param stream 
 * @param stop 
 * @param maxTokens 
 * @param presencePenalty 
 * @param frequencyPenalty 
 * @param user 
 * @returns Model's Response
 */
export const chatRequest = async(
    model: string, 
    content: string, 
    number: string, 
    name?: string, 
    temperature?: number, 
    topP?: number, 
    stream?: boolean, 
    stop?: string | Array<string>, 
    maxTokens?: number, 
    presencePenalty?: number, 
    frequencyPenalty?: number, 
    user?: string) => {
    // LLM's URL
    const url = process.env.NEXT_PUBLIC_CHAT_URL;

    const options = {
        headers: {
            "Content-Type": "application/json",
            // Chat-GPT API Key. Can be replaced own authentication key if you have your own model
            key: process.env.NEXT_PUBLIC_KEY!
        },
        // HTTP Method: POST
        method: "POST",

        // BODY Parameters
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
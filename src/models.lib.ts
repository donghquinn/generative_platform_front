interface ModelReseponse {
    resCode: string;
    dataRes: string[] | null;
    errMsg: string | string[]
};

export const getModels = async() => {

    const modelUrl = process.env.NEXT_PUBLIC_MODEL_URL;

    const response = await (await fetch(modelUrl)).json() as ModelReseponse;

    return response;
}
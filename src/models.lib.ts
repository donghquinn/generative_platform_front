export const getModels = async() => {

    const modelUrl = process.env.NEXT_PUBLIC_MODEL_URL;

    const response = await (await fetch(modelUrl)).json();

    return response;
}
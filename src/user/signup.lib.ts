export const singupRequest = async(
    email: string,
    password: string,
    name: string,
) =>
{
    const url = process.env.SIGNUP_URL!;

    const options = {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({email, password, name})
    }

    const response = await ( await fetch( url, options ) ).json();
    
    return response;
}
export const signinRequest = async (email: string, password: string) => {
  const url = process.env.SIGNIN_URL!;

  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ email, password }),
  };

  const response = await (await fetch(url, options)).json();

  return response;
};

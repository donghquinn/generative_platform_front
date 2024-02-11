import { SignupDto } from "../types/user.type";

export const singupRequest = async (email: string, password: string, name: string) => {
  const url = process.env.NEXT_PUBLIC_SIGNUP_URL!;
  const key = process.env.NEXT_PUBLIC_KEY!;
  
  const options = {
    headers: {
      'Content-Type': 'application/json',
      key,
    },
    method: 'POST',
    body: JSON.stringify({ email, password, name }),
  };

  const response = await (await fetch(url, options)).json() as SignupDto;

  return response;
};

import { LoginDto } from "../types/user.type";

export const loginRequest = async (email: string, password: string) => {
  const url = process.env.NEXT_PUBLIC_LOGIN_URL!;
  const key = process.env.NEXT_PUBLIC_KEY!;
  
  const options = {
    headers: {
      'Content-Type': 'application/json',
      key,
    },
    method: 'POST',
    body: JSON.stringify( { email, password } ),
  };

  const response = await (await fetch(url, options)).json() as LoginDto;

  return response;
};
''
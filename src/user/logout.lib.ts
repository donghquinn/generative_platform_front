import { LoginDto } from "../types/user.type";

export const logoutRequest = async (uuid: string) => {
  const url = process.env.LOGOUT_URL!;
  const key = process.env.NEXT_PUBLIC_KEY!;
  
  const options = {
    headers: {
      'Content-Type': 'application/json',
      key,
    },
    method: 'POST',
    body: JSON.stringify({ uuid }),
  };

  const response = await (await fetch(url, options)).json() as LoginDto;

  return response;
};

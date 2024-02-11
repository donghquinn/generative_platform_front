import { MyPageDto } from "../types/user.type";

export const getMyPageInfo = async ( email: string ) =>
{
    const url = process.env.SIGNIN_URL!;

  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ email }),
  };

  const response = await (await fetch(url, options)).json() as MyPageDto;

  return response;
}
import { MyPageDto } from "../types/user.type";

export const getMyPageInfo = async ( email: string ) =>
{
    const url = process.env.NEXT_PUBLIC_MYPAGE_URL!;
    const key = process.env.NEXT_PUBLIC_KEY!;

  const options = {
    headers: {
          'Content-Type': 'application/json',
        key,
    },
    method: 'POST',
    body: JSON.stringify({ email }),
  };

  const response = await (await fetch(url, options)).json() as MyPageDto;

  return response;
}
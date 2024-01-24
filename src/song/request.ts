import { SongRequestBodyData, SongResponse } from './types.type';

export const generateSong = async (select: string, lyric?: string, emotion?: string) => {
  const url = process.env.NEXT_PUBLIC_AUDIO_URL!;

  const bodyData: SongRequestBodyData = { select };

  if (lyric !== undefined) bodyData.lyric = lyric;
  if (emotion !== undefined) bodyData.emotion = emotion;

  console.log('body data: %o', { bodyData });

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      key: process.env.NEXT_PUBLIC_KEY!,
    },
    body: JSON.stringify(bodyData),
  };

  const response = (await (await fetch(url, options)).json()) as SongResponse;

  return response;
};

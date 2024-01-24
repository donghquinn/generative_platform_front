export interface SongRequestBodyData {
  select: string;
  lyric?: string;
  emotion?: string;
}

export type SongEmotions = '행복' | '슬픔' | '기쁨' | '도전' | '희망';

export type SongSelections =
  | 'Deck the Halls by Cecilia'
  | 'Move your Body by Cecilia'
  | 'Dark Trap by Jerry'
  | 'Happy Birthday by Jerry'
  | 'Levitate by Ed';

export interface SongResponse {
  resCode: string;
  dataRes: {
    result: Array<SongData>;
  };
  errMsg: Array<string> | null;
}

export interface SongData {
  FileData: {
    path: string;
    url: string;
  };
}

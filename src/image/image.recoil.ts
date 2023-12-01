import { atom } from 'recoil';
import { Sizes } from '../types/image.type';

export const imageRecoil = atom({
  key: 'imageRecoil',
  default: [''],
});

export const imageNumberRecoil = atom({
  key: 'imageNumberRecoil',
  default: '1',
});

export const imageSizeRecoil = atom<Sizes>({
  key: 'imageNumberRecoil',
  default: '256x256',
});

export const imageResponseRecoil = atom<Array<string>>({
  key: 'imageResponseRecoil',
  default: [],
});

export const imageErrMsgRecoil = atom({
  key: 'imageErrMsgRecoil',
  default: [] || '',
});

export const imageRequestSuccess = atom({
  key: 'imageRequestSuccess',
  default: false,
});

export const imageUpload = atom<string>({
  key: 'imageUpload',
  default: '',
});

export const imageEditFile = atom<string>({
  key: 'imageEditFile',
  default: '',
});

export const imageFileName = atom<string>({
  key: 'imageFileName',
  default: '',
});

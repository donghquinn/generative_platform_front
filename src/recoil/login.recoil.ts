import { atom } from 'recoil';
import { create } from 'zustand';

// export const signinUserUuidZustand = create((set) => ({
//   userUuid: '',
//   setUserUuid: (value: string) => set({ userUuid: value }),
// }));

export const signinUserUuidRecoil = atom({
  key: 'signinUserUuidRecoil',
  default: "",
} );

export const signinUserEmailRecoil = atom({
  key: 'globalEmailKey',
  default: "",
});
import { create } from 'zustand';

export const signinUserUuidZustand = create((set) => ({
  userUuid: '',
  setUserUuid: (value: string) => set({ userUuid: value }),
}));

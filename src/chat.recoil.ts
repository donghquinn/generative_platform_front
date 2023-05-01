import { atom } from "recoil";

export const chatRecoil = atom({
    key: "chatRecoil",
    default: [""],
});

export const responseRecoil = atom ({
    key: "responseRecoil",
    default: [""],
});

export const requestSuccess = atom({
    key: "requestSuccess",
    default: false,
});

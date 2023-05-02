import { atom } from "recoil";

export const imageRecoil = atom({
    key: "imageRecoil",
    default: [""],
});


export const imageNumberRecoil = atom({
    key: "imageNumberRecoil",
    default: "1",
});

export const imageResponseRecoil = atom ({
    key: "imageResponseRecoil",
    default: [],
});

export const imageErrMsgRecoil = atom ({
    key: "imageErrMsgRecoil",
    default: [] || "",
});

export const imageRequestSuccess = atom({
    key: "imageRequestSuccess",
    default: false,
});

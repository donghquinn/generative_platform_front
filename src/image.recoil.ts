import { atom } from "recoil";
import { Sizes } from "./image.type";

export const imageRecoil = atom({
    key: "imageRecoil",
    default: [""],
});


export const imageNumberRecoil = atom({
    key: "imageNumberRecoil",
    default: "1",
});

export const imageSizeRecoil = atom<Sizes>({
    key: "imageNumberRecoil",
    default: "256x256",
})

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

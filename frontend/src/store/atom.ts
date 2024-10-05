import { atom } from "recoil";

export const token = atom({
  key: "token",
  default: localStorage.getItem("token"),
});

import { atom } from "recoil";

export const userState = atom<{
  isLoading: Boolean;
  userEmail: string | null;
}>({
  key: "courseState",
  default: {
    isLoading: true,
    userEmail: null,
  },
});

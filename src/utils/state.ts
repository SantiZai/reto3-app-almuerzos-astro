import { create } from "zustand";
import { User } from "./models";

type State = {
  user: User;
};

type Action = {
  setUser: (user: State["user"]) => void;
};

export const userStore = create<State & Action>((set) => ({
  user: {
    id: "",
    fullname: "",
    identifier: "",
    position: "",
  } as User,
  setUser: (user: User) => set(() => ({ user })),
}));

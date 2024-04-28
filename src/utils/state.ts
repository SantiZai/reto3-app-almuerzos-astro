import { create } from "zustand";

type State = {
  user: User;
};

type Action = {
  setUser: (user: State["user"]) => void;
};

interface User {
  id: string;
  fullname: string;
  identifier: string;
  position: string;
}

export const userStore = create<State & Action>((set) => ({
  user: {
    id: "",
    fullname: "",
    identifier: "",
    position: "",
  } as User,
  setUser: (user: User) => set(() => ({ user })),
}));

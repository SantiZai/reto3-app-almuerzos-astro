import { create } from "zustand";

export const userStore = create((set) => ({
  user: {
    id: "",
    fullname: "",
    identifier: "",
    position: "",
  },
  setUser: () => set((state: any) => ({ user: state.user })),
}));

import { create } from "zustand";

type SearchStore = {
  search: string;
  onSearch: (search: string) => void;
};

export const useSearchForm = create<SearchStore>((set) => ({
  search: "",
  onSearch: (search: string) => set({ search }),
}));

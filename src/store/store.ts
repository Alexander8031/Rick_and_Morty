import { create } from "zustand";

export type Character = {
  id: number;
  name: string;
  species: string;
  gender: string;
  status: string;
  image: string;
};

interface Filters {
  search: string;
  species: string;
  gender: string;
  status: string;
}

interface CharacterStoreState {
  characters: Character[];
  page: number;
  filters: Filters;
  setCharacters: (characters: Character[], append: boolean) => void;
  setPage: (page: number) => void;
  setFilters: (filters: Partial<Filters>) => void;
}

const useStore = create<CharacterStoreState>((set) => ({
  characters: [],
  page: 1,
  filters: {
    search: "",
    species: "",
    gender: "",
    status: "",
  },
  setCharacters: (newCharacters, append) =>
    set((state) => ({
      characters: append
        ? [...state.characters, ...newCharacters]
        : newCharacters,
    })),
  setPage: (page) => set({ page }),
  setFilters: (filters) =>
    set((state) => ({
      filters: { ...state.filters, ...filters },
      page: 1,
      characters: [],
    })),
}));

export default useStore;

import { create } from "zustand";

export type Character = {
  id: number;
  name: string;
  species: string;
  gender: string;
  status: string;
  image: string;
};

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residenst: [];
}

interface Filters {
  search: string;
  species: string;
  gender: string;
  status: string;
  type: string;
  dimension: string;
}

interface FilterOptions {
  species: string[];
  gender: string[];
  status: string[];
  type: string[];
  dimension: string[];
}

interface CharacterStoreState {
  characters: Character[];
  location: Location[];
  page: number;
  filters: Filters;
  options: FilterOptions;
  setCharacters: (characters: Character[], append: boolean) => void;
  setLocation: (location: Location[], append: boolean) => void;
  setPage: (page: number) => void;
  setFilters: (filters: Partial<Filters>) => void;
  setFilterOptions: (options: Partial<FilterOptions>) => void;
}

const useStore = create<CharacterStoreState>((set) => ({
  characters: [],
  location: [],
  page: 1,
  filters: {
    search: "",
    species: "",
    gender: "",
    status: "",
    type: "",
    dimension: "",
  },
  options:  {
    species: [],
    gender: [],
    status: [],
    type: [],
    dimension: [],
  },
  setCharacters: (newCharacters, append) =>
    set((state) => ({
      characters: append
        ? [...state.characters, ...newCharacters]
        : newCharacters,
    })),
  setLocation: (newLocation, append) =>
    set((state) => ({
      location: append
      ? [...state.location, ...newLocation]
      : newLocation,
    })),
  setPage: (page) => set({ page }),
  setFilters: (filters) =>
    set((state) => ({
      filters: { ...state.filters, ...filters },
      page: 1,
      characters: [],
    })),
    setFilterOptions: (options) => set((state) => ({
      options: { 
        species: state.options.species.length > 0
        ? state.options.species
        : Array.from(new Set([...(options.species || [])])),
        gender: state.options.gender.length > 0
        ? state.options.gender
        : Array.from(new Set([...(options.gender || [])])),
        status: state.options.status.length > 0
        ? state.options.status
        : Array.from(new Set([...(options.status || [])])),
        type: state.options.type.length > 0
        ? state.options.type
        : Array.from(new Set([...(options.type || [])])),
        dimension: state.options.dimension.length > 0
        ? state.options.dimension
        : Array.from(new Set([...(options.dimension || [])])),
       },
    })),
}));

export default useStore;

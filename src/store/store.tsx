import { create } from "zustand";

interface StoreState {
  results: any[];
  isLoading: boolean;
  error: string | null;

  setResults: (results: any[]) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

const useStore = create<StoreState>((set, get) => ({
  results: [],
  isLoading: false,
  error: null,
  filters: {
    search: "",
    species: "",
    gender: "",
    status: "",
  },
  setResults: (results) => set({ results }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
}));

export default useStore;
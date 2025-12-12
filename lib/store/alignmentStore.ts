import { create } from "zustand";
import { persist } from "zustand/middleware";

export type AlignmentCheck = {
  interest: number;
  skills: number;
  values: number;
  growth: number;
  future: number;
  environment: number;
  total: number;
};

type AlignmentStore = {
  check: AlignmentCheck | null;
  isHydrated: boolean;
  setCheck: (check: AlignmentCheck) => void;
  reset: () => void;
  setHydrated: (hydrated: boolean) => void;
};

export const useAlignmentStore = create<AlignmentStore>()(
  persist(
    (set) => ({
      check: null,
      isHydrated: false,
      setCheck: (check: AlignmentCheck) => set({ check }),
      reset: () => set({ check: null }),
      setHydrated: (hydrated: boolean) => set({ isHydrated: hydrated }),
    }),
    {
      name: "compass_alignment_check",
    }
  )
);

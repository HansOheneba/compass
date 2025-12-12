import { create } from "zustand";
import { persist } from "zustand/middleware";

export type InterestsProfile = {
  creativity: number;
  analytical: number;
  business: number;
  people: number;
  technical: number;
  impact: number;
};

type InterestsStore = {
  profile: InterestsProfile | null;
  isHydrated: boolean;
  setProfile: (profile: InterestsProfile) => void;
  reset: () => void;
  setHydrated: (hydrated: boolean) => void;
};

export const useInterestsStore = create<InterestsStore>()(
  persist(
    (set) => ({
      profile: null,
      isHydrated: false,
      setProfile: (profile: InterestsProfile) => set({ profile }),
      reset: () => set({ profile: null }),
      setHydrated: (hydrated: boolean) => set({ isHydrated: hydrated }),
    }),
    {
      name: "compass_interests_profile",
    }
  )
);

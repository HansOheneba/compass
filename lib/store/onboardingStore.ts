import { create } from "zustand";
import { persist } from "zustand/middleware";

export type OnboardData = {
  name: string;
  ageRange: string;
  country: string;
  careerStatus: string;
  currentRole: string;
  primaryGoal: string;
  experienceLevel: string;
  additionalNotes: string;
};

type OnboardingStore = {
  data: OnboardData;
  step: number;
  isHydrated: boolean;
  setData: (patch: Partial<OnboardData>) => void;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  reset: () => void;
  setHydrated: (hydrated: boolean) => void;
};

const initialData: OnboardData = {
  name: "",
  ageRange: "18-24",
  country: "",
  careerStatus: "student",
  currentRole: "",
  primaryGoal: "find_path",
  experienceLevel: "no_experience",
  additionalNotes: "",
};

export const useOnboardingStore = create<OnboardingStore>()(
  persist(
    (set) => ({
      data: initialData,
      step: 1,
      isHydrated: false,
      setData: (patch: Partial<OnboardData>) =>
        set((state) => ({
          data: { ...state.data, ...patch },
        })),
      setStep: (step: number) => set({ step }),
      nextStep: () =>
        set((state) => ({
          step: Math.min(3, state.step + 1),
        })),
      prevStep: () =>
        set((state) => ({
          step: Math.max(1, state.step - 1),
        })),
      reset: () => set({ data: initialData, step: 1 }),
      setHydrated: (hydrated: boolean) => set({ isHydrated: hydrated }),
    }),
    {
      name: "compass_onboarding",
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setHydrated(true);
        }
      },
    }
  )
);

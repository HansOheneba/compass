import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Skill = {
  name: string;
  rating: number;
  category: "soft" | "technical";
};

export type SkillsInventory = {
  skills: Skill[];
};

type SkillsStore = {
  inventory: SkillsInventory | null;
  isHydrated: boolean;
  setInventory: (inventory: SkillsInventory) => void;
  addSkill: (skill: Skill) => void;
  updateSkill: (index: number, skill: Partial<Skill>) => void;
  reset: () => void;
  setHydrated: (hydrated: boolean) => void;
};

export const useSkillsStore = create<SkillsStore>()(
  persist(
    (set) => ({
      inventory: null,
      isHydrated: false,
      setInventory: (inventory: SkillsInventory) => set({ inventory }),
      addSkill: (skill: Skill) =>
        set((state) => {
          if (!state.inventory) {
            return { inventory: { skills: [skill] } };
          }
          return {
            inventory: {
              ...state.inventory,
              skills: [...state.inventory.skills, skill],
            },
          };
        }),
      updateSkill: (index: number, skill: Partial<Skill>) =>
        set((state) => {
          if (!state.inventory) return state;
          const skills = [...state.inventory.skills];
          skills[index] = { ...skills[index], ...skill };
          return { inventory: { ...state.inventory, skills } };
        }),
      reset: () => set({ inventory: null }),
      setHydrated: (hydrated: boolean) => set({ isHydrated: hydrated }),
    }),
    {
      name: "compass_skills_inventory",
    }
  )
);

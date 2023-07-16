import { create } from 'zustand';
interface figmaState {
  
}
export const useFigmaStore = create((set) => ({
  activeIndex: 1,
  setActiveIndex: (newValue: any) => set({ activeIndex: newValue }),
}));

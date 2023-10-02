import { create } from 'zustand';
interface DesignFlowState {
  
}
export const useDesignFlowStore = create((set) => ({
  activeIndex: 1,
  setActiveIndex: (newValue: any) => set({ activeIndex: newValue }),
}));

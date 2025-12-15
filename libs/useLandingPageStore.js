// libs/useLandingPageStore.js
import { create } from 'zustand';

const useLandingPageStore = create((set) => ({
  details: null,
  setDetails: (data) => set({ details: data }),
}));

export default useLandingPageStore;

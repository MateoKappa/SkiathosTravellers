import create from "zustand";
const useStore = create((set) => ({
  cruiseID: 1,
  preview: false,
  findCruise: (variable) => set(() => ({cruiseID: variable})),
  previewPhone: (variable) => set(() => ({preview: variable})),
  removeAllTweets: () => set({tweets: ""}),
}));
export default useStore;

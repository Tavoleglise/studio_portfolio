import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export default create(
  subscribeWithSelector((set) => {
    return {
      activeSection: 0,
      cameraType: 0,
      loading: true,
      phase: "loading",

      changeActiveSection: (section) => {
        set(() => {
          return { activeSection: section };
        });
      },
      changeCameraType: (camera) => {
        set(() => {
          return { cameraType: camera };
          console.log(cameraType);
        });
      },
      start: () => {
        set((state) => {
          if (state.phase === "loading") return { phase: "started" };
          return {};
        });
      },
      changeLoading: (camera) => {
        set(() => {
          return { loading: false };
        });
      },
    };
  })
);

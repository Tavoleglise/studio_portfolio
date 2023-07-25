import { useProgress } from "@react-three/drei";
import { useEffect } from "react";
import usePage from "../../stores/usePage.jsx";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const start = usePage((state) => state.start);
  const phase = usePage((state) => state.phase);
  const loading = usePage((state) => state.loading);
  const changeLoading = usePage((state) => state.changeLoading);
  const { progress, item, total, loaded } = useProgress();

  useEffect(() => {
    /*const unsubscribeStart = usePage.subscribe(
      (state) => state.phase,
      (value) => {
        if (value === "started") start();
      }
    );
    return () => {
      unsubscribeStart();
    };*/
    console.log(progress);
    if (progress === 100 && loaded === 27) {
      changeLoading();
    }
  }, [progress]);

  return (
    <>
      <AnimatePresence>
        {phase === "loading" && (
          <motion.div
            className="loadingScreen"
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            {loading && (
              <motion.div
                className="loadingText"
                animate={{ scale: [1, 1.1, 1] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, repeat: "infinity" }}
              >
                Loading
              </motion.div>
            )}
            {!loading && (
              <motion.div
                className="loadingText"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Welcome to my studio
              </motion.div>
            )}
            <div className="logingButtonConatiner"></div>
            {!loading === true ? (
              <div
                className="loadingButton big-button orange-hover"
                onClick={start}
              >
                start
              </div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { Transition } from "motion";
import {
  AnimationControls,
  MotionStyle,
  TargetAndTransition,
  VariantLabels,
} from "motion/react";
import * as motion from "motion/react-client";

function Motion({
  styles,
  transition,
  animate,
}: {
  styles?: MotionStyle;
  transition?: Transition;
  animate?: AnimationControls | TargetAndTransition | VariantLabels | undefined;
}) {
  return (
    <motion.div
      style={{
        width: 100,
        height: 100,
        backgroundColor: "#ffffff",
        borderRadius: "30%",
        ...styles,
      }}
      animate={{
        ...(animate ? { animate } : false),
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ...transition,
        ease: "linear",
      }}
    ></motion.div>
  );
}

export default Motion;

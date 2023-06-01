import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import { motion } from "framer-motion";

import state from "../store";
import { slideAnimation } from "../config/motion";
const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <motion.div className="absolute left-full ml-3" {...slideAnimation("left")}>
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#ffffff",
          "#080F0F",
          "#95A3B3",
          "#A52422",
          "#0C8346",
          "#477998",
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </motion.div>
  );
};

export default ColorPicker;

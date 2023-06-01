import React from "react";

import CustomButton from "./CustomButton";
import { motion } from "framer-motion";
import { slideAnimation } from "../config/motion";

const AiPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <motion.div className="aipicker-container" {...slideAnimation("left")}>
      <textarea
        className="aipicker-textarea"
        placeholder="Ask AI to design a logo"
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="flex flex-wrap gap-3">
        coming soon...
        {/* {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI"
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-xs"
            />
            <CustomButton
              type="outline"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs"
            />
          </>
        )} */}
      </div>
    </motion.div>
  );
};

export default AiPicker;

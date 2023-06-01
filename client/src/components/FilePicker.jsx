import React from "react";

import CustomButton from "./CustomButton";
import { motion } from "framer-motion";
import { slideAnimation } from "../config/motion";

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <motion.div className="filepicker-container" {...slideAnimation("left")}>
      <div className="flex-1 flex flex-col">
        <input
          type="file"
          id="file-upload"
          accept="image/"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>
        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === "" ? "No File Selected" : file.name}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          type="outline"
          title="logo"
          handleClick={() => readFile("logo")}
          customStyles="text-xs"
        />
        <CustomButton
          type="filled"
          title="full"
          handleClick={() => readFile("full")}
          customStyles="text-xs"
        />
      </div>
    </motion.div>
  );
};

export default FilePicker;

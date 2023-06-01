import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div
            className="home-content
          "
            {...headContainerAnimation}
          >
            <motion.div {...headTextAnimation}>
              <h1 className="head-text uppercase">
                let's <br className="xl:block hidden" />
                do it
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum fugiat temporibus repellat amet officia velit sequi
                similique aliquam incidunt rerum?
              </p>

              <CustomButton
                type="filled"
                title="Customize Product"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;

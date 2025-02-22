"use client";
import { memo } from "react";
import { Text } from "../../../components/shared";
import { motion } from "framer-motion";

function MenuItem({
  children = "Title"
}: {
  children?: string;
}) {

  return (
    <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 10,
        }}
      >
        <Text size={40}>{children}</Text>
      </motion.div>
  )

};

export default memo(MenuItem);

"use client";
import { memo } from "react";
import { Bold, Button, Text } from "../shared";
import { useMobile } from "../hooks";
import { motion } from "framer-motion";

function TitleBlock() {
  const mobile = useMobile();

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.4 } },
  };

  return (
    <motion.div
      className={`grid justify-center ${mobile ? "pt-[130px]" : "pt-[200px]"} select-none text-center md:text-left`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div variants={titleVariants}>
        {mobile ? <Bold size={30}>ЦЕНТР МОЛОДЁЖНОЙ РОБОТОТЕХНИКИ</Bold> : <Text size={90}>ЦЕНТР МОЛОДЁЖНОЙ РОБОТОТЕХНИКИ</Text>}
      </motion.div>
      <motion.div variants={textVariants}>
        <Text size={mobile ? 17 : 30} className="max-w-[990px]">
          Центр Молодежной Робототехники - это инновационное пространство, предназначенное для обучения
          и развития молодых талантов в области робототехники, искусственного интеллекта и программирования.
          Присоединяйтесь к нам и откройте для себя мир будущего уже сегодня!
        </Text>
      </motion.div>
      <motion.div className="py-[10px]" variants={buttonVariants}>
        <Button>ПОДРОБНЕЕ</Button>
      </motion.div>
    </motion.div>
  );
}

export default memo(TitleBlock);
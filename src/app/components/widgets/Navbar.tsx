"use client";
import {memo, useEffect, useState} from "react";
import Logo from "../icons/Logo";
import { useMobile } from "../hooks";
import { Bold } from "../shared";
import { motion, AnimatePresence } from "framer-motion";
import { MenuItem } from "../features";

const Navbar = memo(() => {

  const isMobileDevice = useMobile();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const addDesktopLogos = () => (
    <>
      <Logo type="bmstu" />
      <Logo type="crown" />
    </>
  );

  const [show, setShow] = useState(true);

    useEffect(() => {
        window.onscroll = () => {
            setShow(window.scrollY === 0);
        };
    }, []);

  const renderMobileMenu = () => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`z-0 flex ${
            isMobileDevice
              ? "fixed top-0 left-0 right-0 bottom-0 bg-[#C13100]"
              : "absolute right-[60px] top-[100px]"
          }`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex ml-auto">
            <div
              className={`text-right pr-[15px] ${
                isMobileDevice ? "mt-[100px]" : "grid gap-[77px]"
              }`}
            >
              {!isMobileDevice && (
                <>
                  <MenuItem>ГЛАВНАЯ</MenuItem>
                  <MenuItem>МЕРОПРИЯТИЯ</MenuItem>
                  <MenuItem>ХАРДАТОН</MenuItem>
                  <MenuItem>ПАРТНЁРЫ</MenuItem>
                </>
              )}
              {isMobileDevice && (
                <div className="grid gap-[83px]">
                  <Bold size={26}>ГЛАВНАЯ</Bold>
                  <Bold size={26}>МЕРОПРИЯТИЯ</Bold>
                  <Bold size={26}>ХАРДАТОН</Bold>
                  <Bold size={26}>ПАРТНЁРЫ</Bold>
                </div>
              )}
            </div>
            {isMobileDevice && (
              <div className="mr-[10px] mt-[10px]">
                <motion.img
                  src={`/close_icon.svg`}
                  onClick={toggleMenu}
                  alt="menu icon"
                  className="scale-[0.5] pr-[15px] w-fit h-fit mt-[15px]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  whileInView={{ scale: 0.5 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                />
                <motion.img
                  src="/menu_canvas.svg"
                  className={`mt-[5px] ${isMobileDevice ? "scale-[0.9] mr-[15px]" : ""}`}
                />
              </div>
            )}
            {!isMobileDevice && (
              <motion.img
                src="/menu_canvas.svg"
                className={`mt-[5px] ${isMobileDevice ? "scale-[0.9] mr-[15px]" : ""}`}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
      <div className="fixed left-0 right-0 top-0 z-20 flex bg-transparent select-none">
          <div className={`w-full md:px-20 ${isMobileDevice ? "h-[120px] py-5" : "h-[200px] py-5"} flex items-center justify-between`}>
              <div className="absolute inset-x-0 top-0 left-0 h-1 bg-gradient-to-t from-transparent to-black"></div>
              <div className="flex items-center gap-[40px]">
                  <div className="flex items-center gap-[40px] mr-auto">
                      {(!isMobileDevice && show) && addDesktopLogos()}
                      {show && <Logo type="crm" />}
                  </div>
              </div>
              <div className="relative cursor-pointer">
                  <motion.img
                      src={`/${isOpen ? "close" : "menu"}_icon.svg`}
                      onClick={toggleMenu}
                      alt="menu icon"
                      className={isMobileDevice ? isOpen ? "invisible" : "pr-[15px]" : ""}
                      whileHover={{ scale: 0.9 }}
                      whileTap={{ scale: 0.7 }}
                      whileInView={{ scale: isMobileDevice ? 0.5 : 0.8 }}
                      transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                      }}
                  />
                  {isOpen && renderMobileMenu()}
              </div>
          </div>
      </div>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import SidebarComp from "./ui/SidebarComp";
import Button from "./ui/Button";
import { NavList } from "@/constants/NavList";
import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const navItemRefs = useRef([]);

  const handleMouseEnter = (index, event) => {
    setActiveDropdown(index);
    const margin = 48;
    const navItemRect = event.currentTarget.getBoundingClientRect();
    const dropdownWidth = 16 * 14;
    const screenWidth = window.innerWidth;
    let leftPosition = navItemRect.left;

    if (leftPosition + dropdownWidth > screenWidth) {
      leftPosition = screenWidth - dropdownWidth - margin;
    }

    if (leftPosition < 10) {
      leftPosition = margin;
    }

    setDropdownPosition(leftPosition);
  };

  const handleNavOpen = () => {
    setIsOpen(true);
    document.body.classList.add("hide-scrollbar");
  };

  const handleNavClose = () => {
    setIsOpen(false);
  };

  const transition = {
    duration: 0.8,
    type: "tween",
    ease: [0.76, 0, 0.24, 1],
  };

  return (
    <motion.nav className="sticky top-0 w-full z-50 h-0 max-w-full">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full maxW px-2 sm:px-6 lg:px-8 pt-0">
        <div className="shadow-[0_4px_25px_0_rgba(45,10,84,0.12)] border-b-2 border-x border-amber-200/60 flex items-center justify-between rounded-b-2xl sm:rounded-b-3xl h-16 sm:h-20 bg-white/95 backdrop-blur-md text-dark px-3 sm:px-6">
          <Link href={"/"} name="home link" className="flex items-center group py-1">
            <div className="relative">
              <Image
                src={"/psslogo.png"}
                width={300}
                height={300}
                alt="The Pakistan School of Science logo"
                className="h-12 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </Link>

          <div
            onMouseLeave={() => setActiveDropdown(null)}
            className="max-lg:hidden mx-auto"
          >
            <div className="flex items-center gap-1 xl:gap-2 font-medium text-sm">
              {NavList.map((item, index) => {
                const isDisabled = item.content?.length > 0;
                const linkProps = {
                  onMouseEnter: (event) => handleMouseEnter(index, event),
                  className: `whitespace-nowrap transition-all duration-200 flex items-center gap-1 py-2 px-2.5 xl:px-3.5 rounded-lg select-none leading-none ${
                    activeDropdown === index
                      ? "bg-amber-50 text-sec font-bold"
                      : "text-slate-700 hover:text-sec hover:bg-amber-50/60"
                  }`,
                  target: item.blank ? "_blank" : "_self",
                  rel: item.blank ? "noopener noreferrer" : "",
                };

                return !isDisabled && item.slug ? (
                  <Link {...linkProps} key={index} href={item.slug}>
                    {item.title}
                  </Link>
                ) : (
                  <div {...linkProps} key={index} className={`${linkProps.className} cursor-pointer`}>
                    {item.title}{" "}
                    <FaChevronDown
                      className={`${
                        activeDropdown === index ? "rotate-180 text-main" : ""
                      } transition-transform duration-300 opacity-70 font-normal size-3 align-middle ml-1 mb-px`}
                    />
                  </div>
                );
              })}
            </div>
            <AnimatePresence>
              {activeDropdown != null && NavList[activeDropdown]?.content && (
                <motion.div
                  initial={{
                    opacity: 0,
                    left: dropdownPosition,
                    y: -20,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    left: dropdownPosition,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: 0,
                    scale: 0.95,
                    transition: {
                      duration: 0.2,
                      ease: "easeIn",
                    },
                  }}
                  className="origin-top w-[330px] max-w-full absolute pt-7 top-[calc(100%-3.5rem)]"
                >
                  <div className="bg-white shadow-[0_12px_40px_0_rgba(45,10,84,0.18)] border border-amber-200/80 rounded-2xl p-3">
                    <ul className="flex flex-col divide-y divide-amber-100/60">
                      {NavList[activeDropdown]?.content.map(
                        (subItem, subIndex) => (
                          <li key={subIndex} className="flex">
                            <Link
                              className="p-2.5 flex-1 transition-all duration-200 hover:bg-gradient-to-r hover:from-sec hover:to-secL hover:text-white rounded-xl text-sm text-slate-700 font-medium"
                              href={`${subItem.slug}`}
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            href={"/OnlineAdmission"}
            name="admission link"
            className="max-sm:hidden ml-3"
          >
            <Button size="small" btnType="main">
              Online Admission
            </Button>
          </Link>
          <button
            onClick={handleNavOpen}
            className="lg:hidden transition-all duration-300 hover:bg-amber-50 h-10 w-10 grid place-content-center rounded-xl text-2xl text-sec ml-2"
          >
            <FiMenu />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={"Navbar"}
            className="fixed w-full h-screen z-[999] right-0 top-0"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition}
              onClick={handleNavClose}
              className="absolute inset-0 bg-dark/70 backdrop-blur-sm"
            ></motion.div>
            <motion.div
              initial={{ x: "0" }}
              animate={{ x: "-100%" }}
              exit={{
                x: "0",
              }}
              onAnimationComplete={(definition) => {
                if (definition.x === "0") {
                  document.body.classList.remove("hide-scrollbar");
                }
              }}
              transition={transition}
              data-lenis-prevent
              className="p-5 flex flex-col gap-2 absolute left-full top-0 z-10 bg-white h-full max-h-[100dvh] w-[min(380px,90%)] rounded-s-2xl overflow-y-scroll shadow-2xl"
            >
              <div className="bg-gradient-to-r from-sec via-[#3E1470] to-secD p-3 mb-4 rounded-xl flex gap-2 items-center justify-between text-white border border-amber-300/30">
                <Link href={"/"} name="home link" className="flex items-center gap-3">
                  <Image
                    src={"/psslogo.png"}
                    width={200}
                    height={200}
                    alt="The Pakistan School of Science logo"
                    className="h-11 w-auto object-contain bg-white rounded-md p-1"
                  />
                  <div className="flex flex-col">
                    <span className="font-berlin font-bold text-sm text-white leading-tight">
                      PAKISTAN SCHOOL OF SCIENCE
                    </span>
                    <span className="text-[10px] font-semibold text-amber-300">
                      Knowledge is Power
                    </span>
                  </div>
                </Link>
                <button
                  onClick={handleNavClose}
                  className="transition-all text-white hover:bg-white/20 h-9 w-9 grid place-content-center rounded-full text-xl"
                >
                  <RxCross2 />
                </button>
              </div>
              <SidebarComp data={NavList} handleClose={handleNavClose} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

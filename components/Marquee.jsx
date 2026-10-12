"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const DefaultList = [
  "Admissions Open for Session 2026-2027 ★ The Pakistan School of Science ★ Knowledge is Power",
];

export default function Marquee({ List = DefaultList, direction, speed }) {
  const marquee = useRef();
  const first = useRef();
  const second = useRef();
  let xPercent = 0;
  const ArrayData = [...List, ...List, ...List, ...List];

  useEffect(() => {
    let animId;
    const rightAnimation = () => {
      if (xPercent > 0) {
        xPercent = -100;
      }
      if (first.current && second.current) {
        gsap.to([first.current, second.current], {
          xPercent: xPercent,
          duration: 0,
          ease: "none",
        });
      }
      animId = requestAnimationFrame(rightAnimation);
      xPercent += speed / 10;
    };

    const leftAnimation = () => {
      if (xPercent < -100) {
        xPercent = 0;
      }
      if (first.current && second.current) {
        gsap.to([first.current, second.current], {
          xPercent: xPercent,
          duration: 0,
          ease: "none",
        });
      }
      animId = requestAnimationFrame(leftAnimation);
      xPercent -= speed / 10;
    };

    if (direction === "left") {
      animId = requestAnimationFrame(leftAnimation);
    } else {
      animId = requestAnimationFrame(rightAnimation);
    }

    return () => cancelAnimationFrame(animId);
  }, [direction, speed]);

  return (
    <section
      style={{
        maskImage: `linear-gradient(
        to right,
        transparent 2%,
        black 15%,
        black 85%,
        transparent 98%
      )`,
        WebkitMaskImage: `linear-gradient(
        to right,
        transparent 2%,
        black 15%,
        black 85%,
        transparent 98%
      )`,
      }}
      className="maxWSec w-full flex justify-center items-center py-6 sm:py-10 overflow-hidden"
    >
      <div
        ref={marquee}
        className="h-fit w-fit flex-nowrap relative flex border-y-2 border-amber-300/80 bg-white/90 backdrop-blur-sm py-2.5 flex-shrink-0 shadow-sm"
      >
        <div
          className="h-full flex-1 flex w-fit flex-nowrap items-center flex-shrink-0"
          ref={first}
        >
          {ArrayData.map((item, i) => {
            return (
              <div
                key={i}
                className="flex items-center w-fit py-2 px-3 sm:px-6 gap-3 sm:gap-6 flex-shrink-0"
              >
                <div className="text-base sm:text-2xl font-bold font-berlin text-sec whitespace-nowrap flex-shrink-0">
                  {item}
                </div>
                {i !== ArrayData.length && (
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl p-1 bg-white shadow-md border-2 border-main flex-shrink-0 flex items-center justify-center">
                    <Image
                      src={"/psslogo.png"}
                      width={100}
                      height={100}
                      alt="PSS Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div
          ref={second}
          className="flex-shrink-0 h-full flex w-full flex-nowrap items-center absolute left-full top-0"
        >
          {ArrayData.map((item, i) => {
            return (
              <div
                key={i}
                className="flex items-center w-fit py-2 px-3 sm:px-6 gap-3 sm:gap-6 flex-shrink-0"
              >
                <div className="text-base sm:text-2xl font-bold font-berlin text-sec whitespace-nowrap flex-shrink-0">
                  {item}
                </div>
                {i !== ArrayData.length && (
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl p-1 bg-white shadow-md border-2 border-main flex-shrink-0 flex items-center justify-center">
                    <Image
                      src={"/psslogo.png"}
                      width={100}
                      height={100}
                      alt="PSS Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

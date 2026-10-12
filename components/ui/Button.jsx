import { cn } from "@/utils/cn";
import React from "react";

const Button = ({
  children,
  full = false,
  rounded = false,
  btnType = "main",
  size = "default",
  className,
  ...props
}) => {
  const Types = {
    main: "bg-gradient-to-r from-main via-[#D4A94A] to-mainD hover:from-mainD hover:to-main text-white font-semibold shadow-md shadow-main/20",
    sec: "bg-gradient-to-r from-sec via-[#3B126E] to-secD hover:from-secD hover:to-sec text-white font-semibold shadow-md shadow-sec/30 border border-main/40",
    gold: "bg-main text-white hover:bg-mainD font-semibold shadow-lg shadow-main/30",
    custom: "",
  };

  const BTypes = {
    main: "border-main hover:border-mainD",
    sec: "border-sec hover:border-secD",
    gold: "border-main hover:border-mainD",
    custom: "",
  };

  const Sizes = {
    default: "gap-2 h-11 sm:h-12 px-5 text-sm sm:text-base",
    small: "gap-2 h-9 sm:h-10 px-4 text-xs sm:text-sm",
  };

  const BSizes = {
    default: "border-[2px] p-[1px]",
    small: "border-[1px] p-[2px]",
  };

  const isFit = full ? "w-full" : "max-w-fit";

  return (
    <button
      {...props}
      className={cn(
        "group cursor-pointer border-opacity-0 bg-transparent transition-all duration-300 hover:border-opacity-100",
        isFit,
        rounded ? "rounded-full" : "rounded-[calc(0.75rem+2px)]",
        BTypes[btnType],
        BSizes[size],
        className
      )}
    >
      <div
        className={cn(
          "relative transition-all duration-300 overflow-hidden !leading-[1.1] flex items-center justify-center tracking-wide",
          isFit,
          rounded ? "rounded-full" : "rounded-xl",
          Types[btnType],
          Sizes[size]
        )}
      >
        {children}
        <div
          className={cn(
            "absolute rotate-[30deg] scale-y-150 bg-white/25 transition-all duration-700 -left-16 top-0 h-[150%] w-12 group-hover:left-[calc(100%+2rem)]"
          )}
        />
      </div>
    </button>
  );
};

export default Button;

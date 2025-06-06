import { tv } from "tailwind-variants";

//shared color variants
const colorVariants = {
  black: "text-default-900",
  white: "#FFFFFF",
  violet: "from-[#FF1CF7] to-[#b249f8]",
  yellow: "from-[#FF705B] to-[#FFB457]",
  cyan: "from-[#00b7fa] to-[#01cfea]",
  foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
  fptBlue: "#0066B2",
  fptOrange: "#F36F21",
  fptGreen: "#0DB14B",
  fptGradient: "fpt-gradient",
}

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: colorVariants,
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-4xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "black",
        "violet",
        "yellow",
        "cyan",
        "foreground",
        "fptBlue",
        "fptOrange",
        "fptGreen",
        "fptGradient"
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",

  defaultVariants: {
    fullWidth: true,
  },

  variants: {
    size: {
      sm: "text-base lg:text-lg",
      md: "text-lg lg:text-xl",
      lg: "text-xl lg:text-2xl",
    },
    fullWidth: {
      true: "!w-full",
    },
  },
  compoundVariants: [
    {
      color: [
        "black",
        "violet",
        "yellow",
        "cyan",
        "foreground",
        "fptBlue",
        "fptOrange",
        "fptGreen",
        "fptGradient"
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

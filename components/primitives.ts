import { tv } from "tailwind-variants";

//shared color variants
const colorVariants = {
  fptBlue: "#0066B2",
  fptOrange: "#F36F21",
  fptGreen: "#0DB14B",
  darkBlue: "#092156",
};

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: colorVariants,
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl",
      lg: "text-5xl lg:text-7xl",
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
      color: ["fptBlue", "fptOrange", "fptGreen", "darkBlue"],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block",

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
      color: ["foreground", "fptBlue", "fptOrange", "fptGreen", "darkBlue"],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

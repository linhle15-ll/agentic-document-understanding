import { SVGProps } from "react";
import { StaticImageData } from "next/image";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type CardProps = {
  name: string;
  description?: string | string[];
  descriptionArr?: string[];
  illustration?: StaticImageData | string ;
  href?: string;
  reverse?: boolean;
  icon?: string | React.ReactNode | StaticImport;
  documentation?: string;
  playground?: string;
}
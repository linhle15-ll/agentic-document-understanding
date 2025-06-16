import { SVGProps } from "react";
import { StaticImageData } from "next/image";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface CardProps{
  name: string ;
  description?: string | string[];
  descriptionArr?: string[];
  illustration?: StaticImageData | StaticImport | string ;
  href?: string;
  icon?: React.ReactNode ;
  documentation?: string;
  playground?: string;
}

export interface ProjectProps{
  label: string;
  key: string;
  createdAt: string;
  updatedAt: string;
  actions: string[] // Use switch case to determine actions
}

export interface ProjectExtractionProps extends ProjectProps {
  _id: string,
}

export interface ProjectApiProps extends ProjectProps {
  APIKey: string;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from "react";
import { clsx, type ClassValue } from "clsx";
import { tv, VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ReactButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  disabled? : boolean
  name?: string
  onClick?: () => void
  className: string
}

const Index: FC<ReactButtonProps> = ({...props}) => {
  console.log(props);
  return <button className={props?.className} disabled={props?.disabled} onClick={props?.onClick}>BUTTON</button>;
};
export default Index;

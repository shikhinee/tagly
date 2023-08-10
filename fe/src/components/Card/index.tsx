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
  return <div className={props?.className} onClick={props?.onClick}>
    <div>Header</div>
    <div>Desc</div>
  </div>;
};
export default Index;

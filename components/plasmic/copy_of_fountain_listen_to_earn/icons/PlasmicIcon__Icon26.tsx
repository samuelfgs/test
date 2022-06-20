// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon26Icon(props: Icon26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 489.1 489.1"}
      xmlSpace={"preserve"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.25 215.7h191.2c6.8 0 12.3-5.5 12.3-12.3V12.3c0-6.8-5.5-12.3-12.3-12.3C91.25 0 .05 91.2.05 203.4c0 6.9 5.5 12.3 12.2 12.3zM191.15 25v166.2H24.95c6-88.9 77.3-160.2 166.2-166.2z"
        }
      ></path>

      <path
        d={
          "M44.45 266.8c0 122.6 99.7 222.3 222.3 222.3s222.3-99.7 222.3-222.3-99.7-222.3-222.3-222.3c-6.8 0-12.3 5.5-12.3 12.3v197.8H56.75c-6.8 0-12.3 5.5-12.3 12.2zm222.3 12.3c6.8 0 12.3-5.5 12.3-12.3V69.4c103.4 6.3 185.5 92.5 185.5 197.4 0 109.1-88.7 197.8-197.8 197.8-105 0-191.1-82.2-197.4-185.5h197.4z"
        }
      ></path>
    </svg>
  );
}

export default Icon26Icon;
/* prettier-ignore-end */

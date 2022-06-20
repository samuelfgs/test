// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _1F4CAsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _1F4CAsvgIcon(props: _1F4CAsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 72 72"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"#fff"} d={"M12.05 12.05h47.9v47.9h-47.9z"}></path>

      <path fill={"#b1cc33"} d={"M18.32 37.6h8v21.41h-8z"}></path>

      <path fill={"#92d3f5"} d={"M46.25 44.38h8V59h-8z"}></path>

      <path fill={"#d22f27"} d={"M32.28 21.69h8v37.32h-8z"}></path>

      <g
        fill={"none"}
        stroke={"#000"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
      >
        <path
          d={
            "M18.03 59.01V37.6h8v21.41m19.94 0V44.39h8v14.62M12.75 31.28h15.74m15.02 9.54h15.94m-1.97 9.55h1.69"
          }
        ></path>

        <path d={"M12.05 12.05h47.9v47.9h-47.9z"}></path>

        <path
          d={
            "M32 59.01V21.73h8v37.28M12.39 40.82h2.13m-2.13 9.55h2.13m28.99-19.09h15.94m-15.94-9.54h15.94m-46.7 0h15.74"
          }
        ></path>
      </g>
    </svg>
  );
}

export default _1F4CAsvgIcon;
/* prettier-ignore-end */

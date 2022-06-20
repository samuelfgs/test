// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _26A1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _26A1SvgIcon(props: _26A1SvgIconProps) {
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

      <path
        fill={"#FCEA2B"}
        d={
          "M48.143 3.726L16.316 37.851c-.603.646-.114 1.659.801 1.659h19.107L19.15 67.048c-.166.268.215.537.443.312l36.063-35.704c.643-.638.162-1.689-.773-1.689h-18.5l11.76-26.24z"
        }
      ></path>

      <path
        fill={"none"}
        stroke={"#000"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
        d={
          "M48.163 4.44l-31.84 33.342c-.618.646-.117 1.659.82 1.659h19.082L17.921 68.274l37.727-36.479c.66-.637.167-1.688-.79-1.688H36.384L48.163 4.441z"
        }
      ></path>
    </svg>
  );
}

export default _26A1SvgIcon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _1F4CEsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _1F4CEsvgIcon(props: _1F4CEsvgIconProps) {
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
        fill={"none"}
        stroke={"#000"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
        d={
          "M27.755 31.724l15.267 15.264a3 3 0 104.242-4.243l-23.069-23.07a6 6 0 10-8.485 8.485l25.198 25.305c3.906 3.905 10.237 3.905 14.142 0 3.906-3.905 3.906-10.237 0-14.142L42.547 26.82"
        }
      ></path>
    </svg>
  );
}

export default _1F4CEsvgIcon;
/* prettier-ignore-end */

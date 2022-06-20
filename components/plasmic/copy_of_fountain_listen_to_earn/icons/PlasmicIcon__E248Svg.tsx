// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type E248SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function E248SvgIcon(props: E248SvgIconProps) {
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
        fill={"#D0CFCE"}
        d={
          "M15.042 14.976a4 4 0 00-4 4V30.76l-.002 4.531c0 .28.328.434.543.253l5.026-4.39a1 1 0 01.644-.234h30.956a4 4 0 004-4v-7.944a4 4 0 00-4-4H15.042z"
        }
      ></path>

      <path
        fill={"#9B9B9A"}
        d={
          "M60.51 60.544a.33.33 0 00.542-.252l-.002-4.27h.001V44.076a4 4 0 00-4-4H24.103a4 4 0 00-4 4v7.944a4 4 0 004 4h30.858a1 1 0 01.644.235l4.905 4.288z"
        }
      ></path>

      <path
        fill={"none"}
        stroke={"#000"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
        d={
          "M15.042 14.976a4 4 0 00-4 4V30.76l-.002 4.531c0 .28.328.434.543.253l5.026-4.39a1 1 0 01.644-.234h30.956a4 4 0 004-4v-7.944a4 4 0 00-4-4H15.042zM60.51 60.544a.33.33 0 00.542-.252l-.002-4.27h.001V44.076a4 4 0 00-4-4H24.103a4 4 0 00-4 4v7.944a4 4 0 004 4h30.858a1 1 0 01.644.235l4.905 4.288z"
        }
      ></path>

      <circle cx={"31.997"} cy={"48.059"} r={"2"} fill={"#000"}></circle>

      <circle cx={"40.008"} cy={"48.059"} r={"2"} fill={"#000"}></circle>

      <circle cx={"48.02"} cy={"48.059"} r={"2"} fill={"#000"}></circle>
    </svg>
  );
}

export default E248SvgIcon;
/* prettier-ignore-end */

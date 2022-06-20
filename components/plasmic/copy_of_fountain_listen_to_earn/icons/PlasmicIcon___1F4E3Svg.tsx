// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _1F4E3SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _1F4E3SvgIcon(props: _1F4E3SvgIconProps) {
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
        fill={"#fff"}
        d={
          "M19.64 44.88l20.94 1.577 19.06 7.565v-37.19l-18.12 7.952-21.88 1.19z"
        }
      ></path>

      <path
        fill={"#d0cfce"}
        d={
          "M19.64 45v-4.116s25.39-.507 40 8.546v4.596c-15.21-10.43-40-9.142-40-9.142"
        }
      ></path>

      <path
        fill={"#d22f27"}
        d={"M12.85 25.98h6.787v18.63H12.85a2 2 0 01-2-2V27.98a2 2 0 012-2z"}
      ></path>

      <rect
        x={"59.64"}
        y={"15.29"}
        rx={"2"}
        ry={"2"}
        width={"6"}
        height={"40.01"}
        fill={"#ea5a47"}
      ></rect>

      <path
        fill={"#9b9b9a"}
        d={
          "M19.636 44.92l.628 4.031h-1.368l1.681 8.916h1.5l.38 2.016-6.475.076-2.835-15.04"
        }
      ></path>

      <path
        fill={"#ea5a47"}
        d={"M10.85 28.79H8.365a2 2 0 00-2 2v8.922a2 2 0 002 2h2.485"}
      ></path>

      <g
        fill={"none"}
        stroke={"#000"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
      >
        <path
          d={
            "M19.64 25.98s24.79 1.289 40-9.142m-40 28.042s24.79-1.289 40 9.142M12.85 25.98h6.787v18.63H12.85a2 2 0 01-2-2V27.98a2 2 0 012-2z"
          }
        ></path>

        <rect
          x={"59.64"}
          y={"15.29"}
          rx={"2"}
          ry={"2"}
          width={"6"}
          height={"40.01"}
        ></rect>

        <path
          d={
            "M19.636 44.92l.877 4.648h-1.5l1.564 8.299h.5l.38 2.016-5.476.076-2.835-15.04M19.64 25.98s24.79 1.289 40-9.142m-40 28.042s24.79-1.289 40 9.142M10.85 28.79H8.365a2 2 0 00-2 2v8.922a2 2 0 002 2h2.485M13.64 41h3"
          }
        ></path>
      </g>
    </svg>
  );
}

export default _1F4E3SvgIcon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon27Icon(props: Icon27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 1024 1024"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M272.064 319.984H48c-17.68 0-32 14.32-32 32V992c0 17.68 14.32 32 32 32h224.064c17.68 0 32-14.32 32-32V351.984c0-17.68-14.32-32-32-32zm-32 640.016H80V383.984h160.064V960zm383.68-449.744h-224.08c-17.68 0-32 14.32-32 32V992c0 17.68 14.32 32 32 32h224.08c17.68 0 32-14.32 32-32V542.256c0-17.696-14.304-32-32-32zm-32 449.744h-160.08V574.256h160.08V960zM976 0H752.272c-17.68 0-32 14.32-32 32v960c0 17.68 14.32 32 32 32H976c17.68 0 32-14.32 32-32V32c0-17.68-14.32-32-32-32zm-32 960H784.272V64H944v896z"
        }
      ></path>
    </svg>
  );
}

export default Icon27Icon;
/* prettier-ignore-end */

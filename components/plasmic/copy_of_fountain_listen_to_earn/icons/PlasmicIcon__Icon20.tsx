// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon20Icon(props: Icon20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 490 490"}
      xmlSpace={"preserve"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M295.2 257.8L251.4 295c-3.5 2.9-8.6 2.9-12 0l-43.8-37.1L16.7 409.1h456.6L295.2 257.8zM0 92.2v305.6L180.1 245z"
        }
      ></path>

      <path
        d={"M16.7 80.9L245 274.6 473.3 80.9zM309.9 245L490 397.8V92.2z"}
      ></path>
    </svg>
  );
}

export default Icon20Icon;
/* prettier-ignore-end */

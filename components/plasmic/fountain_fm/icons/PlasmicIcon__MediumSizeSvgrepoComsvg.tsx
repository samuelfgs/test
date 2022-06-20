// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MediumSizeSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MediumSizeSvgrepoComsvgIcon(
  props: MediumSizeSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 483.86 483.86"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M483.86 112.345h-26.699c-6.952 0-25.143 7.552-25.143 13.981v233.467c0 6.445 18.191 11.729 25.143 11.729h26.699v51.835H311.052v-51.835h34.57V129.615h-6.016L256.42 423.356h-64.406l-82.11-293.741h-6.219v241.906h34.555v51.835H0v-51.835h19.173c7.527 0 15.383-5.283 15.383-11.729V126.326c0-6.43-7.855-13.981-15.383-13.981H0V60.504h179.155l58.496 207.342h1.574l59.073-207.342H483.86v51.841z"
        }
      ></path>
    </svg>
  );
}

export default MediumSizeSvgrepoComsvgIcon;
/* prettier-ignore-end */

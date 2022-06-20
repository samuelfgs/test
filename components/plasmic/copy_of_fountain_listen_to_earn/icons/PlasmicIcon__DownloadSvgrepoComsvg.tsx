// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DownloadSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DownloadSvgrepoComsvgIcon(
  props: DownloadSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 330 330"}
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
          "M154.389 255.602c.351.351.719.683 1.103.998.169.138.347.258.52.388.218.164.432.333.659.484.212.142.432.265.649.395.202.121.4.248.608.359.223.12.453.221.681.328.215.102.427.21.648.301.223.092.45.167.676.247.236.085.468.175.709.248.226.068.456.119.684.176.246.062.489.131.739.181.263.052.529.083.794.121.219.031.435.073.658.095.492.048.986.075 1.48.075s.988-.026 1.479-.075c.226-.022.444-.064.667-.096.262-.037.524-.068.784-.12.255-.05.504-.121.754-.184.223-.057.448-.105.669-.172.246-.075.483-.167.724-.253.221-.08.444-.152.662-.242.225-.093.44-.202.659-.306.225-.106.452-.206.672-.324.21-.112.408-.239.611-.361.217-.13.437-.252.648-.394.222-.148.431-.314.644-.473.179-.134.362-.258.536-.4.365-.3.714-.617 1.049-.949.016-.016.034-.028.049-.044l70.002-69.998c5.858-5.858 5.858-15.355 0-21.213-5.857-5.857-15.355-5.858-21.213-.001l-44.396 44.393V25c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15v183.785l-44.392-44.391c-5.857-5.858-15.355-5.858-21.213 0-5.858 5.858-5.858 15.355 0 21.213l69.997 69.995z"
        }
      ></path>

      <path
        d={
          "M315 160c-8.284 0-15 6.716-15 15v115H30V175c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15v130c0 8.284 6.716 15 15 15h300c8.284 0 15-6.716 15-15V175c0-8.284-6.716-15-15-15z"
        }
      ></path>
    </svg>
  );
}

export default DownloadSvgrepoComsvgIcon;
/* prettier-ignore-end */

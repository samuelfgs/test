// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6BobAUw5T3TCqT8ypcszbG
// Component: pKGAN4RzuKQAy
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fountain_fm_css from "../fountain_fm/plasmic_fountain_fm.module.css"; // plasmic-import: q7mc6yKyK23FBh7x1aGwnG/projectcss
import projectcss from "./plasmic_copy_of_fountain_listen_to_earn.module.css"; // plasmic-import: 6BobAUw5T3TCqT8ypcszbG/projectcss
import sty from "./PlasmicDownload2.module.css"; // plasmic-import: pKGAN4RzuKQAy/css

export type PlasmicDownload2__VariantMembers = {};

export type PlasmicDownload2__VariantsArgs = {};
type VariantPropType = keyof PlasmicDownload2__VariantsArgs;
export const PlasmicDownload2__VariantProps = new Array<VariantPropType>();

export type PlasmicDownload2__ArgsType = {};
type ArgPropType = keyof PlasmicDownload2__ArgsType;
export const PlasmicDownload2__ArgProps = new Array<ArgPropType>();

export type PlasmicDownload2__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultDownload2Props {
  className?: string;
}

export const defaultDownload2__Args: Partial<PlasmicDownload2__ArgsType> = {};

function PlasmicDownload2__RenderFunc(props: {
  variants: PlasmicDownload2__VariantsArgs;
  args: PlasmicDownload2__ArgsType;
  overrides: PlasmicDownload2__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultDownload2__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_fountain_fm_css.plasmic_tokens,
        sty.root
      )}
    >
      <p.PlasmicImg
        alt={""}
        className={classNames(sty.img__sFbQ)}
        displayHeight={"auto" as const}
        displayMaxHeight={"none" as const}
        displayMaxWidth={"100%" as const}
        displayMinHeight={"0" as const}
        displayMinWidth={"0" as const}
        displayWidth={"auto" as const}
        loading={"lazy" as const}
        src={{
          src: "/plasmic/copy_of_fountain_listen_to_earn/images/image48.webp",
          fullWidth: 216,
          fullHeight: 64,
          aspectRatio: undefined
        }}
      />

      <p.PlasmicImg
        alt={""}
        className={classNames(sty.img___8FLi)}
        displayHeight={"auto" as const}
        displayMaxHeight={"none" as const}
        displayMaxWidth={"100%" as const}
        displayMinHeight={"0" as const}
        displayMinWidth={"0" as const}
        displayWidth={"auto" as const}
        loading={"lazy" as const}
        src={{
          src: "/plasmic/copy_of_fountain_listen_to_earn/images/image49.webp",
          fullWidth: 216,
          fullHeight: 64,
          aspectRatio: undefined
        }}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDownload2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDownload2__VariantsArgs;
    args?: PlasmicDownload2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDownload2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicDownload2__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicDownload2__ArgProps,
      internalVariantPropNames: PlasmicDownload2__VariantProps
    });

    return PlasmicDownload2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDownload2";
  } else {
    func.displayName = `PlasmicDownload2.${nodeName}`;
  }
  return func;
}

export const PlasmicDownload2 = Object.assign(
  // Top-level PlasmicDownload2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicDownload2
    internalVariantProps: PlasmicDownload2__VariantProps,
    internalArgProps: PlasmicDownload2__ArgProps
  }
);

export default PlasmicDownload2;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6BobAUw5T3TCqT8ypcszbG
// Component: bcm9NMyayklhsH
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
import sty from "./PlasmicHeroSection.module.css"; // plasmic-import: bcm9NMyayklhsH/css

export type PlasmicHeroSection__VariantMembers = {};

export type PlasmicHeroSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeroSection__VariantsArgs;
export const PlasmicHeroSection__VariantProps = new Array<VariantPropType>();

export type PlasmicHeroSection__ArgsType = {};
type ArgPropType = keyof PlasmicHeroSection__ArgsType;
export const PlasmicHeroSection__ArgProps = new Array<ArgPropType>();

export type PlasmicHeroSection__OverridesType = {
  root?: p.Flex<"div">;
  columns?: p.Flex<"div">;
};

export interface DefaultHeroSectionProps {
  className?: string;
}

export const defaultHeroSection__Args: Partial<PlasmicHeroSection__ArgsType> =
  {};

function PlasmicHeroSection__RenderFunc(props: {
  variants: PlasmicHeroSection__VariantsArgs;
  args: PlasmicHeroSection__ArgsType;
  overrides: PlasmicHeroSection__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultHeroSection__Args, props.args);
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
      <div
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        className={classNames(projectcss.all, sty.columns)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns"],
  columns: ["columns"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeroSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeroSection__VariantsArgs;
    args?: PlasmicHeroSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeroSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeroSection__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHeroSection__ArgProps,
      internalVariantPropNames: PlasmicHeroSection__VariantProps
    });

    return PlasmicHeroSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeroSection";
  } else {
    func.displayName = `PlasmicHeroSection.${nodeName}`;
  }
  return func;
}

export const PlasmicHeroSection = Object.assign(
  // Top-level PlasmicHeroSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),

    // Metadata about props expected for PlasmicHeroSection
    internalVariantProps: PlasmicHeroSection__VariantProps,
    internalArgProps: PlasmicHeroSection__ArgProps
  }
);

export default PlasmicHeroSection;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6BobAUw5T3TCqT8ypcszbG
// Component: N1s9LeizF64I8
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

import { useScreenVariants as useScreenVariantsuXvTXvy0VuZNuyJ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: UXvTXvy0VuZNuyJ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fountain_fm_css from "../fountain_fm/plasmic_fountain_fm.module.css"; // plasmic-import: q7mc6yKyK23FBh7x1aGwnG/projectcss
import projectcss from "./plasmic_copy_of_fountain_listen_to_earn.module.css"; // plasmic-import: 6BobAUw5T3TCqT8ypcszbG/projectcss
import sty from "./PlasmicPlayStore.module.css"; // plasmic-import: N1s9LeizF64I8/css

export type PlasmicPlayStore__VariantMembers = {};

export type PlasmicPlayStore__VariantsArgs = {};
type VariantPropType = keyof PlasmicPlayStore__VariantsArgs;
export const PlasmicPlayStore__VariantProps = new Array<VariantPropType>();

export type PlasmicPlayStore__ArgsType = {};
type ArgPropType = keyof PlasmicPlayStore__ArgsType;
export const PlasmicPlayStore__ArgProps = new Array<ArgPropType>();

export type PlasmicPlayStore__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultPlayStoreProps {
  className?: string;
}

export const defaultPlayStore__Args: Partial<PlasmicPlayStore__ArgsType> = {};

function PlasmicPlayStore__RenderFunc(props: {
  variants: PlasmicPlayStore__VariantsArgs;
  args: PlasmicPlayStore__ArgsType;
  overrides: PlasmicPlayStore__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultPlayStore__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsuXvTXvy0VuZNuyJ()
  });

  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_fountain_fm_css.plasmic_tokens,
        sty.root
      )}
      component={Link}
      href={
        "https://play.google.com/store/apps/details?id=fm.fountain.apps" as const
      }
      platform={"nextjs"}
      target={"_blank" as const}
    >
      {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
        <p.PlasmicImg
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"40px" as const}
          displayMaxHeight={"none" as const}
          displayMaxWidth={"100%" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"auto" as const}
          loading={"lazy" as const}
          src={{
            src: "/plasmic/copy_of_fountain_listen_to_earn/images/image8.webp",
            fullWidth: 216,
            fullHeight: 64,
            aspectRatio: undefined
          }}
        />
      ) : null}
    </p.PlasmicLink>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPlayStore__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPlayStore__VariantsArgs;
    args?: PlasmicPlayStore__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPlayStore__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPlayStore__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPlayStore__ArgProps,
      internalVariantPropNames: PlasmicPlayStore__VariantProps
    });

    return PlasmicPlayStore__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPlayStore";
  } else {
    func.displayName = `PlasmicPlayStore.${nodeName}`;
  }
  return func;
}

export const PlasmicPlayStore = Object.assign(
  // Top-level PlasmicPlayStore renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicPlayStore
    internalVariantProps: PlasmicPlayStore__VariantProps,
    internalArgProps: PlasmicPlayStore__ArgProps
  }
);

export default PlasmicPlayStore;
/* prettier-ignore-end */

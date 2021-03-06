// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6BobAUw5T3TCqT8ypcszbG
// Component: 8vJ-1GRAVOPHG
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
import Button from "../../Button"; // plasmic-import: KhbeBVaAisx47/component

import { useScreenVariants as useScreenVariantsuXvTXvy0VuZNuyJ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: UXvTXvy0VuZNuyJ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fountain_fm_css from "../fountain_fm/plasmic_fountain_fm.module.css"; // plasmic-import: q7mc6yKyK23FBh7x1aGwnG/projectcss
import projectcss from "./plasmic_copy_of_fountain_listen_to_earn.module.css"; // plasmic-import: 6BobAUw5T3TCqT8ypcszbG/projectcss
import sty from "./PlasmicCtaBlock.module.css"; // plasmic-import: 8vJ-1GRAVOPHG/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: S2Divheo_3CFcy/icon

export type PlasmicCtaBlock__VariantMembers = {};

export type PlasmicCtaBlock__VariantsArgs = {};
type VariantPropType = keyof PlasmicCtaBlock__VariantsArgs;
export const PlasmicCtaBlock__VariantProps = new Array<VariantPropType>();

export type PlasmicCtaBlock__ArgsType = {};
type ArgPropType = keyof PlasmicCtaBlock__ArgsType;
export const PlasmicCtaBlock__ArgProps = new Array<ArgPropType>();

export type PlasmicCtaBlock__OverridesType = {
  root?: p.Flex<"section">;
  outer?: p.Flex<"div">;
  container?: p.Flex<"div">;
  column?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  button?: p.Flex<typeof Button>;
};

export interface DefaultCtaBlockProps {
  className?: string;
}

export const defaultCtaBlock__Args: Partial<PlasmicCtaBlock__ArgsType> = {};

function PlasmicCtaBlock__RenderFunc(props: {
  variants: PlasmicCtaBlock__VariantsArgs;
  args: PlasmicCtaBlock__ArgsType;
  overrides: PlasmicCtaBlock__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultCtaBlock__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsuXvTXvy0VuZNuyJ()
  });

  return (
    <section
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
        data-plasmic-name={"outer"}
        data-plasmic-override={overrides.outer}
        className={classNames(projectcss.all, sty.outer)}
      >
        <div
          data-plasmic-name={"container"}
          data-plasmic-override={overrides.container}
          className={classNames(projectcss.all, sty.container)}
        >
          <div
            data-plasmic-name={"column"}
            data-plasmic-override={overrides.column}
            className={classNames(projectcss.all, sty.column)}
          >
            <h2
              data-plasmic-name={"h2"}
              data-plasmic-override={overrides.h2}
              className={classNames(
                projectcss.all,
                projectcss.h2,
                projectcss.__wab_text,
                sty.h2
              )}
            >
              {"To Make Requests For The\nFurther Information"}
            </h2>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__kiu3
              )}
            >
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            </div>
          </div>
        </div>

        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames("__wab_instance", sty.button)}
          color={"blue" as const}
          link={"#" as const}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__bsavt
            )}
          >
            {"Join With Now"}
          </div>
        </Button>
      </div>
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "outer", "container", "column", "h2", "button"],
  outer: ["outer", "container", "column", "h2", "button"],
  container: ["container", "column", "h2"],
  column: ["column", "h2"],
  h2: ["h2"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "section";
  outer: "div";
  container: "div";
  column: "div";
  h2: "h2";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCtaBlock__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCtaBlock__VariantsArgs;
    args?: PlasmicCtaBlock__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCtaBlock__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCtaBlock__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCtaBlock__ArgProps,
      internalVariantPropNames: PlasmicCtaBlock__VariantProps
    });

    return PlasmicCtaBlock__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCtaBlock";
  } else {
    func.displayName = `PlasmicCtaBlock.${nodeName}`;
  }
  return func;
}

export const PlasmicCtaBlock = Object.assign(
  // Top-level PlasmicCtaBlock renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    outer: makeNodeComponent("outer"),
    container: makeNodeComponent("container"),
    column: makeNodeComponent("column"),
    h2: makeNodeComponent("h2"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicCtaBlock
    internalVariantProps: PlasmicCtaBlock__VariantProps,
    internalArgProps: PlasmicCtaBlock__ArgProps
  }
);

export default PlasmicCtaBlock;
/* prettier-ignore-end */

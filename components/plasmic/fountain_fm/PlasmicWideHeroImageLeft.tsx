// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: q7mc6yKyK23FBh7x1aGwnG
// Component: 8b8MQQLOS5
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

import { useScreenVariants as useScreenVariantsyLYj6CrpIdr } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: yL-yj6_CrpIDR/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_fountain_fm.module.css"; // plasmic-import: q7mc6yKyK23FBh7x1aGwnG/projectcss
import sty from "./PlasmicWideHeroImageLeft.module.css"; // plasmic-import: 8b8MQQLOS5/css

export type PlasmicWideHeroImageLeft__VariantMembers = {};

export type PlasmicWideHeroImageLeft__VariantsArgs = {};
type VariantPropType = keyof PlasmicWideHeroImageLeft__VariantsArgs;
export const PlasmicWideHeroImageLeft__VariantProps =
  new Array<VariantPropType>();

export type PlasmicWideHeroImageLeft__ArgsType = {};
type ArgPropType = keyof PlasmicWideHeroImageLeft__ArgsType;
export const PlasmicWideHeroImageLeft__ArgProps = new Array<ArgPropType>();

export type PlasmicWideHeroImageLeft__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  art4?: p.Flex<"div">;
};

export interface DefaultWideHeroImageLeftProps {
  className?: string;
}

export const defaultWideHeroImageLeft__Args: Partial<PlasmicWideHeroImageLeft__ArgsType> =
  {};

function PlasmicWideHeroImageLeft__RenderFunc(props: {
  variants: PlasmicWideHeroImageLeft__VariantsArgs;
  args: PlasmicWideHeroImageLeft__ArgsType;
  overrides: PlasmicWideHeroImageLeft__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultWideHeroImageLeft__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsyLYj6CrpIdr()
  });

  return (
    (hasVariant(globalVariants, "screen", "_1440") ? true : true) ? (
      <p.Stack
        as={"div"}
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        hasGap={true}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          sty.root
        )}
      >
        <div className={classNames(projectcss.all, sty.freeBox__wuf3G)}>
          <div className={classNames(projectcss.all, sty.freeBox___9Nf1M)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__fkzeO)}
            >
              {(hasVariant(globalVariants, "screen", "_414") ? true : true) ? (
                <p.PlasmicImg
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={
                    hasVariant(globalVariants, "screen", "_777")
                      ? ("378px" as const)
                      : ("511px" as const)
                  }
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"none" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={
                    hasVariant(globalVariants, "screen", "_777")
                      ? ("283.56%" as const)
                      : hasVariant(globalVariants, "screen", "_1440")
                      ? ("257.09%" as const)
                      : ("100%" as const)
                  }
                  src={{
                    src: "/plasmic/fountain_fm/images/previewed40Png.png",
                    fullWidth: 1080,
                    fullHeight: 1080,
                    aspectRatio: undefined
                  }}
                />
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "_1440") ? true : false
              ) ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__sxSl
                  )}
                >
                  {
                    "https://www.appsflyer.com/blog/mobile-marketing/universal-links-app-links/"
                  }
                </div>
              ) : null}
            </p.Stack>
          </div>

          <div
            data-plasmic-name={"art4"}
            data-plasmic-override={overrides.art4}
            className={classNames(projectcss.all, sty.art4)}
          >
            {(hasVariant(globalVariants, "screen", "_1440") ? true : true) ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__nDxiK)}
              >
                {(
                  hasVariant(globalVariants, "screen", "_414")
                    ? true
                    : hasVariant(globalVariants, "screen", "_1440")
                    ? true
                    : false
                ) ? (
                  <h3
                    className={classNames(
                      projectcss.all,
                      projectcss.h3,
                      projectcss.__wab_text,
                      sty.h3__d0WmL
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "_1440")
                      ? "Support your favourite podcasts with Bitcoin"
                      : "Give back to podcasts you love"}
                  </h3>
                ) : null}
                {(
                  hasVariant(globalVariants, "screen", "_414") ? true : true
                ) ? (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__nu5Bu
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "_1440")
                      ? ""
                      : "Keep your earnings or send some to hosts and guests when you get value from the podcast. Think of the “Boost” button as a “Like” button that you pay to press. You can pay as much or as little as you like."}
                  </div>
                ) : null}
              </p.Stack>
            ) : null}
          </div>
        </div>

        {(hasVariant(globalVariants, "screen", "_414") ? true : false) ? (
          <h3
            className={classNames(
              projectcss.all,
              projectcss.h3,
              projectcss.__wab_text,
              sty.h3__nZq0S
            )}
          >
            {"Give back to podcasts you love"}
          </h3>
        ) : null}
        {(
          hasVariant(globalVariants, "screen", "_414")
            ? true
            : hasVariant(globalVariants, "screen", "_1440")
            ? true
            : true
        ) ? (
          <h3
            className={classNames(
              projectcss.all,
              projectcss.h3,
              projectcss.__wab_text,
              sty.h3__yMhPl
            )}
          >
            {hasVariant(globalVariants, "screen", "_1440")
              ? "Support your favourite podcasts with Bitcoin"
              : "Give back to podcasts you love"}
          </h3>
        ) : null}
      </p.Stack>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "art4"],
  img: ["img"],
  art4: ["art4"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  art4: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicWideHeroImageLeft__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWideHeroImageLeft__VariantsArgs;
    args?: PlasmicWideHeroImageLeft__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicWideHeroImageLeft__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicWideHeroImageLeft__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicWideHeroImageLeft__ArgProps,
      internalVariantPropNames: PlasmicWideHeroImageLeft__VariantProps
    });

    return PlasmicWideHeroImageLeft__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWideHeroImageLeft";
  } else {
    func.displayName = `PlasmicWideHeroImageLeft.${nodeName}`;
  }
  return func;
}

export const PlasmicWideHeroImageLeft = Object.assign(
  // Top-level PlasmicWideHeroImageLeft renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    art4: makeNodeComponent("art4"),

    // Metadata about props expected for PlasmicWideHeroImageLeft
    internalVariantProps: PlasmicWideHeroImageLeft__VariantProps,
    internalArgProps: PlasmicWideHeroImageLeft__ArgProps
  }
);

export default PlasmicWideHeroImageLeft;
/* prettier-ignore-end */

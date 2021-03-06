// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6BobAUw5T3TCqT8ypcszbG
// Component: JYhxZLCM4CXrx
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
import { TweetWrapper } from "@plasmicpkgs/react-twitter-widgets"; // plasmic-import: RZqWqT2DfR/codeComponent
import RecentPosts from "../../RecentPosts"; // plasmic-import: ES5fdpvJSG9xVp/component
import Footer from "../../Footer"; // plasmic-import: nmBaA0odzpiNWE/component

import { useScreenVariants as useScreenVariantsuXvTXvy0VuZNuyJ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: UXvTXvy0VuZNuyJ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fountain_fm_css from "../fountain_fm/plasmic_fountain_fm.module.css"; // plasmic-import: q7mc6yKyK23FBh7x1aGwnG/projectcss
import projectcss from "./plasmic_copy_of_fountain_listen_to_earn.module.css"; // plasmic-import: 6BobAUw5T3TCqT8ypcszbG/projectcss
import sty from "./PlasmicBlogArticleTemplate.module.css"; // plasmic-import: JYhxZLCM4CXrx/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: S2Divheo_3CFcy/icon

export type PlasmicBlogArticleTemplate__VariantMembers = {};

export type PlasmicBlogArticleTemplate__VariantsArgs = {};
type VariantPropType = keyof PlasmicBlogArticleTemplate__VariantsArgs;
export const PlasmicBlogArticleTemplate__VariantProps =
  new Array<VariantPropType>();

export type PlasmicBlogArticleTemplate__ArgsType = {};
type ArgPropType = keyof PlasmicBlogArticleTemplate__ArgsType;
export const PlasmicBlogArticleTemplate__ArgProps = new Array<ArgPropType>();

export type PlasmicBlogArticleTemplate__OverridesType = {
  root?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  h4?: p.Flex<"h4">;
  ul?: p.Flex<"ul">;
  img?: p.Flex<typeof p.PlasmicImg>;
  button?: p.Flex<typeof Button>;
  tweet?: p.Flex<typeof TweetWrapper>;
  recentPosts?: p.Flex<typeof RecentPosts>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultBlogArticleTemplateProps {}

export const defaultBlogArticleTemplate__Args: Partial<PlasmicBlogArticleTemplate__ArgsType> =
  {};

function PlasmicBlogArticleTemplate__RenderFunc(props: {
  variants: PlasmicBlogArticleTemplate__VariantsArgs;
  args: PlasmicBlogArticleTemplate__ArgsType;
  overrides: PlasmicBlogArticleTemplate__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultBlogArticleTemplate__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsuXvTXvy0VuZNuyJ()
  });

  return (
    <React.Fragment>
      {}

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
            plasmic_fountain_fm_css.plasmic_tokens,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__vl9To)}>
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <div className={classNames(projectcss.all, sty.freeBox__y6Unk)}>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__i2DRr
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__uz0Ua
                    )}
                  >
                    {"< Blog"}
                  </div>
                </p.PlasmicLink>

                <div className={classNames(projectcss.all, sty.freeBox__gmkCq)}>
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
                    {"The blog post title can run over several lines if needed"}
                  </h2>

                  <h6
                    className={classNames(
                      projectcss.all,
                      projectcss.h6,
                      projectcss.__wab_text,
                      sty.h6__x6O5G
                    )}
                  >
                    {"May 18, 2022"}
                  </h6>

                  <h4
                    data-plasmic-name={"h4"}
                    data-plasmic-override={overrides.h4}
                    className={classNames(
                      projectcss.all,
                      projectcss.h4,
                      projectcss.__wab_text,
                      sty.h4
                    )}
                  >
                    {"Subheadline"}
                  </h4>

                  <h6
                    className={classNames(
                      projectcss.all,
                      projectcss.h6,
                      projectcss.__wab_text,
                      sty.h6__oVH2
                    )}
                  >
                    {"Body copy"}
                  </h6>

                  <h6
                    className={classNames(
                      projectcss.all,
                      projectcss.h6,
                      projectcss.__wab_text,
                      sty.h6__swH5C
                    )}
                  >
                    {"Bullet point list:"}
                  </h6>

                  <h6
                    className={classNames(
                      projectcss.all,
                      projectcss.h6,
                      projectcss.__wab_text,
                      sty.h6___0BybN
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      <ul
                        data-plasmic-name={"ul"}
                        data-plasmic-override={overrides.ul}
                        className={classNames(
                          projectcss.all,
                          projectcss.ul,
                          sty.ul
                        )}
                      >
                        <li
                          className={classNames(
                            projectcss.all,
                            projectcss.li,
                            projectcss.__wab_text,
                            sty.li__ymiR9
                          )}
                        >
                          {"Enter some text"}
                        </li>

                        <li
                          className={classNames(
                            projectcss.all,
                            projectcss.li,
                            projectcss.__wab_text,
                            sty.li__qmG9N
                          )}
                        >
                          {"Enter some text"}
                        </li>

                        <li
                          className={classNames(
                            projectcss.all,
                            projectcss.li,
                            projectcss.__wab_text,
                            sty.li__gF8Ij
                          )}
                        >
                          {"Enter some text"}
                        </li>
                      </ul>
                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  </h6>

                  <p.PlasmicImg
                    data-plasmic-name={"img"}
                    data-plasmic-override={overrides.img}
                    alt={""}
                    className={classNames(sty.img)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"829px" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"100%" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/copy_of_fountain_listen_to_earn/images/image15.png",
                      fullWidth: 1920,
                      fullHeight: 1080,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jr7Ow
                    )}
                  >
                    {"Image caption"}
                  </div>

                  <h6
                    className={classNames(
                      projectcss.all,
                      projectcss.h6,
                      projectcss.__wab_text,
                      sty.h6___56WQj
                    )}
                  >
                    {"A button:"}
                  </h6>

                  <Button
                    data-plasmic-name={"button"}
                    data-plasmic-override={overrides.button}
                    className={classNames("__wab_instance", sty.button)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__biio5
                      )}
                    >
                      {"Button"}
                    </div>
                  </Button>

                  <h6
                    className={classNames(
                      projectcss.all,
                      projectcss.h6,
                      projectcss.__wab_text,
                      sty.h6__eai4D
                    )}
                  >
                    {"A tweet:"}
                  </h6>

                  <TweetWrapper
                    data-plasmic-name={"tweet"}
                    data-plasmic-override={overrides.tweet}
                    className={classNames("__wab_instance", sty.tweet)}
                    tweetId={"1381980305305694209" as const}
                  />

                  {(
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? true
                      : false
                  ) ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__jPgGq
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobileOnly") ? (
                        <React.Fragment>
                          <React.Fragment>{""}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ fontWeight: 700, color: "#000000" }}
                          >
                            {"Next >"}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <p.PlasmicLink
                            className={classNames(
                              projectcss.all,
                              projectcss.a,
                              projectcss.__wab_text,
                              projectcss.plasmic_default__inline,
                              sty.link__dnduv
                            )}
                            component={Link}
                            href={
                              "What is The Bitcoin Lightning Network?" as const
                            }
                            platform={"nextjs"}
                          >
                            <React.Fragment>
                              <React.Fragment>{""}</React.Fragment>
                              <span
                                className={
                                  "plasmic_default__all plasmic_default__span"
                                }
                                style={{ color: "#000000" }}
                              >
                                {"What is The Bitcoin Lightning Network?"}
                              </span>
                              <React.Fragment>{""}</React.Fragment>
                            </React.Fragment>
                          </p.PlasmicLink>
                          <React.Fragment>{""}</React.Fragment>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <React.Fragment>{""}</React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ fontWeight: 700, color: "#000000" }}
                          >
                            {"Next >"}
                          </span>
                          <React.Fragment>{"\n"}</React.Fragment>
                          <p.PlasmicLink
                            className={classNames(
                              projectcss.all,
                              projectcss.a,
                              projectcss.__wab_text,
                              projectcss.plasmic_default__inline,
                              sty.link__cIbAa
                            )}
                            component={Link}
                            href={
                              "What is The Bitcoin Lightning Network?" as const
                            }
                            platform={"nextjs"}
                          >
                            <React.Fragment>
                              <React.Fragment>{""}</React.Fragment>
                              <span
                                className={
                                  "plasmic_default__all plasmic_default__span"
                                }
                                style={{ color: "#000000" }}
                              >
                                {"What is The Bitcoin Lightning Network?"}
                              </span>
                              <React.Fragment>{""}</React.Fragment>
                            </React.Fragment>
                          </p.PlasmicLink>
                          <React.Fragment>{""}</React.Fragment>
                        </React.Fragment>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>

          <RecentPosts
            data-plasmic-name={"recentPosts"}
            data-plasmic-override={overrides.recentPosts}
            className={classNames("__wab_instance", sty.recentPosts)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "h2",
    "h4",
    "ul",
    "img",
    "button",
    "tweet",
    "recentPosts",
    "footer"
  ],
  h2: ["h2"],
  h4: ["h4"],
  ul: ["ul"],
  img: ["img"],
  button: ["button"],
  tweet: ["tweet"],
  recentPosts: ["recentPosts"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  h2: "h2";
  h4: "h4";
  ul: "ul";
  img: typeof p.PlasmicImg;
  button: typeof Button;
  tweet: typeof TweetWrapper;
  recentPosts: typeof RecentPosts;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBlogArticleTemplate__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBlogArticleTemplate__VariantsArgs;
    args?: PlasmicBlogArticleTemplate__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBlogArticleTemplate__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBlogArticleTemplate__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicBlogArticleTemplate__ArgProps,
      internalVariantPropNames: PlasmicBlogArticleTemplate__VariantProps
    });

    return PlasmicBlogArticleTemplate__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBlogArticleTemplate";
  } else {
    func.displayName = `PlasmicBlogArticleTemplate.${nodeName}`;
  }
  return func;
}

export const PlasmicBlogArticleTemplate = Object.assign(
  // Top-level PlasmicBlogArticleTemplate renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h2: makeNodeComponent("h2"),
    h4: makeNodeComponent("h4"),
    ul: makeNodeComponent("ul"),
    img: makeNodeComponent("img"),
    button: makeNodeComponent("button"),
    tweet: makeNodeComponent("tweet"),
    recentPosts: makeNodeComponent("recentPosts"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicBlogArticleTemplate
    internalVariantProps: PlasmicBlogArticleTemplate__VariantProps,
    internalArgProps: PlasmicBlogArticleTemplate__ArgProps
  }
);

export default PlasmicBlogArticleTemplate;
/* prettier-ignore-end */

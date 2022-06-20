import * as React from "react";
import {
  PlasmicButton20,
  DefaultButton20Props
} from "./plasmic/copy_of_fountain_listen_to_earn/PlasmicButton20";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface Button20Props extends DefaultButton20Props {}

function Button20_(props: Button20Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton20.useBehavior<Button20Props>(
    props,
    ref
  );
  return <PlasmicButton20 {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<Button20Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button20Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const Button20 = React.forwardRef(Button20_) as any as ButtonComponentType;

export default Object.assign(Button20, {
  __plumeType: "button"
});

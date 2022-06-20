import * as React from "react";
import {
  PlasmicButton7,
  DefaultButton7Props
} from "./plasmic/copy_of_fountain_listen_to_earn/PlasmicButton7";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface Button7Props extends DefaultButton7Props {}

function Button7_(props: Button7Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton7.useBehavior<Button7Props>(props, ref);
  return <PlasmicButton7 {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<Button7Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button7Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const Button7 = React.forwardRef(Button7_) as any as ButtonComponentType;

export default Object.assign(Button7, {
  __plumeType: "button"
});

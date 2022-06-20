import * as React from "react";
import {
  PlasmicButton6,
  DefaultButton6Props
} from "./plasmic/copy_of_fountain_listen_to_earn/PlasmicButton6";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface Button6Props extends DefaultButton6Props {}

function Button6_(props: Button6Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton6.useBehavior<Button6Props>(props, ref);
  return <PlasmicButton6 {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<Button6Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button6Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const Button6 = React.forwardRef(Button6_) as any as ButtonComponentType;

export default Object.assign(Button6, {
  __plumeType: "button"
});

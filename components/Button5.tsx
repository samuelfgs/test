import * as React from "react";
import {
  PlasmicButton5,
  DefaultButton5Props
} from "./plasmic/copy_of_fountain_listen_to_earn/PlasmicButton5";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface Button5Props extends DefaultButton5Props {}

function Button5_(props: Button5Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton5.useBehavior<Button5Props>(props, ref);
  return <PlasmicButton5 {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<Button5Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button5Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const Button5 = React.forwardRef(Button5_) as any as ButtonComponentType;

export default Object.assign(Button5, {
  __plumeType: "button"
});

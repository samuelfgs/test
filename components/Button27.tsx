import * as React from "react";
import {
  PlasmicButton27,
  DefaultButton27Props
} from "./plasmic/copy_of_fountain_listen_to_earn/PlasmicButton27";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface Button27Props extends DefaultButton27Props {}

function Button27_(props: Button27Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton27.useBehavior<Button27Props>(
    props,
    ref
  );
  return <PlasmicButton27 {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<Button27Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button27Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const Button27 = React.forwardRef(Button27_) as any as ButtonComponentType;

export default Object.assign(Button27, {
  __plumeType: "button"
});

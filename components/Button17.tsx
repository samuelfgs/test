import * as React from "react";
import {
  PlasmicButton17,
  DefaultButton17Props
} from "./plasmic/copy_of_fountain_listen_to_earn/PlasmicButton17";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface Button17Props extends DefaultButton17Props {}

function Button17_(props: Button17Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton17.useBehavior<Button17Props>(
    props,
    ref
  );
  return <PlasmicButton17 {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<Button17Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button17Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const Button17 = React.forwardRef(Button17_) as any as ButtonComponentType;

export default Object.assign(Button17, {
  __plumeType: "button"
});

import * as React from "react";
import {
  PlasmicButton13,
  DefaultButton13Props
} from "./plasmic/copy_of_fountain_listen_to_earn/PlasmicButton13";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface Button13Props extends DefaultButton13Props {}

function Button13_(props: Button13Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton13.useBehavior<Button13Props>(
    props,
    ref
  );
  return <PlasmicButton13 {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<Button13Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button13Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const Button13 = React.forwardRef(Button13_) as any as ButtonComponentType;

export default Object.assign(Button13, {
  __plumeType: "button"
});

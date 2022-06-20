import * as React from "react";
import {
  PlasmicButton24,
  DefaultButton24Props
} from "./plasmic/copy_of_fountain_listen_to_earn/PlasmicButton24";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface Button24Props extends DefaultButton24Props {}

function Button24_(props: Button24Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton24.useBehavior<Button24Props>(
    props,
    ref
  );
  return <PlasmicButton24 {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<Button24Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button24Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const Button24 = React.forwardRef(Button24_) as any as ButtonComponentType;

export default Object.assign(Button24, {
  __plumeType: "button"
});

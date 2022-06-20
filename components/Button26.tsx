import * as React from "react";
import {
  PlasmicButton26,
  DefaultButton26Props
} from "./plasmic/copy_of_fountain_listen_to_earn/PlasmicButton26";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface Button26Props extends DefaultButton26Props {}

function Button26_(props: Button26Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton26.useBehavior<Button26Props>(
    props,
    ref
  );
  return <PlasmicButton26 {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<Button26Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button26Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const Button26 = React.forwardRef(Button26_) as any as ButtonComponentType;

export default Object.assign(Button26, {
  __plumeType: "button"
});

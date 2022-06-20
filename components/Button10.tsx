import * as React from "react";
import {
  PlasmicButton10,
  DefaultButton10Props
} from "./plasmic/copy_of_fountain_listen_to_earn/PlasmicButton10";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface Button10Props extends DefaultButton10Props {}

function Button10_(props: Button10Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton10.useBehavior<Button10Props>(
    props,
    ref
  );
  return <PlasmicButton10 {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<Button10Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button10Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const Button10 = React.forwardRef(Button10_) as any as ButtonComponentType;

export default Object.assign(Button10, {
  __plumeType: "button"
});

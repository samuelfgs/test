import * as React from "react";
import {
  PlasmicButton4,
  DefaultButton4Props
} from "./plasmic/copy_of_fountain_listen_to_earn/PlasmicButton4";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface Button4Props extends DefaultButton4Props {}

function Button4_(props: Button4Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton4.useBehavior<Button4Props>(props, ref);
  return <PlasmicButton4 {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<Button4Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button4Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const Button4 = React.forwardRef(Button4_) as any as ButtonComponentType;

export default Object.assign(Button4, {
  __plumeType: "button"
});

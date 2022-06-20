import * as React from "react";
import {
  PlasmicButton8,
  DefaultButton8Props
} from "./plasmic/copy_of_fountain_listen_to_earn/PlasmicButton8";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface Button8Props extends DefaultButton8Props {}

function Button8_(props: Button8Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton8.useBehavior<Button8Props>(props, ref);
  return <PlasmicButton8 {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<Button8Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button8Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const Button8 = React.forwardRef(Button8_) as any as ButtonComponentType;

export default Object.assign(Button8, {
  __plumeType: "button"
});

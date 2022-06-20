import * as React from "react";
import {
  PlasmicButton9,
  DefaultButton9Props
} from "./plasmic/copy_of_fountain_listen_to_earn/PlasmicButton9";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface Button9Props extends DefaultButton9Props {}

function Button9_(props: Button9Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton9.useBehavior<Button9Props>(props, ref);
  return <PlasmicButton9 {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<Button9Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button9Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const Button9 = React.forwardRef(Button9_) as any as ButtonComponentType;

export default Object.assign(Button9, {
  __plumeType: "button"
});

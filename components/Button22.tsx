import * as React from "react";
import {
  PlasmicButton22,
  DefaultButton22Props
} from "./plasmic/copy_of_fountain_listen_to_earn/PlasmicButton22";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface Button22Props extends DefaultButton22Props {}

function Button22_(props: Button22Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton22.useBehavior<Button22Props>(
    props,
    ref
  );
  return <PlasmicButton22 {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<Button22Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button22Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const Button22 = React.forwardRef(Button22_) as any as ButtonComponentType;

export default Object.assign(Button22, {
  __plumeType: "button"
});

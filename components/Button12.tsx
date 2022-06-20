import * as React from "react";
import {
  PlasmicButton12,
  DefaultButton12Props
} from "./plasmic/copy_of_fountain_listen_to_earn/PlasmicButton12";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface Button12Props extends DefaultButton12Props {}

function Button12_(props: Button12Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton12.useBehavior<Button12Props>(
    props,
    ref
  );
  return <PlasmicButton12 {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<Button12Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button12Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const Button12 = React.forwardRef(Button12_) as any as ButtonComponentType;

export default Object.assign(Button12, {
  __plumeType: "button"
});

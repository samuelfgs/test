import * as React from "react";
import {
  PlasmicButton25,
  DefaultButton25Props
} from "./plasmic/copy_of_fountain_listen_to_earn/PlasmicButton25";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface Button25Props extends DefaultButton25Props {}

function Button25_(props: Button25Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton25.useBehavior<Button25Props>(
    props,
    ref
  );
  return <PlasmicButton25 {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<Button25Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button25Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const Button25 = React.forwardRef(Button25_) as any as ButtonComponentType;

export default Object.assign(Button25, {
  __plumeType: "button"
});

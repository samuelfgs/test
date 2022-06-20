import * as React from "react";
import {
  PlasmicButton23,
  DefaultButton23Props
} from "./plasmic/copy_of_fountain_listen_to_earn/PlasmicButton23";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface Button23Props extends DefaultButton23Props {}

function Button23_(props: Button23Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton23.useBehavior<Button23Props>(
    props,
    ref
  );
  return <PlasmicButton23 {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<Button23Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button23Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const Button23 = React.forwardRef(Button23_) as any as ButtonComponentType;

export default Object.assign(Button23, {
  __plumeType: "button"
});

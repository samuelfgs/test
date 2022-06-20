import * as React from "react";
import {
  PlasmicButton19,
  DefaultButton19Props
} from "./plasmic/copy_of_fountain_listen_to_earn/PlasmicButton19";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface Button19Props extends DefaultButton19Props {}

function Button19_(props: Button19Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton19.useBehavior<Button19Props>(
    props,
    ref
  );
  return <PlasmicButton19 {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<Button19Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button19Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const Button19 = React.forwardRef(Button19_) as any as ButtonComponentType;

export default Object.assign(Button19, {
  __plumeType: "button"
});

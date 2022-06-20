import * as React from "react";
import {
  PlasmicButton21,
  DefaultButton21Props
} from "./plasmic/copy_of_fountain_listen_to_earn/PlasmicButton21";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface Button21Props extends DefaultButton21Props {}

function Button21_(props: Button21Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton21.useBehavior<Button21Props>(
    props,
    ref
  );
  return <PlasmicButton21 {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<Button21Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button21Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const Button21 = React.forwardRef(Button21_) as any as ButtonComponentType;

export default Object.assign(Button21, {
  __plumeType: "button"
});

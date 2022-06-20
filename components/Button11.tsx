import * as React from "react";
import {
  PlasmicButton11,
  DefaultButton11Props
} from "./plasmic/copy_of_fountain_listen_to_earn/PlasmicButton11";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface Button11Props extends DefaultButton11Props {}

function Button11_(props: Button11Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton11.useBehavior<Button11Props>(
    props,
    ref
  );
  return <PlasmicButton11 {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<Button11Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button11Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const Button11 = React.forwardRef(Button11_) as any as ButtonComponentType;

export default Object.assign(Button11, {
  __plumeType: "button"
});

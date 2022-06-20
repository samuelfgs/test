import * as React from "react";
import {
  PlasmicButton14,
  DefaultButton14Props
} from "./plasmic/copy_of_fountain_listen_to_earn/PlasmicButton14";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface Button14Props extends DefaultButton14Props {}

function Button14_(props: Button14Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton14.useBehavior<Button14Props>(
    props,
    ref
  );
  return <PlasmicButton14 {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<Button14Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button14Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const Button14 = React.forwardRef(Button14_) as any as ButtonComponentType;

export default Object.assign(Button14, {
  __plumeType: "button"
});

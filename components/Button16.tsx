import * as React from "react";
import {
  PlasmicButton16,
  DefaultButton16Props
} from "./plasmic/copy_of_fountain_listen_to_earn/PlasmicButton16";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface Button16Props extends DefaultButton16Props {}

function Button16_(props: Button16Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton16.useBehavior<Button16Props>(
    props,
    ref
  );
  return <PlasmicButton16 {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<Button16Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button16Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const Button16 = React.forwardRef(Button16_) as any as ButtonComponentType;

export default Object.assign(Button16, {
  __plumeType: "button"
});

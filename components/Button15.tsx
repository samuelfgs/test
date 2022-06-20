import * as React from "react";
import {
  PlasmicButton15,
  DefaultButton15Props
} from "./plasmic/copy_of_fountain_listen_to_earn/PlasmicButton15";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface Button15Props extends DefaultButton15Props {}

function Button15_(props: Button15Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton15.useBehavior<Button15Props>(
    props,
    ref
  );
  return <PlasmicButton15 {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<Button15Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button15Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const Button15 = React.forwardRef(Button15_) as any as ButtonComponentType;

export default Object.assign(Button15, {
  __plumeType: "button"
});

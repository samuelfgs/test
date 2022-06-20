import * as React from "react";
import {
  PlasmicButton18,
  DefaultButton18Props
} from "./plasmic/copy_of_fountain_listen_to_earn/PlasmicButton18";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface Button18Props extends DefaultButton18Props {}

function Button18_(props: Button18Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton18.useBehavior<Button18Props>(
    props,
    ref
  );
  return <PlasmicButton18 {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<Button18Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button18Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const Button18 = React.forwardRef(Button18_) as any as ButtonComponentType;

export default Object.assign(Button18, {
  __plumeType: "button"
});

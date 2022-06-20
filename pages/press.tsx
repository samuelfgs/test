// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import GlobalContextsProvider from "../components/plasmic/copy_of_fountain_listen_to_earn/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../components/plasmic/copy_of_fountain_listen_to_earn/PlasmicGlobalVariant__Screen";
import { Plasmic_6Press } from "../components/plasmic/copy_of_fountain_listen_to_earn/Plasmic_6Press";

function _6Press() {
  // Use Plasmic_6Press to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into Plasmic_6Press are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, Plasmic_6Press is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return (
    <GlobalContextsProvider>
      <Plasmic_6Press />
    </GlobalContextsProvider>
  );
}

export default _6Press;

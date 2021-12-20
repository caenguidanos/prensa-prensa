import { styled } from "$stitches";

import { ViewComponentsAppBar } from "../app-bar/domain-shared-ui-feature-app-bar";

const ViewComponentsBaseLayoutPrimitive = styled("div", {
   height: "100%",
   minHeight: "100vh",
   width: "100%",
   maxWidth: "100wh",
   backgroundColor: "$amber100"
});

const ViewComponentsBaseLayoutContentPrimitive = styled("main", {
   display: "flex",
   justifyContent: "center",
   alignItems: "start",
   padding: "$2",
   "@sm": {
      py: "$8",
      px: "$5"
   },
   "@md": {
      py: "$8",
      px: "$10"
   },
   "@lg": {
      py: "$8",
      px: "$10"
   },
   "@xl": {
      py: "$8",
      px: "$40"
   },
   "@2xl": {
      py: "$8",
      px: "$64"
   },
   "@3xl": {
      py: "$8",
      px: "$108"
   }
});

export const ViewComponentsBaseLayout: React.FunctionComponent = ({ children }) => {
   return (
      <ViewComponentsBaseLayoutPrimitive data-testid="ViewComponentsBaseLayout">
         <ViewComponentsAppBar />

         <ViewComponentsBaseLayoutContentPrimitive data-testid="ViewComponentsBaseLayoutContent">
            {children}
         </ViewComponentsBaseLayoutContentPrimitive>
      </ViewComponentsBaseLayoutPrimitive>
   );
};

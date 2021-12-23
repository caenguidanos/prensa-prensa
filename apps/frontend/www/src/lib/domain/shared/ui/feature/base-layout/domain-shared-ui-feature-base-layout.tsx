import { styled } from "$stitches";

import { DomainSharedUiAppBar } from "../app-bar/domain-shared-ui-feature-app-bar";

const DomainSharedUiBaseLayoutPrimitive = styled("div", {
   minHeight: "100vh",
   backgroundColor: "$amber100"
});

const DomainSharedUiBaseLayoutContentPrimitive = styled("main", {
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

export const DomainSharedUiBaseLayout: React.FunctionComponent = ({ children }) => {
   return (
      <DomainSharedUiBaseLayoutPrimitive data-testid="DomainSharedUiBaseLayout">
         <DomainSharedUiAppBar />

         <DomainSharedUiBaseLayoutContentPrimitive data-testid="DomainSharedUiBaseLayoutContent">
            {children}
         </DomainSharedUiBaseLayoutContentPrimitive>
      </DomainSharedUiBaseLayoutPrimitive>
   );
};

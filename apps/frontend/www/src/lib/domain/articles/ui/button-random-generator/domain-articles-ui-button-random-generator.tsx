import { RocketIcon } from "@radix-ui/react-icons";

import { styled } from "$stitches";

const DomainArticlesUiButtonRandomPrimitive = styled("button", {
   position: "fixed",
   bottom: 10,
   right: 10,
   backgroundColor: "$neutral800",
   color: "$amber100",
   padding: "$2",
   borderRadius: "$full",
   shadow: "md",
   "&:hover": {
      backgroundColor: "$neutral600"
   },
   "&:active": {
      backgroundColor: "$neutral900"
   }
});

export interface DomainArticlesUiButtonRandomProps {
   onClick: () => Promise<void>;
}

export const DomainArticlesUiButtonRandom: React.FunctionComponent<
   DomainArticlesUiButtonRandomProps
> = ({ onClick }) => {
   return (
      <DomainArticlesUiButtonRandomPrimitive onClick={onClick}>
         <RocketIcon height={25} width={25} />
      </DomainArticlesUiButtonRandomPrimitive>
   );
};

import { styled } from "$stitches";

export interface DomainArticlesUiCardEmptyProps {
   title: string;
}

const DomainArticlesUiCardEmptyContainer = styled("article", {
   position: "relative",
   border: "2px dashed $neutral700",
   width: "100%",
   display: "grid",
   padding: "$3",
   gap: "$3"
});

const DomainArticlesUiCardEmptyTitle = styled("h3", {
   fontWeight: "$black",
   fontSize: "$xl",
   fontFamily: "$oswald",
   color: "$neutral700"
});

export const DomainArticlesUiCardEmpty: React.FunctionComponent<DomainArticlesUiCardEmptyProps> = ({
   title
}) => {
   return (
      <DomainArticlesUiCardEmptyContainer>
         <DomainArticlesUiCardEmptyTitle>{title}</DomainArticlesUiCardEmptyTitle>
      </DomainArticlesUiCardEmptyContainer>
   );
};

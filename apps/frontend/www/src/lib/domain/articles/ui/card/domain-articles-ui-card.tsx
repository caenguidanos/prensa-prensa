import { BackpackIcon, TrashIcon } from "@radix-ui/react-icons";
import { SpinnerCircularFixed } from "spinners-react";

import { styled, config } from "$stitches";

import type { Article } from "articles";

export interface DomainArticlesUiCardProps {
   title: Article.Model["title"];
   description: Article.Model["description"];
   author: Article.Model["author"];
   date: Article.Model["date"];
   onClick: () => void;
   loading: boolean;
   mode: "archive" | "delete";
}

const DomainArticlesUiCardContainer = styled("article", {
   position: "relative",
   border: "2px dashed $neutral500",
   width: "100%",
   display: "grid",
   padding: "$3",
   gap: "$3"
});

const DomainArticlesUiCardTitle = styled("h3", {
   fontWeight: "$black",
   fontSize: "$xl",
   fontFamily: "$oswald",
   color: "$neutral800"
});

const DomainArticlesUiCardDescription = styled("p", {
   fontSize: "$base",
   fontFamily: "$serif",
   color: "$neutral800"
});

const DomainArticlesUiCardSubtitle = styled("span", {
   display: "flex",
   gap: "$2",
   marginTop: "-0.45rem"
});

const DomainArticlesUiCardAuthor = styled("h6", {
   fontSize: "$sm",
   fontFamily: "$serif",
   color: "$neutral600",
   fontStyle: "italic"
});

const DomainArticlesUiCardDate = styled("h6", {
   fontSize: "$sm",
   fontFamily: "$serif",
   color: "$neutral600",
   fontStyle: "italic"
});

const DomainArticlesUiCardArchiveButton = styled("button", {
   position: "absolute",
   top: "$5",
   right: "$5",
   border: "1px solid $neutral600",
   borderRadius: "$full",
   padding: "0.3rem",
   color: "$neutral600",
   backgroundColor: "transparent",
   "&:hover": {
      color: "$amber100",
      backgroundColor: "$neutral600"
   },
   "&:active": {
      color: "$amber100",
      backgroundColor: "$neutral800"
   }
});

const DomainArticlesUiCardArchiveButtonSpinner = styled("div", {
   position: "absolute",
   top: "$5",
   right: "$5"
});

export const DomainArticlesUiCard: React.FunctionComponent<DomainArticlesUiCardProps> = ({
   title,
   description,
   author,
   date,
   onClick,
   loading,
   mode
}) => {
   const localeDate = new Intl.DateTimeFormat("es-ES", { dateStyle: "long" }).format(
      new Date(date)
   );

   return (
      <DomainArticlesUiCardContainer>
         <DomainArticlesUiCardTitle>{title}</DomainArticlesUiCardTitle>
         <DomainArticlesUiCardSubtitle>
            <DomainArticlesUiCardAuthor>{author}</DomainArticlesUiCardAuthor>
            {"·"}
            <DomainArticlesUiCardDate>{localeDate}</DomainArticlesUiCardDate>
         </DomainArticlesUiCardSubtitle>

         <DomainArticlesUiCardDescription>{description}</DomainArticlesUiCardDescription>
         {loading ? (
            <DomainArticlesUiCardArchiveButtonSpinner>
               <SpinnerCircularFixed
                  size={25}
                  color={config.theme.colors.neutral800}
                  secondaryColor={config.theme.colors.neutral400}
                  speed={160}
               />
            </DomainArticlesUiCardArchiveButtonSpinner>
         ) : (
            <DomainArticlesUiCardArchiveButton onClick={onClick}>
               {mode === "archive" ? <BackpackIcon /> : null}
               {mode === "delete" ? <TrashIcon /> : null}
            </DomainArticlesUiCardArchiveButton>
         )}
      </DomainArticlesUiCardContainer>
   );
};

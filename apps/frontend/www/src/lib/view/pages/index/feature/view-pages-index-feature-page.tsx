import { styled } from "$stitches";

import {
   DomainArticlesUiCard,
   DomainArticlesUiCardEmpty,
   useNewArticles
} from "$lib/domain/articles";

import { ViewPagesIndexUiHeader, ViewPagesIndexUiPrincipal } from "../ui";

import type { PageWithLayout } from "$lib/domain/shared/layout";
import type { ViewPagesIndexProps } from "../entity/view-pages-index-feature-page.entity";

const ViewPagesIndexContainer = styled("div", {
   display: "grid",
   border: "1px dashed $neutral800",
   padding: "$8",
   flexGrow: 1
});

const ViewPagesIndexArticles = styled("div", {
   display: "grid",
   marginTop: "$10",
   gap: "$5"
});

export const ViewPagesIndex: PageWithLayout<ViewPagesIndexProps> = () => {
   const { data, loading, commandArchiveArticleByID } = useNewArticles();

   const onClick = (id: string) => {
      return async () => {
         await commandArchiveArticleByID(id);
      };
   };

   return (
      <ViewPagesIndexContainer>
         <ViewPagesIndexUiHeader />
         <ViewPagesIndexUiPrincipal />

         {data.length ? (
            <ViewPagesIndexArticles>
               {data.map((k) => (
                  <DomainArticlesUiCard
                     key={k._id}
                     {...k}
                     onClick={onClick(k._id)}
                     loading={loading}
                     mode="archive"
                  />
               ))}
            </ViewPagesIndexArticles>
         ) : (
            <DomainArticlesUiCardEmpty title="Ya no quedan publicaciones por achivar" />
         )}
      </ViewPagesIndexContainer>
   );
};

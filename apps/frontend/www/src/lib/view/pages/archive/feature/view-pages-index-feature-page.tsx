import { styled } from "$stitches";

import {
   DomainArticlesUiCard,
   DomainArticlesUiCardEmpty,
   useArchivedArticles
} from "$lib/domain/articles";

import { useAppBar } from "$lib/domain/shared/ui";

import type { PageWithLayout } from "$lib/domain/shared/layout";
import type { ViewPagesArchiveProps } from "../entity/view-pages-archive-feature-page.entity";

const ViewPagesArchiveContainer = styled("div", {
   display: "grid",
   border: "1px dashed $neutral800",
   padding: "$8",
   flexGrow: 1
});

const ViewPagesArchiveArticles = styled("div", {
   display: "grid",

   gap: "$5"
});

export const ViewPagesArchive: PageWithLayout<ViewPagesArchiveProps> = () => {
   const [, actions] = useAppBar();

   const { data, loading, commandRemoveArticleByID } = useArchivedArticles();

   const onClick = (id: string) => {
      return async () => {
         await commandRemoveArticleByID(id);
      };
   };

   actions.resetCount();

   return (
      <ViewPagesArchiveContainer>
         {data.length ? (
            <ViewPagesArchiveArticles>
               {data.map((k) => (
                  <DomainArticlesUiCard
                     key={k._id}
                     {...k}
                     onClick={onClick(k._id)}
                     loading={loading}
                     mode="delete"
                  />
               ))}
            </ViewPagesArchiveArticles>
         ) : (
            <DomainArticlesUiCardEmpty title="No hay publicaciones archivadas" />
         )}
      </ViewPagesArchiveContainer>
   );
};

import { useEffect, useState } from "react";

import { styled } from "$stitches";
import { DomainArticlesUiCard, queryArticles } from "$lib/domain/articles";

import { ViewPagesIndexUiHeader, ViewPagesIndexUiPrincipal } from "../ui";

import type { PageWithLayout } from "$lib/domain/shared/layout";
import type { ViewPagesIndexProps } from "../entity/view-pages-index-feature-page.entity";
import type { QueryArticlesDTO } from "$lib/domain/articles";

const ViewPagesIndexContainer = styled("div", {
   display: "grid",
   border: "1px dashed $neutral800",
   padding: "$8",
   maxWidth: "100rem"
});

const ViewPagesIndexArticles = styled("div", {
   display: "grid",
   marginTop: "$10",
   gap: "$5"
});

export const ViewPagesIndex: PageWithLayout<ViewPagesIndexProps> = () => {
   const [articles, setArticles] = useState<QueryArticlesDTO[] | null>();

   useEffect(() => {
      async function fetchData(): Promise<void> {
         try {
            const data = await queryArticles();
            setArticles(data);
         } catch (error) {
            console.error(error);
         }
      }

      fetchData();
   }, [setArticles]);

   const handleArticleClick = (id: string) => {
      // return async () => {
      //    await articlesRepository.commandUpdateArticleByID(id, {
      //       archiveDate: new Intl.DateTimeFormat('es-ES').format(new Date())
      //    })
      // }

      return async () => {
         console.log(id);
         console.log(new Intl.DateTimeFormat("es-ES").format(new Date()));
      };
   };

   return (
      <ViewPagesIndexContainer>
         <ViewPagesIndexUiHeader />
         <ViewPagesIndexUiPrincipal />

         {articles ? (
            <ViewPagesIndexArticles>
               {articles.map((k) => (
                  <DomainArticlesUiCard key={k._id} {...k} onClick={handleArticleClick(k._id)} />
               ))}
            </ViewPagesIndexArticles>
         ) : null}
      </ViewPagesIndexContainer>
   );
};

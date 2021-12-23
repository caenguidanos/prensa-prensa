import toast from "react-hot-toast";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import faker from "faker";

import { css } from "$stitches";
import { useAppBar } from "$lib/domain/shared/ui";

import * as repository from "../../data-access/domain-articles-data-access";

import type { ArticleCommandCreateDTO, ArticleQueryDTO } from "@workspace/domain-articles";

export function useNewArticles() {
   const [, appBarStateActions] = useAppBar();

   const [loading, setLoading] = useState<boolean>(false);
   const [data, setData] = useState<ArticleQueryDTO[]>([]);

   const ToastSuccess = css({
      border: "none",
      padding: "$1",
      color: "$green700",
      backgroundColor: "$green100",
      borderRadius: "$1",
      fontFamily: "$oswald",
      fontSize: "$sm",
      shadow: "sm"
   });

   const ToastError = css({
      border: "none",
      padding: "$1",
      color: "$red700",
      backgroundColor: "$red100",
      borderRadius: "$1",
      fontFamily: "$oswald",
      fontSize: "$sm",
      shadow: "sm"
   });

   const queryRefreshArticles = async () => {
      const abortController = new AbortController();

      try {
         const data = await repository.queryArticlesOnlyNew(abortController.signal);

         setData(data);
      } catch (error) {
         console.error(error);
         abortController.abort();
      }
   };

   const commandCreateRandomArticle = async () => {
      const abortController = new AbortController();

      setLoading(true);

      const randomArticle: ArticleCommandCreateDTO = {
         title: faker.commerce.productName(),
         description: faker.commerce.productDescription(),
         content: faker.name.jobDescriptor(),
         author: faker.name.firstName(),
         archiveDate: null
      };

      try {
         const generatedArticle = await repository.commandCreateArticle(
            randomArticle,
            abortController.signal
         );

         setData((prev) => prev.concat(generatedArticle));

         toast.success("Successfully generated!", {
            style: {},
            className: ToastSuccess(),
            icon: <CheckIcon />
         });
      } catch (error) {
         console.error(error);
         abortController.abort();

         toast.error("Imposible to generate!", {
            style: {},
            className: ToastError(),
            icon: <Cross2Icon />
         });
      }

      setLoading(false);
   };

   const commandArchiveArticleByID = async (id: string) => {
      const abortController = new AbortController();

      setLoading(true);

      try {
         await repository.commandUpdateArticleByID(
            id,
            {
               archiveDate: new Intl.DateTimeFormat("es-ES").format(new Date())
            },
            abortController.signal
         );

         setData((prev) => prev.filter((k) => k._id !== id));

         toast.success("Successfully archived!", {
            style: {},
            className: ToastSuccess(),
            icon: <CheckIcon />
         });

         appBarStateActions.incrementArchivedCount();
      } catch (error) {
         console.error(error);
         abortController.abort();

         toast.error("Imposible to archive!", {
            style: {},
            className: ToastError(),
            icon: <Cross2Icon />
         });
      }

      setLoading(false);
   };

   useEffect(function fetchArticlesOnInit() {
      queryRefreshArticles();
   }, []);

   return {
      commandArchiveArticleByID,
      commandCreateRandomArticle,
      loading,
      data
   };
}

import toast from "react-hot-toast";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import { useCallback, useEffect, useState } from "react";

import { css } from "$stitches";
import { useAppBar } from "$lib/domain/shared/ui";

import {
   commandUpdateArticleByID,
   queryArticlesOnlyNew
} from "../../data-access/domain-articles-data-access";

import type { ArticleQueryDTO } from "@workspace/domain-articles";

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

   const queryRefreshArticles = useCallback(async () => {
      const abortController = new AbortController();

      try {
         const data = await queryArticlesOnlyNew(abortController.signal);

         setData(data);
      } catch (error) {
         console.error(error);
         abortController.abort();
      }
   }, [setData]);

   const commandArchiveArticleByID = useCallback(
      async (id: string) => {
         const abortController = new AbortController();

         setLoading(true);

         try {
            await commandUpdateArticleByID(
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
      },
      [appBarStateActions]
   );

   useEffect(function fetchArticlesOnInit() {
      queryRefreshArticles();
   }, []);

   return { commandArchiveArticleByID, queryRefreshArticles, loading, data, setData };
}

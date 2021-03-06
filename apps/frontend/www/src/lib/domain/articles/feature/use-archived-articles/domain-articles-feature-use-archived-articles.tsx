import toast from "react-hot-toast";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

import { css } from "$stitches";

import * as repository from "../../data-access/domain-articles-data-access";

import type { ArticleQueryDTO } from "@workspace/domain-articles";

export function useArchivedArticles() {
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
         const data = await repository.queryArticlesOnlyArchived(abortController.signal);

         setData(data);
      } catch (error) {
         console.error(error);
         abortController.abort();
      }
   };

   const commandRemoveArticleByID = async (id: string) => {
      const abortController = new AbortController();

      setLoading(true);

      try {
         await repository.commandDeleteArticleByID(id, abortController.signal);

         toast.success("Successfully deleted!", {
            style: null,
            className: ToastSuccess(),
            icon: <CheckIcon />
         });

         setData((prev) => prev.filter((k) => k._id !== id));
      } catch (error) {
         console.error(error);
         abortController.abort();

         toast.error("Imposible to delete!", {
            style: null,
            className: ToastError(),
            icon: <Cross2Icon />
         });
      }

      setLoading(false);
   };

   useEffect(function fetchArticlesOnInit() {
      queryRefreshArticles();
   }, []);

   return { commandRemoveArticleByID, queryRefreshArticles, loading, data };
}

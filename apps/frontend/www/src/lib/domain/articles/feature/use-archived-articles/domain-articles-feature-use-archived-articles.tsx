import toast from "react-hot-toast";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import { useCallback, useEffect, useState } from "react";

import { css } from "$stitches";

import {
   commandDeleteArticleByID,
   queryArticlesOnlyArchived
} from "../../data-access/domain-articles-data-access";

import type { QueryArticlesDTO } from "../../entity/domain-articles-entity";

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

export function useArchivedArticles() {
   const [loading, setLoading] = useState<boolean>(false);
   const [data, setData] = useState<QueryArticlesDTO[]>([]);

   const queryRefreshArticles = useCallback(async () => {
      const abortController = new AbortController();

      try {
         const data = await queryArticlesOnlyArchived(abortController.signal);

         setData(data);
      } catch (error) {
         abortController.abort();
      }
   }, [setData]);

   const commandRemoveArticleByID = useCallback(async (id: string) => {
      const abortController = new AbortController();

      setLoading(true);

      try {
         await commandDeleteArticleByID(id, abortController.signal);

         toast.success("Successfully deleted!", {
            style: null,
            className: ToastSuccess(),
            icon: <CheckIcon />
         });

         setData((prev) => prev.filter((k) => k._id !== id));
      } catch (error) {
         abortController.abort();

         toast.error("Imposible to delete!", {
            style: null,
            className: ToastError(),
            icon: <Cross2Icon />
         });
      }

      setLoading(false);
   }, []);

   useEffect(function fetchArticlesOnInit() {
      queryRefreshArticles();
   }, []);

   return { commandRemoveArticleByID, queryRefreshArticles, loading, data };
}

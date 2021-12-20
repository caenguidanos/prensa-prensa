import { useEffect, useState } from "react";
import { fromEvent, Subscription, map, distinctUntilChanged } from "rxjs";

export function useUntilDistinctScroll(): [boolean] {
   const [state, setState] = useState<boolean>(false);

   useEffect(() => {
      let subscription: Subscription | undefined;

      if (typeof window !== "undefined") {
         subscription = fromEvent(window, "scroll")
            .pipe(
               map(() => window.scrollY),
               map((position) => position > 1),
               distinctUntilChanged()
            )
            .subscribe({
               next(payload) {
                  setState(payload);
               }
            });
      }

      return () => {
         if (subscription) {
            if (!subscription.closed) {
               subscription.unsubscribe();
            }
         }
      };
   }, []);

   return [state];
}

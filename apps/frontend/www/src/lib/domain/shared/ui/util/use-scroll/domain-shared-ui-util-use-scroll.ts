import { useEffect, useState } from "react";
import { fromEvent, Subscription, map } from "rxjs";

export function useScroll(): [number] {
   const [state, setState] = useState<number>(0);

   useEffect(() => {
      let subscription: Subscription | undefined;

      if (typeof window !== "undefined") {
         subscription = fromEvent(window, "scroll")
            .pipe(map(() => window.scrollY))
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

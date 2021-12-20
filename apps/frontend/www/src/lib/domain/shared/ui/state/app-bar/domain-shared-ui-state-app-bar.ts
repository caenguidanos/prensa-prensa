import { proxy, useSnapshot } from "valtio";

interface DomainSharedUiAppBarState {
   count: number;
}

const domainSharedUiAppBarProxyState = proxy<DomainSharedUiAppBarState>({ count: 0 });

const domainSharedUiAppBarProxyAction = {
   resetCount(): void {
      domainSharedUiAppBarProxyState.count = 0;
   },
   incrementArchivedCount(): void {
      domainSharedUiAppBarProxyState.count += 1;
   },
   decrementArchivedCount(): void {
      domainSharedUiAppBarProxyState.count += 1;
   }
};

export function useAppBar(): [DomainSharedUiAppBarState, typeof domainSharedUiAppBarProxyAction] {
   const proxySnapshot = useSnapshot(domainSharedUiAppBarProxyState);

   return [proxySnapshot, domainSharedUiAppBarProxyAction];
}

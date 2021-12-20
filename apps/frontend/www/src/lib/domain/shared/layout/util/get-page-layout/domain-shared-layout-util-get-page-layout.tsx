import type { AppPropsWithLayout } from "../../entity/domain-shared-layout-entity";

const noop: React.FunctionComponent = ({ children }) => <div>{children}</div>;

export function getPageLayout(Component: AppPropsWithLayout["Component"]) {
   return Component.layout ?? noop;
}

import type { PageWithLayout } from "../../entity/domain-shared-layout-entity";

export const GetPageLayoutPageMock: PageWithLayout = () => {
   return (
      <div data-testid="page">
         <h1>Hello World</h1>
      </div>
   );
};

export const GetPageLayoutMock: React.FunctionComponent = ({ children }) => {
   return <div data-testid="layout">{children}</div>;
};

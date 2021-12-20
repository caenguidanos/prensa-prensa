/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";

import { getPageLayout } from "./domain-shared-layout-util-get-page-layout";

import { GetPageLayoutMock, GetPageLayoutPageMock } from "../../mock";

import type { PageWithLayout } from "../../entity/domain-shared-layout-entity";

describe("domainSharedLayout utilGetPageLayout", () => {
   let Page: PageWithLayout = GetPageLayoutPageMock;

   beforeEach(() => {
      Page = GetPageLayoutPageMock;
      Page.layout = undefined;
   });

   it("should get with layout", async () => {
      Page.layout = GetPageLayoutMock;

      const DynamicLayout = getPageLayout(Page);

      render(
         <DynamicLayout>
            <Page />
         </DynamicLayout>
      );

      const [layout] = await screen.findAllByTestId("layout");
      const [page] = await screen.findAllByTestId("page");

      expect(layout).toBeInTheDocument();
      expect(page).toBeInTheDocument();
   });

   it("should get without layout", async () => {
      const DynamicLayout = getPageLayout(Page);

      render(
         <DynamicLayout>
            <Page />
         </DynamicLayout>
      );

      const [page] = await screen.findAllByTestId("page");

      expect(page).toBeInTheDocument();
   });
});

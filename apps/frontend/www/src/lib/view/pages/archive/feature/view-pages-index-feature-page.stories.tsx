import { Toaster } from "react-hot-toast";

import { DomainSharedUiBaseLayout } from "$lib/domain/shared/ui";

import { ViewPagesArchive } from "./view-pages-index-feature-page";

import type { Story, Meta } from "@storybook/react";
import type { ViewPagesArchiveProps } from "../entity/view-pages-archive-feature-page.entity";

export default {
   component: ViewPagesArchive,
   title: "View/Pages/Archive",
   parameters: {
      layout: "fullscreen"
   }
} as Meta;

const Template: Story<ViewPagesArchiveProps> = (args) => (
   <>
      <DomainSharedUiBaseLayout>
         <ViewPagesArchive {...args} />
      </DomainSharedUiBaseLayout>
      <Toaster position="bottom-right" />
   </>
);

export const Default = Template.bind({});
Default.args = {
   html: "<h1>wow</h1>"
};

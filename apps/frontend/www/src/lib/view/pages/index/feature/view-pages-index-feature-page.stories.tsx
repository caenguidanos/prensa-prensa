import { Toaster } from "react-hot-toast";

import { ViewComponentsBaseLayout } from "$lib/domain/shared/ui";

import { ViewPagesIndex } from "./view-pages-index-feature-page";

import type { Story, Meta } from "@storybook/react";
import type { ViewPagesIndexProps } from "../entity/view-pages-index-feature-page.entity";

export default {
   component: ViewPagesIndex,
   title: "Pages/Index",
   parameters: {
      layout: "fullscreen"
   }
} as Meta;

const Template: Story<ViewPagesIndexProps> = (args) => (
   <>
      <ViewComponentsBaseLayout>
         <ViewPagesIndex {...args} />
      </ViewComponentsBaseLayout>
      <Toaster position="bottom-right" />
   </>
);

export const Default = Template.bind({});
Default.args = {
   html: "<h1>wow</h1>"
};

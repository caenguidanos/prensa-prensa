import { ViewComponentsBaseLayout } from "./domain-shared-ui-feature-base-layout";

import type { Story, Meta } from "@storybook/react";

export default {
   component: ViewComponentsBaseLayout,
   title: "UI/Layout",
   parameters: {
      layout: "fullscreen"
   }
} as Meta;

const Template: Story = () => (
   <ViewComponentsBaseLayout>
      <div
         style={{
            display: "grid",
            gap: "1rem",
            border: "1px dashed gray",
            minWidth: "100%"
         }}
      >
         {new Array(250).fill(0).map((_k, i) => (
            <p key={`id${i}`}> </p>
         ))}
      </div>
   </ViewComponentsBaseLayout>
);

export const Default = Template.bind({});
Default.args = {};

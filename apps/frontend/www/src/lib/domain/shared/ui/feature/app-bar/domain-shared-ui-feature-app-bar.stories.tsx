import { ViewComponentsAppBar } from "./domain-shared-ui-feature-app-bar";

import type { Story, Meta } from "@storybook/react";

export default {
   component: ViewComponentsAppBar,
   title: "UI/AppBar",
   parameters: {
      layout: "fullscreen"
   }
} as Meta;

const Template: Story = () => (
   <>
      <ViewComponentsAppBar />
      <div
         style={{
            display: "grid",
            gap: "1rem",
            border: "1px dashed gray",
            margin: "1rem"
         }}
      >
         {new Array(250).fill(0).map((_k, i) => (
            <p key={`id${i}`}> </p>
         ))}
      </div>
   </>
);

export const Default = Template.bind({});
Default.args = {};

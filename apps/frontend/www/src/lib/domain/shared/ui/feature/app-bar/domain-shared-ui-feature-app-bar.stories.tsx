import { DomainSharedUiAppBar } from "./domain-shared-ui-feature-app-bar";

import { useAppBar } from "../../state";

import type { Story, Meta } from "@storybook/react";

export default {
   component: DomainSharedUiAppBar,
   title: "Domain/Shared/UI/AppBar",
   parameters: {
      layout: "fullscreen"
   }
} as Meta;

const Template: Story = () => {
   const [, actions] = useAppBar();

   return (
      <>
         <DomainSharedUiAppBar />

         <div
            style={{
               display: "grid",
               gap: "1rem",
               border: "1px dashed gray",
               margin: "1rem"
            }}
         >
            <button
               style={{
                  margin: "10px",
                  border: "1px solid",
                  padding: "10px"
               }}
               onClick={() => {
                  actions.incrementArchivedCount();
               }}
            >
               Increase archived
            </button>

            <button
               style={{
                  margin: "10px",
                  border: "1px solid",
                  padding: "10px"
               }}
               onClick={() => {
                  actions.resetCount();
               }}
            >
               Reset archived
            </button>
            {new Array(250).fill(0).map((_k, i) => (
               <p key={`id${i}`}> </p>
            ))}
         </div>
      </>
   );
};

export const Default = Template.bind({});
Default.args = {};

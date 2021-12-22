import { Toaster } from "react-hot-toast";

import {
   DomainArticlesUiButtonRandom,
   DomainArticlesUiButtonRandomProps
} from "./domain-articles-ui-button-random-generator";

import type { Story, Meta } from "@storybook/react";

export default {
   component: DomainArticlesUiButtonRandom,
   title: "Domain/Articles/UI/Random button"
} as Meta;

const Template: Story<DomainArticlesUiButtonRandomProps> = (args) => (
   <div>
      <DomainArticlesUiButtonRandom {...args} />

      <Toaster position="bottom-right" />
   </div>
);

export const Default = Template.bind({});
Default.args = {
   onClick: async () => {
      console.log("Archived!!");
   }
};

import { Toaster } from "react-hot-toast";
import * as faker from "faker";

import { DomainArticlesUiCard } from "./domain-articles-ui-card";

import type { Story, Meta } from "@storybook/react";
import type { DomainArticlesUiCardProps } from "./domain-articles-ui-card";

export default {
   component: DomainArticlesUiCard,
   title: "Articles/UI/Card"
} as Meta;

const Template: Story<DomainArticlesUiCardProps> = (args) => (
   <div>
      <DomainArticlesUiCard {...args} />

      <Toaster position="bottom-right" />
   </div>
);

export const Success = Template.bind({});

Success.args = {
   title: faker.name.title(),
   description: faker.commerce.productDescription(),
   author: faker.name.firstName(),
   date: new Date(),
   onClick: async () => {
      const sleep = () =>
         new Promise<void>((res) => {
            setTimeout(() => {
               res();
            }, 1000);
         });

      await sleep();
      console.log("Archived!!");
   }
};

export const Error = Template.bind({});
Error.args = {
   title: faker.name.title(),
   description: faker.commerce.productDescription(),
   author: faker.name.firstName(),
   date: new Date(),
   onClick: async () => {
      const sleep = () =>
         new Promise<void>((res) => {
            setTimeout(() => {
               res();
            }, 1000);
         });

      await sleep();

      throw "Ups";
   }
};

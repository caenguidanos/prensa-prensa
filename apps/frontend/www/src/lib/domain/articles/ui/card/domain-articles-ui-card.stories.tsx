import { Toaster } from "react-hot-toast";
import * as faker from "faker";

import { DomainArticlesUiCard } from "./domain-articles-ui-card";

import type { Story, Meta } from "@storybook/react";
import type { DomainArticlesUiCardProps } from "./domain-articles-ui-card";

export default {
   component: DomainArticlesUiCard,
   title: "Domain/Articles/UI/Card"
} as Meta;

const Template: Story<DomainArticlesUiCardProps> = (args) => (
   <div>
      <DomainArticlesUiCard {...args} />

      <Toaster position="bottom-right" />
   </div>
);

export const Default = Template.bind({});
Default.args = {
   title: faker.name.title(),
   description: faker.commerce.productDescription(),
   author: faker.name.firstName(),
   date: new Date().toString(),
   loading: false,
   mode: "archive",
   onClick: () => {
      console.log("Archived!!");
   }
};

export const Loading = Template.bind({});
Loading.args = {
   title: faker.name.title(),
   description: faker.commerce.productDescription(),
   author: faker.name.firstName(),
   date: new Date().toString(),
   loading: true,
   mode: "archive",
   onClick: () => {
      console.log("Archived!!");
   }
};

export const Archived = Template.bind({});
Archived.args = {
   title: faker.name.title(),
   description: faker.commerce.productDescription(),
   author: faker.name.firstName(),
   date: new Date().toString(),
   loading: false,
   mode: "delete",
   onClick: () => {
      console.log("Deleted!!");
   }
};

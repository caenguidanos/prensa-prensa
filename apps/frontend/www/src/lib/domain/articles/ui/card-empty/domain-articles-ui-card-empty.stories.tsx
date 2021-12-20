import * as faker from "faker";

import { DomainArticlesUiCardEmpty } from "./domain-articles-ui-card-empty";

import type { Story, Meta } from "@storybook/react";
import type { DomainArticlesUiCardEmptyProps } from "./domain-articles-ui-card-empty";

export default {
   component: DomainArticlesUiCardEmpty,
   title: "Domain/Articles/UI/CardEmpty"
} as Meta;

const Template: Story<DomainArticlesUiCardEmptyProps> = (args) => (
   <DomainArticlesUiCardEmpty {...args} />
);

export const Default = Template.bind({});
Default.args = {
   title: faker.name.title()
};

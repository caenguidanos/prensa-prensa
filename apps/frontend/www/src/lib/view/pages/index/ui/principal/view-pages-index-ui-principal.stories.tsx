import { ViewPagesIndexUiPrincipal } from "./view-pages-index-ui-principal";

import type { Story, Meta } from "@storybook/react";

export default {
   component: ViewPagesIndexUiPrincipal,
   title: "View/Pages/Index/UI/Principal"
} as Meta;

const Template: Story = () => <ViewPagesIndexUiPrincipal />;

export const Default = Template.bind({});
Default.args = {};

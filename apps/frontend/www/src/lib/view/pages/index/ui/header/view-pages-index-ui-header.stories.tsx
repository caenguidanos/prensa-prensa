import { ViewPagesIndexUiHeader } from "./view-pages-index-ui-header";

import type { Story, Meta } from "@storybook/react";

export default {
   component: ViewPagesIndexUiHeader,
   title: "Pages/Index/UI/Header"
} as Meta;

const Template: Story = () => <ViewPagesIndexUiHeader />;

export const Default = Template.bind({});
Default.args = {};

import React from "react";
import { ThemeProvider } from "styled-components";
import { Alert } from "../Alert";
import { theme } from "../theme";

export default {
  title: "Example/Alert",
  component: Alert,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Alert {...args}>Test</Alert>
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {};

export const WithColor = Template.bind({});
WithColor.args = {
  color: "blue",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: "pencil",
};

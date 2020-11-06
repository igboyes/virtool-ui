import React from "react";
import { ThemeProvider } from "styled-components";
import { Label } from "../Label";
import { theme } from "../theme";

export default {
  title: "Example/Label",
  component: Label,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Label {...args}>Hello World</Label>
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {};

export const Red = Template.bind({});
Red.args = {
  color: "red",
};

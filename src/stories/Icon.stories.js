import React from "react";
import { ThemeProvider } from "styled-components";
import { Icon } from "../Icon";
import { theme } from "../theme";

export default {
  title: "Example/Icon",
  component: Icon,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Icon {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  color: "blue",
  faStyle: "fas",
  name: "pencil",
};

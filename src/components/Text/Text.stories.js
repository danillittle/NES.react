import React from "react";
import { Text } from "./";

export default {
    title: "Components/Text",
    component: Text
};

const Template = (args) => <Text {...args}>Some text</Text>;

export const Props = Template.bind({});

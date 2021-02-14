import React from "react";
import { Checkbox } from "../Checkbox";

export default {
    title: "Components/Checkbox",
    component: Checkbox
};

const Template = (args) => <Checkbox {...args} />;

export const Props = Template.bind({});
Props.args = {
    label: "Enable",
    onChange: (e) => alert(e.target.checked)
};

export const Dark = Template.bind({});
Dark.args = {
    dark: true,
    label: "Dark"
};
Dark.parameters = {
    backgrounds: {
        default: "dark"
    }
};

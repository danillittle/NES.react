import { Select } from "./";

const data = [
    {
        id: 1,
        name: "Option 1"
    },
    {
        id: 2,
        name: "Option 2"
    },
    {
        id: 3,
        name: "Option 3"
    }
];

export default {
    title: "Components/Select",
    component: Select
};

const Template = (args) => <Select {...args} />;

export const Props = Template.bind({});
Props.args = {
    options: data,
    placeholder: "Select...",
    onChange: (e) => console.log(e.target.value)
};

export const Dark = Template.bind({});
Dark.args = {
    options: data,
    placeholder: "Select...",
    dark: true
};
Dark.parameters = {
    backgrounds: {
        default: "dark"
    }
};

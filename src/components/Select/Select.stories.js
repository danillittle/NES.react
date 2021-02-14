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
    onChange: (e) => alert(e.target.value)
};

const KindTemplate = (args) => (
    <>
        <Select kind="success" {...args} style={{ marginBottom: 16 }} />
        <Select kind="warning" {...args} style={{ marginBottom: 16 }} />
        <Select kind="error" {...args} style={{ marginBottom: 16 }} />
    </>
);

export const Kind = KindTemplate.bind({});

Kind.args = {
    options: data,
    placeholder: "Select..."
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

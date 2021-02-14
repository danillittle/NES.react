import { Input } from "./";

export default {
    title: "Components/Input",
    component: Input
};

const Template = (args) => <Input {...args} />;

export const Props = Template.bind({});

const KindTemplate = (args) => (
    <>
        <Input
            kind="success"
            placeholder="Success"
            {...args}
            style={{ marginBottom: 16 }}
        />
        <Input
            kind="warning"
            placeholder="Warning"
            {...args}
            style={{ marginBottom: 16 }}
        />
        <Input
            kind="error"
            placeholder="Error"
            {...args}
            style={{ marginBottom: 16 }}
        />
    </>
);

export const Kind = KindTemplate.bind({});

export const Label = Template.bind({});
Label.args = {
    id: "label_field",
    placeholder: "NES.react",
    label: "With label"
};

export const Inline = Template.bind({});
Inline.args = {
    id: "inline_field",
    label: "Is inline",
    inline: true
};

export const Dark = Template.bind({});
Dark.args = {
    id: "dark_field",
    label: "Is dark",
    dark: true
};
Dark.parameters = {
    backgrounds: {
        default: "dark",
        values: [
            {
                name: "dark",
                value: "#212529"
            }
        ]
    }
};

export const AsTextarea = Template.bind({});
AsTextarea.args = {
    as: "textarea",
    id: "textarea_field",
    label: "As textarea"
};

import { Text } from "./";

export default {
    title: "Components/Text",
    component: Text
};

const Template = (args) => <Text {...args}>Some text</Text>;

export const Props = Template.bind({});

export const As = Template.bind({});
As.args = {
    as: "span"
};

const KindTemplate = (args) => (
    <>
        <Text as="span" kind="primary" {...args}>
            Is primary
        </Text>
        <Text as="span" kind="success" {...args}>
            Is success
        </Text>
        <Text as="span" kind="warning" {...args}>
            Is warning
        </Text>
        <Text as="span" kind="error" {...args}>
            Is error
        </Text>
        <Text as="span" kind="disabled" {...args}>
            Is disabled
        </Text>
    </>
);

export const Kind = KindTemplate.bind({});

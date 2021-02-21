import Badge from ".";
import "./badge.css";

export default {
    title: "Components/Badge",
    component: Badge
};

const Template = (args) => <Badge {...args}>Badge</Badge>;

export const Props = Template.bind({});

export const Icon = Template.bind({});
Icon.args = {
    icon: "hi",
    iconKind: "primary"
};

const KindTemplate = (args) => (
    <>
        <Badge {...args} kind="primary">
            Badge
        </Badge>
        <Badge {...args} kind="success">
            Badge
        </Badge>
        <Badge {...args} kind="warning">
            Badge
        </Badge>
        <Badge {...args} kind="error">
            Badge
        </Badge>
        <Badge {...args} kind="dark">
            Badge
        </Badge>
    </>
);

export const Kind = KindTemplate.bind({});

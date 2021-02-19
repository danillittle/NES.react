import Badge, { Item } from ".";

export default {
    title: "Components/Badge",
    component: Badge
};

const Template = (args) => (
    <>
        <Badge {...args}>NES.react</Badge>
        <Badge {...args}>
            <Item kind="primary">test</Item>
            <Item kind="warning">1</Item>
        </Badge>
    </>
);

export const Props = Template.bind({});

import Badge, { Item } from ".";
import "./badge.css";

export default {
    title: "Components/Badge",
    component: Badge
};

const Template = (args) => (
    <>
        <Badge as="div" {...args}>
            NES.react
        </Badge>
        <Badge {...args}>
            <Item kind="primary">test</Item>
            <Item kind="warning">0%</Item>
        </Badge>
    </>
);

export const Props = Template.bind({});

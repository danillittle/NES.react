import Avatar from ".";

export default {
    title: "Components/Avatar",
    component: Avatar
};

const Template = (args) => (
    <>
        <Avatar {...args} style={{ marginRight: 16 }} />
        <Avatar size="small" {...args} style={{ marginRight: 16 }} />
        <Avatar size="medium" {...args} style={{ marginRight: 16 }} />
        <Avatar size="large" {...args} style={{ marginRight: 16 }} />
    </>
);

export const Props = Template.bind({});
Props.args = {
    src: "https://www.gravatar.com/avatar?s=15",
    alt: "Gravatar image example"
};

export const Rounded = Template.bind({});
Rounded.args = {
    src: "https://www.gravatar.com/avatar?s=15",
    alt: "Gravatar image example",
    rounded: true
};

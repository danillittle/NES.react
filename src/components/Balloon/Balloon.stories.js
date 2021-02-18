import Balloon from ".";

export default {
    title: "Components/Balloon",
    component: Balloon
};

const Template = (args) => <Balloon {...args}>Some text</Balloon>;

export const Props = Template.bind({});
Props.args = {
    from: "left"
};

export const Dark = Template.bind({});
Dark.args = {
    dark: true,
    from: "right"
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

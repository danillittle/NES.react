import { Radio } from "./";

export default {
    title: "Components/Radio",
    component: Radio
};

const Template = (args) => (
    <>
        <Radio label="Yes" {...args} />
        <Radio label="No" {...args} />
    </>
);

export const Props = Template.bind({});
Props.args = {
    name: "answer"
};

export const Dark = Template.bind({});
Dark.args = {
    dark: true,
    name: "answer-dark"
};
Dark.parameters = {
    backgrounds: {
        default: "dark"
    }
};

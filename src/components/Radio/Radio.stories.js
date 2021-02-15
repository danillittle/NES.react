import { Radio } from ".";

export default {
    title: "Components/Radio",
    component: Radio
};

const Template = (args) => (
    <>
        <Radio label="Yes" value="yes" {...args} />
        <Radio label="No" value="no" {...args} />
    </>
);

export const Props = Template.bind({});
Props.args = {
    name: "answer",
    onChange: (e) => alert(e.target.value)
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

import Progress from ".";

export default {
    title: "Components/Progress",
    component: Progress
};

const Template = (args) => <Progress {...args} />;

export const Props = Template.bind({});
Props.args = {
    value: 70,
    max: 100,
    kind: "primary"
};

const KindTemplate = (args) => (
    <>
        <Progress value={90} max={100} {...args} />
        <Progress value={80} max={100} kind="primary" {...args} />
        <Progress value={50} max={100} kind="success" {...args} />
        <Progress value={30} max={100} kind="warning" {...args} />
        <Progress value={10} max={100} kind="error" {...args} />
        <Progress value={50} max={100} kind="pattern" {...args} />
    </>
);

export const Kind = KindTemplate.bind({});
Kind.args = {
    style: {
        marginBottom: 16
    }
};

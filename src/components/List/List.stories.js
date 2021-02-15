import { List } from ".";

const exampleArray = [
    "Good morning.",
    "Thou hast had a good night's sleep, I hope.",
    "Thou hast had a good afternoon",
    "Good night."
];

export default {
    title: "Components/List",
    component: List
};

const Template = (args) => <List {...args} />;

export const Props = Template.bind({});

Props.args = {
    data: exampleArray
};

export const Render = Template.bind({});
Render.args = {
    render: (item) => <span>{item.value}</span>,
    kind: "disc",
    data: [
        { value: "Good morning." },
        { value: "Thou hast had a good night's sleep, I hope." },
        { value: "Thou hast had a good afternoon" },
        { value: "Good night." }
    ]
};

const KindTemplate = (args) => (
    <>
        <List kind="disc" {...args} />
        <List kind="circle" {...args} />
    </>
);
export const Kind = KindTemplate.bind({});

Kind.args = {
    data: exampleArray
};

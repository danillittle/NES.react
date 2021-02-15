import { Table } from ".";

const exampleColumns = [
    {
        title: "Name",
        dataIndex: "name"
    },
    {
        title: "Surname",
        dataIndex: "surname"
    }
];

const exampleData = [
    {
        id: 0,
        name: "Andrey",
        surname: "Kharitonov"
    },
    {
        id: 1,
        name: "Vladislav",
        surname: "Kulak"
    }
];

export default {
    title: "Components/Table",
    component: Table
};

const Template = (args) => <Table {...args} />;

export const Props = Template.bind({});

Props.args = {
    // render: (item) => <span>{item.value}</span>,
    columns: exampleColumns,
    data: exampleData
};

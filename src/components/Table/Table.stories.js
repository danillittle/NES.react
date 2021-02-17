import Table from ".";

const exampleColumns = [
    {
        title: "Name",
        dataIndex: "name"
    },
    {
        title: "Email",
        dataIndex: "email"
    },
    {
        title: "City",
        render: (item) => item.address.city
    }
];

const exampleData = [
    {
        id: 0,
        name: "Leanne",
        email: "Sincere@april.biz",
        address: {
            city: "Gwenborough"
        }
    },
    {
        id: 1,
        name: "Ervin",
        email: "Shanna@melissa.tv",
        address: {
            city: "Wisokyburgh"
        }
    }
];

export default {
    title: "Components/Table",
    component: Table
};

const Template = (args) => <Table {...args} />;

export const Props = Template.bind({});
Props.args = {
    columns: exampleColumns,
    data: exampleData
};

export const Bordered = Template.bind({});
Bordered.args = {
    bordered: true,
    columns: exampleColumns,
    data: exampleData
};

export const Dark = Template.bind({});
Dark.args = {
    dark: true,
    bordered: true,
    columns: exampleColumns,
    data: exampleData
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

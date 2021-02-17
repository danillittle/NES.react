import Button from ".";

export default {
    title: "Components/Button",
    component: Button
};

const Template = (args) => <Button {...args}>Button</Button>;

export const Props = Template.bind({});

const KindTemplate = (args) => (
    <>
        <Button kind="primary" {...args} style={{ marginRight: 16 }}>
            Primary
        </Button>
        <Button kind="success" {...args} style={{ marginRight: 16 }}>
            Success
        </Button>
        <Button kind="warning" {...args} style={{ marginRight: 16 }}>
            Warning
        </Button>
        <Button kind="error" {...args} style={{ marginRight: 16 }}>
            Error
        </Button>
        <Button kind="disabled" {...args} style={{ marginRight: 16 }}>
            Disabled
        </Button>
    </>
);

export const Kind = KindTemplate.bind({});

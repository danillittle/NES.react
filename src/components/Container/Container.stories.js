import { Container } from ".";

export default {
    title: "Components/Container",
    component: Container
};

const Template = (args) => (
    <Container {...args}>
        <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
    </Container>
);

export const Props = Template.bind({});

export const Title = Template.bind({});
Title.args = {
    title: "With title"
};

export const Centered = Template.bind({});
Centered.args = {
    title: "Centered",
    centered: true
};

export const Rounded = Template.bind({});
Rounded.args = {
    rounded: true
};

export const Dark = Template.bind({});
Dark.args = {
    dark: true
};

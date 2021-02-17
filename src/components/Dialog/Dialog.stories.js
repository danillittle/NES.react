import { useState } from "react";
import { Dialog } from ".";
import { Button } from "../Button";

export default {
    title: "Components/Dialog",
    component: Dialog
};

const Template = (args) => {
    const [openDialog, setOpenDialog] = useState(false);
    return (
        <>
            <Button onClick={() => setOpenDialog(true)}>Open dialog</Button>
            <Dialog
                {...args}
                visible={openDialog}
                onOk={() => setOpenDialog(false)}
                onCancel={() => setOpenDialog(false)}
            >
                <p>Alert: this is a dialog.</p>
            </Dialog>
        </>
    );
};

export const Props = Template.bind({});

Props.args = {
    title: "Dialog",
    okButtonProps: { kind: "primary" }
};

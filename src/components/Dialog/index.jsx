import cn from "classnames";
import t from "prop-types";
import { Button } from "../Button";
import "./dialog.css";

const Menu = ({
    onOk,
    onCancel,
    okButtonProps,
    cancelButtonProps,
    okText = "Confirm",
    cancelText = "Cancel"
}) => {
    return (
        <div className="dialog-menu">
            {onCancel && (
                <Button onClick={onCancel} {...cancelButtonProps}>
                    {cancelText}
                </Button>
            )}
            {onOk && (
                <Button onClick={onOk} {...okButtonProps}>
                    {okText}
                </Button>
            )}
        </div>
    );
};

export const Dialog = ({
    visible,
    children,
    title,
    rounded,
    dark,
    className,
    onOk,
    onCancel,
    okButtonProps,
    cancelButtonProps,
    okText,
    cancelText,
    ...props
}) => {
    return (
        <dialog
            className={cn(
                "nes-dialog",
                { "is-rounded": rounded },
                { "is-dark": dark },
                className
            )}
            open={visible}
            {...props}
        >
            <div className="nes-dialog-body">
                {title && <p className="title">{title}</p>}
                {children}
                <Menu
                    onOk={onOk}
                    onCancel={onCancel}
                    okButtonProps={okButtonProps}
                    cancelButtonProps={cancelButtonProps}
                    okText={okText}
                    cancelText={cancelText}
                />
            </div>
        </dialog>
    );
};

Dialog.propTypes = {
    visible: t.bool,
    children: t.node,
    title: t.string,
    rounded: t.bool,
    dark: t.bool,
    className: t.string,
    onOk: t.func,
    onCancel: t.func,
    okButtonProps: t.object,
    cancelButtonProps: t.object,
    okText: t.string,
    cancelText: t.string
};

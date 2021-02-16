import cn from "classnames";
import t from "prop-types";

export const Dialog = ({
    open,
    children,
    title,
    rounded,
    dark,
    className,
    ...props
}) => {
    return (
        <dialog
            className={cn(
                "nes-table",
                { "is-rounded": rounded },
                { "is-dark": dark },
                className
            )}
            {...props}
            open={open}
        >
            <div className="nes-table-body">
                {title && <p class="title">{title}</p>}
                {children}
                <menu class="dialog-menu">
                    <button class="nes-btn">Cancel</button>
                    <button class="nes-btn is-primary">Confirm</button>
                </menu>
            </div>
        </dialog>
    );
};

Dialog.propTypes = {
    open: t.bool,
    rounded: t.bool,
    dark: t.bool,
    className: t.string
};

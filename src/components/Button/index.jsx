import cn from "classnames";
import t from "prop-types";

export const Button = ({
    children,
    kind,
    disabled,
    className,
    onClick,
    ...props
}) => {
    disabled && (kind = "disabled");

    return (
        <button
            className={cn("nes-btn", { [`is-${kind}`]: kind }, className)}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: t.node,
    kind: t.oneOf(["primary", "success", "warning", "error", "disabled"]),
    disabled: t.bool,
    className: t.string,
    onClick: t.func
};

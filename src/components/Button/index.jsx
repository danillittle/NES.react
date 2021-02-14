import cn from "classnames";
import t from "prop-types";

export const Button = ({
    children,
    as,
    kind,
    disabled,
    className,
    onClick,
    ...props
}) => {
    const Tag = as;
    disabled && (kind = "disabled");

    return (
        <Tag
            className={cn("nes-btn", { [`is-${kind}`]: kind }, className)}
            onClick={onClick}
            {...props}
        >
            {children}
        </Tag>
    );
};

Button.propTypes = {
    children: t.node,
    as: t.oneOfType([t.node, t.string]),
    kind: t.oneOf(["primary", "success", "warning", "error", "disabled"]),
    disabled: t.bool,
    className: t.string,
    onClick: t.func
};

Button.defaultProps = {
    as: "button"
};

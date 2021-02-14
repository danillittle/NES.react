import cn from "classnames";
import t from "prop-types";

export const Button = ({ children, as, kind, disabled, ...props }) => {
    const Tag = as;
    disabled && (kind = "disabled");

    return (
        <Tag className={cn("nes-btn", { [`is-${kind}`]: kind })} {...props}>
            {children}
        </Tag>
    );
};

Button.propTypes = {
    as: t.oneOfType([t.node, t.string]),
    kind: t.oneOf(["primary", "success", "warning", "error", "disabled"]),
    disabled: t.bool
};

Button.defaultProps = {
    as: "button"
};

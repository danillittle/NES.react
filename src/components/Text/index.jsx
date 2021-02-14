import cn from "classnames";
import t from "prop-types";

export const Text = ({ children, as = "p", kind, className, ...props }) => {
    const Tag = as;

    return (
        <Tag
            className={cn("nes-text", { [`is-${kind}`]: kind }, className)}
            {...props}
        >
            {children}
        </Tag>
    );
};

Text.propTypes = {
    children: t.node,
    as: t.oneOfType([t.node, t.string]),
    kind: t.oneOf(["primary", "success", "warning", "error", "disabled"]),
    className: t.string
};

import cn from "classnames";
import t from "prop-types";

export const Text = ({ children, as, kind, className, ...props }) => {
    const Tag = as;

    return (
        <Tag className={cn("nes-text", `is-${kind}`, className)} {...props}>
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

Text.defaultProps = {
    as: "span",
    kind: "primary"
};

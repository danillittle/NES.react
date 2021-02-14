import cn from "classnames";
import t from "prop-types";

export const Text = ({ children, as, kind, ...props }) => {
    const Tag = as;

    return (
        <Tag className={cn("nes-text", `is-${kind}`)} {...props}>
            {children}
        </Tag>
    );
};

Text.propTypes = {
    as: t.oneOfType([t.node, t.string]),
    kind: t.oneOf(["primary", "success", "warning", "error", "disabled"])
};

Text.defaultProps = {
    as: "span",
    kind: "primary"
};

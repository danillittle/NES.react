import cn from "classnames";
import t from "prop-types";

const Badge = ({
    children,
    as = "span",
    kind = "dark",
    icon,
    iconKind = "warning",
    className,
    ...props
}) => {
    const Tag = as;

    return (
        <Tag
            className={cn("nes-badge", { "is-icon": icon }, className)}
            {...props}
        >
            {icon && (
                <span className={cn({ [`is-${iconKind}`]: iconKind })}>
                    {icon}
                </span>
            )}
            <span className={cn({ [`is-${kind}`]: kind })}>{children}</span>
        </Tag>
    );
};

Badge.propTypes = {
    children: t.node,
    as: t.string,
    kind: t.oneOf(["primary", "success", "warning", "error", "dark"]),
    icon: t.node,
    iconKind: t.oneOf(["primary", "success", "warning", "error", "dark"]),
    className: t.string
};

export default Badge;

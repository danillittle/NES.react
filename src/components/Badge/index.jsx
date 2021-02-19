import cn from "classnames";
import t from "prop-types";

export const Item = ({ children, kind = "dark", ...props }) => (
    <span className={cn({ [`is-${kind}`]: kind })} {...props}>
        {children}
    </span>
);

const Badge = ({ children, as = "span", kind, icon, className, ...props }) => {
    const Tag = as;
    const splited = typeof children !== "string";

    return (
        <Tag
            className={cn(
                "nes-badge",
                { "is-splited": splited },
                { "is-icon": icon },
                className
            )}
            {...props}
        >
            {splited ? children : <Item kind={kind}>{children}</Item>}
        </Tag>
    );
};

Badge.propTypes = {};

export default Badge;

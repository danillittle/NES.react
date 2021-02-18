import cn from "classnames";
import t from "prop-types";

const Balloon = ({
    children,
    as = "div",
    from,
    dark,
    className,
    style,
    ...props
}) => {
    const Tag = as;

    return (
        <Tag
            className={cn(
                "nes-balloon",
                { [`from-${from}`]: from },
                { "is-dark": dark },
                className
            )}
            {...props}
        >
            {children}
        </Tag>
    );
};

Balloon.propTypes = {
    children: t.node,
    as: t.string,
    from: t.oneOf(["left", "right"]),
    dark: t.bool,
    className: t.string
};

export default Balloon;

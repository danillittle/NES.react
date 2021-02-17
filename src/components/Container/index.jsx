import cn from "classnames";
import t from "prop-types";

const Container = ({
    children,
    title,
    centered,
    rounded,
    dark,
    className,
    ...props
}) => (
    <div
        className={cn(
            "nes-container",
            { "with-title": title },
            { "is-centered": centered },
            { "is-rounded": rounded },
            { "is-dark": dark },
            className
        )}
        {...props}
    >
        {title && <p className="title">{title}</p>}
        {children}
    </div>
);

Container.propTypes = {
    children: t.node,
    title: t.string,
    centered: t.bool,
    rounded: t.bool,
    dark: t.bool,
    className: t.string
};

export default Container;

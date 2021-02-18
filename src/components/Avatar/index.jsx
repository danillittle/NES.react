import cn from "classnames";
import t from "prop-types";

const Avatar = ({ src, alt, size, rounded, className, style, ...props }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={cn(
                "nes-avatar",
                { [`is-${size}`]: size },
                { "is-rounded": rounded },
                className
            )}
            style={{ imageRendering: "pixelated", ...style }}
            {...props}
        />
    );
};

Avatar.propTypes = {
    src: t.string,
    alt: t.string,
    size: t.oneOf(["small", "medium", "large"]),
    rounded: t.bool,
    className: t.string,
    style: t.object
};

export default Avatar;

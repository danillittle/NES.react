import cn from "classnames";
import t from "prop-types";

export const Input = ({
    as,
    type,
    id,
    value,
    placeholder,
    onChange,
    kind,
    dark,
    label,
    inline,
    className,
    ...props
}) => {
    const Tag = as;

    return (
        <div className={cn("nes-field", { "is-inline": inline }, className)}>
            {label ? (
                <label htmlFor={id} style={dark && { color: "#fff" }}>
                    {label}
                </label>
            ) : null}
            <Tag
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={cn(
                    `nes-${as}`,
                    { [`is-${kind}`]: kind },
                    { "is-dark": dark }
                )}
                {...props}
            />
        </div>
    );
};

Input.propTypes = {
    as: t.oneOf(["input", "textarea"]),
    type: t.string,
    id: t.oneOfType([t.string, t.number]),
    value: t.string,
    placeholder: t.string,
    onChange: t.func,
    kind: t.oneOf(["success", "warning", "error"]),
    dark: t.bool,
    label: t.string,
    className: t.string,
    inline: t.bool
};

Input.defaultProps = {
    as: "input",
    type: "text"
};

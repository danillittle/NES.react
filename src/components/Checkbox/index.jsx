import cn from "classnames";
import t from "prop-types";

export const Checkbox = ({
    name,
    label,
    checked,
    dark,
    onChange,
    className,
    style,
    ...props
}) => {
    return (
        <label className={className} style={style}>
            <input
                type="checkbox"
                name={name}
                className={cn("nes-checkbox", { "is-dark": dark })}
                onChange={onChange}
                checked={checked}
                {...props}
            />
            <span>{label}</span>
        </label>
    );
};

Checkbox.propTypes = {
    name: t.string,
    label: t.string.isRequired,
    onChange: t.func,
    checked: t.bool,
    dark: t.bool
};

import cn from "classnames";
import t from "prop-types";

export const Checkbox = ({
    name,
    label,
    checked,
    dark,
    onChange,
    className,
    ...props
}) => {
    return (
        <label className={className}>
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
    checked: t.bool,
    dark: t.bool,
    onChange: t.func,
    className: t.string
};

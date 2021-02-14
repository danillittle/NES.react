import cn from "classnames";
import t from "prop-types";

export const Radio = ({
    name,
    label,
    checked,
    dark,
    onChange,
    value,
    className,
    ...props
}) => {
    return (
        <label className={className}>
            <input
                type="radio"
                name={name}
                className={cn("nes-radio", { "is-dark": dark })}
                onChange={onChange}
                value={value}
                checked={checked}
                {...props}
            />
            <span>{label}</span>
        </label>
    );
};

Radio.propTypes = {
    name: t.string,
    label: t.string.isRequired,
    checked: t.bool,
    dark: t.bool,
    onChange: t.func,
    value: t.string,
    className: t.string
};

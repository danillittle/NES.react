import cn from "classnames";
import t from "prop-types";

export const Select = ({
    id,
    name,
    kind,
    dark,
    required,
    onChange,
    value,
    defaultValue,
    options,
    className,
    placeholder,
    ...props
}) => {
    return (
        <div
            className={cn(
                "nes-select",
                { [`is-${kind}`]: kind },
                { "is-dark": dark },
                className
            )}
        >
            <select
                id={id}
                onChange={onChange}
                value={value}
                defaultValue={defaultValue}
                required={required}
                {...props}
            >
                {placeholder ? (
                    <option value="" disabled hidden>
                        {placeholder}
                    </option>
                ) : null}
                {options.map((option, index) => (
                    <option
                        key={option.id || index}
                        value={option.value || option.id || option.name}
                    >
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

Select.propTypes = {
    id: t.oneOfType([t.string, t.number]),
    name: t.string,
    kind: t.oneOf(["success", "warning", "error"]),
    dark: t.bool,
    required: t.bool,
    onChange: t.func,
    value: t.oneOfType([t.string, t.number]),
    defaultValue: t.oneOfType([t.string, t.number]),
    options: t.arrayOf(
        t.shape({
            id: t.number.isRequired,
            name: t.string.isRequired,
            value: t.string
        })
    ),
    className: t.string,
    placeholder: t.string
};

Select.defaultProps = {
    defaultValue: ""
};

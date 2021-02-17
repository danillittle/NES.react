import cn from "classnames";
import t from "prop-types";

const Progress = ({ value, max, kind, className, ...props }) => {
    return (
        <progress
            className={cn("nes-progress", { [`is-${kind}`]: kind }, className)}
            value={value}
            max={max}
            {...props}
        ></progress>
    );
};

Progress.propTypes = {
    value: t.number,
    max: t.number,
    kind: t.oneOf(["primary", "success", "warning", "error", "pattern"]),
    className: t.string
};

export default Progress;

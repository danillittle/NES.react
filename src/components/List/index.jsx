import cn from "classnames";
import t from "prop-types";

export const List = ({ data, kind, render, className, ...props }) => {
    return (
        <ul
            className={cn("nes-list", { [`is-${kind}`]: kind }, className)}
            {...props}
        >
            {data.map((item, index) => (
                <li key={index}>{render ? render(item) : item}</li>
            ))}
        </ul>
    );
};

List.propTypes = {
    data: t.array,
    kind: t.oneOf(["disc", "circle"]),
    render: t.func,
    className: t.string
};

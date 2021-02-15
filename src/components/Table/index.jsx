import cn from "classnames";
import t from "prop-types";

export const Table = ({
    data,
    bordered,
    dark,
    columns,
    render,
    className,
    ...props
}) => {
    return (
        <div className="nes-table-responsive">
            <table
                className={cn(
                    "nes-table",
                    { "is-bordered": bordered },
                    { "is-dark": dark },
                    className
                )}
                {...props}
            >
                {columns ? (
                    <thead>
                        <tr>
                            {columns.map(({ title, render }, index) => (
                                <td key={index}>
                                    {render ? render(title) : title}
                                </td>
                            ))}
                        </tr>
                    </thead>
                ) : null}
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            {columns.map(({ dataIndex }, index) => (
                                <td key={index}>{item[dataIndex]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

List.propTypes = {
    data: t.array,
    kind: t.oneOf(["disc", "circle"]),
    render: t.func,
    className: t.string
};

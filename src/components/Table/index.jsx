import cn from "classnames";
import t from "prop-types";
import { Thead } from "./Thead";
import { Tbody } from "./Tbody";

export const Table = ({
    columns,
    data,
    bordered,
    centered,
    dark,
    className,
    ...props
}) => {
    return (
        <div className="nes-table-responsive">
            <table
                className={cn(
                    "nes-table",
                    { "is-bordered": bordered },
                    { "is-centered": centered },
                    { "is-dark": dark },
                    className
                )}
                {...props}
            >
                <Thead columns={columns} />
                <Tbody columns={columns} data={data} />
            </table>
        </div>
    );
};

Table.propTypes = {
    columns: t.arrayOf(
        t.shape({
            title: t.string,
            dataIndex: t.string,
            render: t.func
        })
    ),
    data: t.array,
    bordered: t.bool,
    centered: t.bool,
    dark: t.bool,
    className: t.string
};

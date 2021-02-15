import t from "prop-types";

export const Tbody = ({ columns, data }) => {
    if (!columns || !data) return null;

    return (
        <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    {columns.map(({ dataIndex, render }, index) => (
                        <td key={index}>
                            {render ? render(item) : item[dataIndex]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

Tbody.protoTypes = {
    columns: t.arrayOf(
        t.shape({
            dataIndex: t.string,
            render: t.func
        })
    ),
    data: t.array
};

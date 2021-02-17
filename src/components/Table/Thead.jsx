import t from "prop-types";

const Thead = ({ columns }) => {
    if (!columns) return null;

    return (
        <thead>
            <tr>
                {columns.map(({ title }, index) => (
                    <td key={index}>{title}</td>
                ))}
            </tr>
        </thead>
    );
};

Thead.protoTypes = {
    columns: t.arrayOf(
        t.shape({
            title: t.string
        })
    )
};

export default Thead;

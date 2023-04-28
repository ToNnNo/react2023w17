import DataList from "../component/DataList/DataList";

export default function Fragment() {

    const data = [
        { id: 1, title: 'HTML', description: 'HyperText Markup Language' },
        { id: 2, title: 'CSS', description: 'Cascading Style Sheets' },
        { id: 3, title: 'JS', description: 'JavaScript' },
    ];

    const example = { color: "purple", fontWeight: "bold" };

    return (
        <>
            <h2>Les Fragments</h2>

            <p className="small">
                <a href="https://react.dev/reference/react/Fragment" target="_blank" rel="noreferrer">
                    Documentation
                </a>
            </p>

            <DataList items={data} />

            <p style={example}>Exemple de datalist</p>
            <dl>
                <dt>Data Title 1</dt>
                <dd>Data Description 1</dd>
                <dt>Data Title 2</dt>
                <dd>Data Description 2</dd>
            </dl>
        </>
    );
}
export default function ListeFruit() {
    const fruits = ['Pomme', 'Poire', 'Cerise', 'Mangue', 'Orange'];

    return (
        <div>
            <h3>Affichage brute</h3>
            { fruits }
            <h3>Affichage simple</h3>
            <p>{ fruits.join(', ') }</p>

            <h3>Affichage en liste</h3>
            <ul>
                { fruits.map( (fruit, index) => <li key={index}>{fruit}</li>) }
            </ul>
        </div>
    );
}
export default function Syntaxe() {
    let name = 'Stéphane';
    let html = `Hello <b>${name}</b>`;
    let safeHtml = { __html: html }; // literal object

    return (
        <div>
            <h2>Opérateur d'interpolation</h2>
            <p>1 + 2 = {1 + 2}</p>

            <h2>Les variables</h2>
            <p>Hello {name}</p>

            <h2>Les Fonctions</h2>
            <p>Valeur numérique: { formatNumber(99876.54) }</p>

            <h2>XSS</h2>
            <p>{html}</p>

            <p dangerouslySetInnerHTML={safeHtml} />
        </div>
    );
}

function formatNumber(number) {
    return new Intl.NumberFormat('fr-fr').format(number)
}

/*
let i = 0;
i++; // impure
i = i + 1; // pure
*/
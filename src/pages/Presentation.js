import Color from "../component/Color";
import ListeFruit from "../component/ListeFruit";
import Notification from "../component/Notification";
import Syntaxe from "../component/Syntaxe";
import Useless from "../component/Useless/Useless";
import UselessClass from "../component/Useless/UselessClass";
import UselessButton from "../component/UselessButton";
import Welcome from "../component/Welcome";

export default function Presentation() {
    let prenom = 'Rémi';

    function information() {
        alert('Bonjour, comment ca va ?');
    }

    return (
        <div>
            <Notification show="true" />
            <section>
                <Useless />
                <UselessClass />
            </section>
            <section>
                <Syntaxe />
            </section>
            <section>
                <h2>Les props</h2>
                <Welcome />
                <Welcome name="Stéphane" />
                <Welcome name={prenom} />
            </section>
            <section>
                <h2>Les boucles</h2>
                <ListeFruit />
            </section>
            <section>
                <h2>Les events</h2>
                <div className="my-3">
                    <button className="btn btn-outline-primary btn-sm me-1" onClick={information}>
                        Cliquer ici</button>

                    <button className="btn btn-outline-primary btn-sm" onClick={() => { alert('Hello !') }}>
                        Cliquer ici</button>
                </div>

                <Color />

                <UselessButton />
            </section>
        </div>
    );
}
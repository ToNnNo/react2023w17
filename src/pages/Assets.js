import batman from '../assets/batman.jpg';
import mando from '../assets/mandalorian.jpg';

export default function Assets() {

    let img = { maxWidth: '100%' };

    return (
        <>
            <h2>Les Assets</h2>

            <figure>
                <img src={batman} alt="Logo batman the dark knight" style={img} />
                <figcaption>Batman</figcaption>
            </figure>
            <figure>
                <img src={mando} alt="Affiche de la série The Mandalorian" style={img} />
                <figcaption>Tha Mandalorian</figcaption>
            </figure>
        </>
    );
}
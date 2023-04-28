import { useState } from "react";

export default function Color() {
    const [classe, setClasse] = useState('initial');

    function changeColor(event) {
        const btn = event.target;

        setClasse(btn.dataset.className);
    }

    return (
        <div>
            <div className="btn-group">
                <button className="btn btn-outline-primary" onClick={changeColor} 
                    data-class-name="text-primary"> Bleu </button>
                <button className="btn btn-outline-primary" onClick={changeColor} 
                    data-class-name="text-danger"> Rouge </button>
                <button className="btn btn-outline-primary" onClick={changeColor} 
                    data-class-name="text-warning"> Jaune </button>
            </div>

            <p className={classe}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor sit 
                amet mi vitae congue. In et dignissim neque. Nunc convallis nec sem eget 
                aliquet. Suspendisse potenti. Donec pulvinar tempus ex nec semper. 
                Curabitur egestas gravida dui at cursus. Morbi non libero sed ante malesuada 
                interdum. Suspendisse augue tellus, tempor eget augue a, mollis ultrices 
                mauris. Cras eu ultrices nunc, id consectetur orci. Maecenas feugiat, sem 
                eu mattis mollis, velit nibh tempus justo, ac egestas diam massa non neque.
            </p>
                
        </div>
    )
}
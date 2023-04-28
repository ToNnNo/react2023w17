import { useState } from "react";

export default function Counter({ step = 1 }) {

    const [value, setValue] = useState(0);

    function decrease() {
        setValue( value - parseInt(step) );
    }

    function increase() {
        setValue( value + parseInt(step) );
    }

    return (
        <>
            <h3>Counter</h3>

            <button className="btn btn-sm btn-outline-primary" onClick={ decrease }>
                Diminuer de { step }</button>
            <span className="px-3">{ value }</span>
            <button className="btn btn-sm btn-outline-primary" onClick={ increase }>
                Augmenter de { step }</button>
        </>
    );
}
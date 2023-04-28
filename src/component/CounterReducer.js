import { useReducer } from "react";

function reducer(state, action) {
    const step = action.step || 1;
    
    switch(action.type) {
        case 'decrease':
            return { count: state.count - step };
        case 'increase':
            return { count: state.count + step };
        case 'reset':
            return { count: 0 };
        default:
            return { count: state.count };
    }
}

export default function CounterReducer() {

    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <>
            <h3>Counter <small>Hook Reducer</small></h3>

            <p>Compteur: { state.count }</p>
            
            <div className="btn-group btn-btn-group-sm">
                <button className="btn btn-outline-primary" 
                    onClick={ () => { dispatch( {type: 'decrease', step: 2} ) } }>Diminuer</button>
                <button className="btn btn-outline-primary" 
                    onClick={ () => { dispatch( {type: 'reset'} ) } }>Reset</button>
                <button className="btn btn-outline-primary" 
                    onClick={ () => { dispatch( {type: 'increase'} ) } }>Augmenter</button>
            </div>
        </>
    )
}
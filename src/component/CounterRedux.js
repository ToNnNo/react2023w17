import { useDispatch, useSelector } from "react-redux"
import { decrease, increase, reset } from "../slice/counterSlice";

function getStateData(state) {
  return state.counter;
}

export default function CounterRedux() {
  // 
  const counter = useSelector( (state) => state.counter );
  /*const counter = useSelector( function(state){
    return state.counter;
  })*/
  // const counter = useSelector( getStateData );
  const dispatch = useDispatch();

  return (
    <>
      <h3>Counter <small>Redux</small></h3>

      <p>Compteur: { counter.value }</p>
            
      <div className="btn-group btn-btn-group-sm">
          <button className="btn btn-outline-primary" 
            onClick={ () => { dispatch( decrease() ) } }>Diminuer</button>
          <button className="btn btn-outline-primary" 
            onClick={ () => { dispatch( reset() ) } }>Reset</button>
          <button className="btn btn-outline-primary" 
            onClick={ () => { dispatch( increase() ) } }>Augmenter</button>
      </div>
    </>
  )
}
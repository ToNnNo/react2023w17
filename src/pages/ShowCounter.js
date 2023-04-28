import { useSelector } from "react-redux"

export default function ShowCounter() {

  const counter = useSelector( (state) => state.counter )

  return (
    <>
      <h2>Show Counter</h2>

      <p>Compteur: { counter.value }</p>
    </>
  )
}